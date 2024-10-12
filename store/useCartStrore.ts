import {create} from 'zustand';
import { toast } from 'react-hot-toast';

interface Course {
    _id: string;
    price: number;

}

interface CartState {
    cart: Course[];
    total: number;
    totalItems: number;
    addToCart: (course: Course) => void;
    removeFromCart: (courseId: string) => void;
    resetCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
    cart: typeof window !== "undefined" && localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") as string) : [],
    total: typeof window !== "undefined" && localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total") as string) : 0,
    totalItems:  typeof window !== "undefined" && localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems") as string) : 0,
    
    addToCart: (course) => set((state) => {
        const index = state.cart.findIndex(item => item._id === course._id);

        if (index >= 0) {
            // If the course is already in the cart
            toast.error("Course already in cart");
            return state;
        }

        // If the course is not in the cart, add it to the cart
        const updatedCart = [...state.cart, course];
        const updatedTotalItems = state.totalItems + 1;
        const updatedTotal = state.total + course.price;

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("total", JSON.stringify(updatedTotal));
        localStorage.setItem("totalItems", JSON.stringify(updatedTotalItems));

        // Show toast
        toast.success("Course added to cart");

        return {
            cart: updatedCart,
            total: updatedTotal,
            totalItems: updatedTotalItems,
        }; 
    }),

    removeFromCart: (courseId) => set((state) => {
        const index = state.cart.findIndex(item => item._id === courseId);

        if (index < 0) {
            return state; // Course not found
        }

        const updatedCart = state.cart.filter(item => item._id !== courseId);
        const updatedTotalItems = state.totalItems - 1;
        const updatedTotal = state.total - state.cart[index].price;

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        localStorage.setItem("total", JSON.stringify(updatedTotal));
        localStorage.setItem("totalItems", JSON.stringify(updatedTotalItems));

        // Show toast
        toast.success("Course removed from cart");

        return {
            cart: updatedCart,
            total: updatedTotal,
            totalItems: updatedTotalItems,
        };
    }),

    resetCart: () => {
        // Reset the cart
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        localStorage.removeItem("totalItems");
        
        return {
            cart: [],
            total: 0,
            totalItems: 0,
        };
    },
}));

export const { addToCart, removeFromCart, resetCart } = useCartStore.getState();
export default useCartStore;
