import { StatusBar as StatusBarView } from 'react-native'
import { useThemeColor } from "../utils/colors"

export const StatusBar = () => {
    const backgroundColor = useThemeColor().background

    return <StatusBarView
        barStyle={'dark-content'}
        backgroundColor={backgroundColor}
    />
}