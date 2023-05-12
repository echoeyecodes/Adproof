import { useContext } from "react"
import { useColorScheme as useSystemColor } from "react-native"
import ThemeContext, { ThemeMode } from "../context/ThemeContext"

const commons = {
    green: '#4ADE80',
    red: '#B91C1C',
    white: '#FFFFFF',
    black: '#000000',
    primary: '#FFB027',
    primary1: '#FD22D4',
    transparent: 'transparent'
}

export const colors_dark = {
    ...commons,
    text: '#140033',
    border: '#C0C0C0',
    background: '#FFFFFF',
    gray: '#979797',
    colorOnPrimary: '#000000',
    inputBackground: '#F1F6FB',
    gray1: '#27272A',
    background1: '#0A0A0A'
}

export const colors_light = { ...colors_dark } // using same color scheme as light mode since no dark mode color scheme is available

export function useColorScheme() {
    const systemColor = useSystemColor()
    const { value } = useContext(ThemeContext)

    let color: ThemeMode
    if (value == ThemeMode.LIGHT) {
        color = ThemeMode.LIGHT
    } else if (value == ThemeMode.DARK) {
        color = ThemeMode.DARK
    } else {
        color = (systemColor == "dark" ? ThemeMode.DARK : ThemeMode.LIGHT)
    }

    return color
}

export const useThemeColor = () => {
    const isDarkMode = useColorScheme() === ThemeMode.DARK
    return isDarkMode ? colors_dark : colors_light
}