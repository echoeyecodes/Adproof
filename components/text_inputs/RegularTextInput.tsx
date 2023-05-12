import { forwardRef, useMemo } from "react"
import { StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { Stack } from "../display/Stack"
import { Typography } from "../typography/Typography"

type TextInputVariant = "regular"

export type RegularTextInputProps = TextInputProps & {
    variant?: TextInputVariant,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    startLabel?: string,
    endLabel?: string,
    startLabelStyle?: StyleProp<TextStyle>,
    endLabelStyle?: StyleProp<TextStyle>,
    inputContainerStyles?: StyleProp<ViewStyle>,
    containerStyles?: StyleProp<ViewStyle>
}

export const RegularTextInput = forwardRef<TextInput, RegularTextInputProps>((props: RegularTextInputProps, ref) => {
    const { style, variant, startIcon, endIcon, inputContainerStyles, containerStyles, ...extraProps } = props
    const colors = useThemeColor()

    const inputVariant = props.variant || "regular"

    const inputContainerVariantStyles: StyleProp<TextStyle> = useMemo(() => {
        switch (inputVariant) {
            case "regular":
                return {
                    backgroundColor: colors.inputBackground,
                }
        }
    }, [inputVariant])

    return <View style={[styles.container, props.containerStyles]}>
        <Stack>
            {props.startLabel && <Typography style={[styles.inputLabel, props.startLabelStyle]}>{props.startLabel}</Typography>}
            <View style={{ flex: 1 }} />

            {props.endLabel && <Typography style={[styles.inputLabel, props.endLabelStyle]}>{props.endLabel}</Typography>}
        </Stack>
        <View style={[styles.inputContainer, inputContainerVariantStyles]}>
            {startIcon && startIcon}
            <TextInput ref={ref} {...extraProps} placeholderTextColor={colors.gray} cursorColor={colors.text} style={[styles.inputField, {
                color: colors.text
            }, style]} />
            {endIcon && endIcon}
        </View>
    </View>
})

const styles = StyleSheet.create({
    container: {

    },
    inputContainer: {
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputLabel: {
        marginBottom: 5
    },
    inputField: {
        padding: 10,
        paddingHorizontal: 10,
        flex: 1
    }
})