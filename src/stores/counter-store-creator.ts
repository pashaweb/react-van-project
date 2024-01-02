import { type StateCreator } from 'zustand';

export type CounterStore = {
  count: number;
  inc: () => void;
};

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () =>
    set((state) => {
      return { count: state.count + 1 };
    }),
});
