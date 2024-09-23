import { useContext, createContext, useEffect } from 'react';
import type { User } from '@/utility/types/user.types';

type UserContextType = {
    user?: User;
    setUser: (user?: User) => void;
};

class UserContext {
    private readonly _context = createContext<UserContextType>({
        setUser: () => {},
    });

    public setContext = (user?: User) => {
        const { setUser } = useContext(this._context);

        useEffect(() => {
            setUser(user);
        }, []);
    };

    public getContext = () => {
        const context = useContext(this._context);

        return context;
    };

    get context() {
        return this._context;
    };
};

export default UserContext;