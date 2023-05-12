import { StyleSheet, View } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { Stack } from "../display/Stack"
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

type CarouselIndicatorProps = {
    size: number,
    activeIndex: number,
    animValue: Animated.SharedValue<number>
}

const INDICATOR_SIZE = 10
const GAP = 10

export const CarouselIndicator = (props: CarouselIndicatorProps) => {
    const { size, activeIndex, animValue } = props
    const colors = useThemeColor()

    const inputEnd = size - 1
    const animStyle = useAnimatedStyle(() => {
        let inputRange = [0, inputEnd];
        let outputRange = [0, INDICATOR_SIZE * (size + 1) + (GAP * (inputEnd - 2))];

        return {
            transform: [
                {
                    translateX: interpolate(
                        animValue.value,
                        inputRange,
                        outputRange,
                        Extrapolate.CLAMP,
                    ),
                },
            ],
        };
    }, [animValue, activeIndex, size]);

    return (
        <Stack justifyContent="center" style={styles.container}>

            <Stack gap={10}>
                {Array(size).fill(0).map((_, index) => <View key={index} style={[styles.indicator, {
                    backgroundColor: colors.gray
                }]} />)}

                <Animated.View style={[styles.indicator, animStyle, styles.activeIndicator, {
                    backgroundColor: colors.primary1
                }]} />
            </Stack>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    indicator: {
        width: INDICATOR_SIZE,
        height: INDICATOR_SIZE,
        borderRadius: 50
    },
    activeIndicator: {
        position: 'absolute',
        left: 0
    }
})