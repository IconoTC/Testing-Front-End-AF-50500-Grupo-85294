import { createContext } from "react";

export type AppContextType = {
    theme: string;
    language: string;
    isLoggedIn: boolean;
}


export const AppContext = createContext<AppContextType>({} as AppContextType);
