
import { create } from 'zustand';
// coustom hook;
interface CountType {
    count: number,
    addCount: () => void,
    decressCount: () => void,
}
// object 
export const useCountStore = create<CountType>((set, get) => ({
    count: 0,
    addCount: () => set((state) => ({ count: state.count + 1 })),
    decressCount: () => {
        set({ count: 5 })
    }
}))
