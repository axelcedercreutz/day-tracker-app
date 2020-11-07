import create from 'zustand';
import { User } from '../types';
import loginApi from '../services/api/login';
import usersApi from '../services/api/users';

type Store = {
  // ADMIN
  authToken: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  //
  user: User | undefined;
  setUser: (newState: User) => void;

  userToken: string | undefined;
  setUserToken: (token: string) => void;
  createUser: (username: string, password: string) => Promise<void>;
};

const useStore = create<Store>((set) => ({
  authToken: window.localStorage.getItem('authToken'),
  login: async (username, password) => {
    const authToken = await loginApi.login(username, password);
    console.log(authToken);
    window.localStorage.setItem('authToken', authToken);
    set({ authToken });
  },
  logout: () => {
    window.localStorage.removeItem('authToken');
    set({ authToken: null });
  },
  user: undefined,
  setUser: (newUser) => set({ user: newUser }),
  userToken: undefined,
  setUserToken: (userToken) => set({ userToken }),
  createUser: async (username, password) => {
    const newUser = await usersApi.createUser(username, password);
    set({ user: newUser });
  },
}));

export default useStore;
