import { useMemo } from "react"
import { Text, TextProps } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { textStyles } from "../../utils/styles/textStyles"

type TypographyVariants = "default" | "heading1" | "heading2" | "heading3"

type TypographyProps = TextProps & {
    variant?: TypographyVariants
}

export const Typography = (props: TypographyProps) => {
    const { variant: textVariant, style, ...textProps } = props
    const variant = textVariant || "default"
    const color = useThemeColor()

    const textStyle = useMemo(() => {
        switch (variant) {
            case "heading1":
                return textStyles.heading1
            case "heading2":
                return textStyles.heading2
            case "heading3":
                return textStyles.heading3
            default:
                return textStyles.default
        }
    }, [variant])

    return <Text style={[textStyle, {
        color: color.text
    }, style]} {...textProps}>{props.children}</Text>
}