import { StyleSheet } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { useNavigationUtil } from "../../utils/navigation/useNavigation"
import { Button } from "../buttons/Button"
import { Stack } from "../display/Stack"
import { Typography } from "../typography/Typography"

type HaveAccountProps = {

}

export const HaveAccount = (props: HaveAccountProps) => {
    const colors = useThemeColor()
    const { navigateToLoginPage } = useNavigationUtil()

    function handleNavigateToSignInPage() {
        navigateToLoginPage(true)
    }

    return (
        <Stack style={styles.container} justifyContent="center" alignItems="center">
            <Typography>Have an account?</Typography>
            <Button onClick={handleNavigateToSignInPage} buttonTextStyle={{
                flex: undefined,
                color: colors.text
            }} buttonContainerStyle={styles.signInBtn} variant="text">Sign in</Button>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    signInBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})