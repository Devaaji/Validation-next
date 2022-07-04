import { parseCookies, setCookie, destroyCookie } from 'nookies';
import create from "zustand";
import { devtools } from "zustand/middleware"



const useUserStore = create(
    devtools(
        (set) => {
            const cookies = parseCookies();
            const { _id: id, _em: email } = cookies;

            return {
                id,
                email,
                setUserId: (newId) => {
                    setCookie(null, '_id', newId, { path: '/' });
                    set({ id: newId });
                },
                setLogin: (newEmail) => {
                    setCookie(null, '_em', newEmail, { path: '/' });
                    set({
                        email: newEmail,
                    });
                },
                removeUser: () => {
                    destroyCookie(null, '_em', { path: '/' });
                    destroyCookie(null, '_id', { path: '/' });
                    set({
                        id: undefined,
                        email: undefined,
                    });
                },
            }
        },
        { name: 'user' }
    )
);

export default useUserStore;
