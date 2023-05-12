import { ScrollView, StyleSheet, View } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { LogoComponent } from "../LogoComponent"
import { Typography } from "../typography/Typography"
import { ScreenLayout } from "./ScreenLayout"

type AuthLayoutProps = {
    children?: React.ReactNode,
    message: string
}

export const AuthLayout = (props: AuthLayoutProps) => {
    const colors = useThemeColor()

    return (
        <ScreenLayout>
            <ScrollView contentContainerStyle={styles.scrollContainerView} keyboardShouldPersistTaps="handled">
                <View style={styles.logoContainer}>
                    <LogoComponent />
                    <Typography style={[styles.message, {
                        color: colors.gray
                    }]}>{props.message}</Typography>
                </View>
                <View style={styles.content}>
                    {props.children}
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainerView: {
        paddingBottom: 50
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        marginTop: 20
    },
    message: {
        textAlign: 'center',
        marginTop: 10,
        maxWidth: '70%'
    }
})