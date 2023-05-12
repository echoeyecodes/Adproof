import { Image, StyleSheet, View } from "react-native"
import { Typography } from "../typography/Typography"

type OnboardingItemProps = {
    data: {
        title: string,
        message: string
    }
}

export const OnboardingItem = (props: OnboardingItemProps) => {
    const { data } = props

    return <View style={styles.container}>
        <Typography style={styles.onboardingTitle} variant="heading1">
            {data.title}
        </Typography>

        <Image style={styles.onboardingItemImage} source={require("../../assets/images/onboarding_image_grid.png")} />

        <Typography style={styles.onboardingItemDesc}>
            {data.message}
        </Typography>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onboardingTitle: {
        maxWidth: '70%',
        textAlign: 'center'
    },
    onboardingItemImage: {
        marginVertical: 10
    },
    onboardingItemDesc: {
        maxWidth: '50%',
        textAlign: 'center'
    },
})