import create from 'zustand';
import { nanoid } from 'nanoid';

export const useStore = create((set) => ({
  cubes: [],
  color: 'white',
  addCube: (x, y, z) =>
    set((state) => ({
      cubes: [
        ...state.cubes,
        { key: nanoid(), pos: [x, y, z], color: state.color },
      ],
    })),
  removeCube: (x, y, z) => {
    set((state) => ({
      cubes: state.cubes.filter((cube) => {
        const [_x, _y, _z] = cube.pos;
        return _x !== x || _y !== y || _z !== z;
      }),
    }));
  },
  setColor: (color) => set((state) => ({ color })),
}));
