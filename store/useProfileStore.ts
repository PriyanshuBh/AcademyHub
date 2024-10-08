import {create} from 'zustand';

interface ProfileState {
    user: any; 
    loading: boolean;
    setUser: (user: any) => void; 
    setLoading: (loading: boolean) => void;
}

const useProfileStore = create<ProfileState>((set) => ({
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null,
    loading: false,
    setUser: (user) => {
        set({ user });
        localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
    },
    setLoading: (loading) => set({ loading }),
}));

export const { setUser, setLoading } = useProfileStore.getState();
export default useProfileStore;
