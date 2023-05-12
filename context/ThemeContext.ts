import { createContext } from "react"

export enum ThemeMode {
    LIGHT,
    DARK,
    DEFAULT
}

type ThemeContextType = {
    value: ThemeMode,
    toggleTheme?: (value: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType>({
    value: ThemeMode.DARK,
    toggleTheme: () => { }
})

export default ThemeContext