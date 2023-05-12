import { ScrollView, StyleSheet, View } from "react-native"
import { useThemeColor } from "../../utils/colors"

type ScreenLayoutProps = {
    children?: React.ReactNode
}

export const OnboardingLayout = (props: ScreenLayoutProps) => {
    const colors = useThemeColor()

    return (
        <View style={[styles.container, {
            backgroundColor: colors.background
        }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.content}>
                {props.children}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1
    },
    scrollViewContent:{
        paddingTop: 50,
        paddingBottom: 100
    }
})