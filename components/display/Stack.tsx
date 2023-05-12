import { useMemo } from "react"
import { FlexAlignType, StyleSheet, View, ViewProps } from "react-native"

type JustifyContent = | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

type StackProps = ViewProps & {
    type?: "horizontal" | 'vertical',
    gap?: number,
    justifyContent?: JustifyContent,
    alignItems?: FlexAlignType,
}

export const Stack = (props: StackProps) => {
    const { type, gap, justifyContent, alignItems, style, ...extraProps } = props
    const stackGap = gap || 0

    const direction = useMemo(() => {
        return type == "vertical" ? 'column' : 'row'
    }, [type])

    return (
        <View style={[styles.container, style, {
            alignItems,
            justifyContent,
            flexDirection: direction,
            gap: stackGap
        }]} {...extraProps} />
    )
}

const styles = StyleSheet.create({
    container: {

    }
})