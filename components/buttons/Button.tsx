import { useMemo } from "react"
import { TouchableNativeFeedback, View, StyleSheet, Text, ViewStyle, StyleProp, TextStyle } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { Typography } from "../typography/Typography"

type ButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
    variant?: ButtonVariants,
    startIcon?: React.ReactNode,
    buttonContainerStyle?: StyleProp<ViewStyle>,
    buttonTextStyle?: StyleProp<TextStyle>
}

type ButtonVariants = "contained" | "outlined" | "text"

export const Button = (props: ButtonProps) => {
    const colors = useThemeColor()
    const variant = props.variant || "contained"

    const btnStyle: StyleProp<ViewStyle> = useMemo(() => {
        switch (variant) {
            case "contained":
                return {
                    backgroundColor: colors.primary
                }
            case "outlined":
                return {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    borderColor: colors.primary
                }
            case "text":
                return {
                    backgroundColor: 'transparent'
                }
            default:
                return {

                }
        }
    }, [variant])

    const btnTextStyle: StyleProp<TextStyle> = useMemo(() => {
        switch (variant) {
            case "contained":
                return {
                    color: colors.colorOnPrimary
                }
            case "outlined":
                return {
                    color: colors.primary
                }
            case "text":
                return {
                    color: colors.primary
                }
            default:
                return {

                }
        }
    }, [variant])

    return <TouchableNativeFeedback onPress={props.onClick}>
        <View style={[styles.container, btnStyle, props.buttonContainerStyle]}>
            {props.startIcon}
            <Typography style={[styles.btnText, btnTextStyle, props.buttonTextStyle]}>{props.children}</Typography>
        </View>
    </TouchableNativeFeedback>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: "bold",
        flex: 1
    }
})