import {create} from 'zustand';

interface signupDataType{
  accountType: string;
  firstName: string;
  lastName: string;
  email:string;
  password:string;
  conformPassword:string;
}

interface AuthState {
    token: string | null;
    signupData?:signupDataType; // You can define a more specific type if needed
    loading: boolean;
    setSignupData: (data: any) => void; 
    setLoading: (loading: boolean) => void;
    setToken: (token: string | null) => void;
}

const useAuthStore = create<AuthState>((set) => ({
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") as string) : null,
    signupData: undefined,
    loading: false,
    setSignupData: (data) => set({ signupData: data }),
    setLoading: (loading) => set({ loading }),
    setToken: (token) => {
        if (token) {
            localStorage.setItem("token", JSON.stringify(token)); // Save token to localStorage
        } else {
            localStorage.removeItem("token"); // Remove token from localStorage if null
        }
        set({ token });
    },
}));

export const { setToken, setLoading, setSignupData } = useAuthStore.getState();
export default useAuthStore;
