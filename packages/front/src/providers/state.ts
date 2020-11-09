import create from 'zustand';
import { User } from '../types';
import loginApi from '../services/api/login';
import usersApi from '../services/api/users';

type Store = {
  // ADMIN
  userToken: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  //
  user: User | undefined;
  setUser: (newState: User) => void;

  createUser: (username: string, password: string) => Promise<void>;
};

const useStore = create<Store>((set) => ({
  userToken: window.localStorage.getItem('userToken'),
  login: async (username, password) => {
    const user = await loginApi.login(username, password);
    window.localStorage.setItem('userToken', user.token);
    window.localStorage.setItem('user', JSON.stringify(user));
    set({ userToken: user.token });
    set({ user: user });
  },
  logout: () => {
    window.localStorage.removeItem('userToken');
    set({ user: undefined });
    set({ userToken: undefined });
  },
  user: undefined,
  setUser: (newUser) => set({ user: newUser }),
  createUser: async (username, password) => {
    const newUser = await usersApi.createUser(username, password);
    set({ user: newUser });
  },
}));

export default useStore;
