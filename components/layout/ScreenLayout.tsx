import { StyleSheet, View } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { SecondaryToolbar, SecondaryToolbarProps } from "../SecondaryToolbar"

type ScreenLayoutProps = {
    children?: React.ReactNode,
    toolbarProps?: SecondaryToolbarProps
}

export const ScreenLayout = (props: ScreenLayoutProps) => {
    const { toolbarProps } = props
    const colors = useThemeColor()

    return (
        <View style={[styles.container, {
            backgroundColor: colors.background
        }]}>
            <SecondaryToolbar {...toolbarProps} title={toolbarProps?.title || ''}  />
            <View style={styles.content}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    }
})