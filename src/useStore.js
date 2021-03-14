import create from 'zustand';

export const useStore = create((set) => ({
  cubes: [],
  color: 'white',
  addCube: (x, y, z) =>
    set((state) => ({
      cubes: [...state.cubes, { pos: [x, y, z], color: state.color }],
    })),
  removeCube: (x, y, z) =>
    set((state) => ({
      cubes: state.cubes.filter(
        ({ pos }) => pos[0] !== x || pos[1] !== y || pos[2] !== z
      ),
    })),
  setColor: (color) => set((state) => ({ color })),
}));
