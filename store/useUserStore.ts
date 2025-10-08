
import { create } from 'zustand';
export interface Usser {
    firstName: string,
    gender: string,
    id: number,
    email: string
}
interface UserType {
    users: Usser[],
    addUsers: () => Promise<void>,

}
export const useUserStore = create<UserType>((set) => ({
    users: [],
    addUsers: async () => {
        let res = await fetch("https://dummyjson.com/users");
        let data = await res.json();
        console.log(data);
        set({ users: [...data.users] });
    }
}))