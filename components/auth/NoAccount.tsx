import { StyleSheet } from "react-native"
import { useThemeColor } from "../../utils/colors"
import { useNavigationUtil } from "../../utils/navigation/useNavigation"
import { Button } from "../buttons/Button"
import { Stack } from "../display/Stack"
import { Typography } from "../typography/Typography"

type NoAccountProps = {

}

export const NoAccount = (props: NoAccountProps) => {
    const colors = useThemeColor()
    const { navigateToSignUpPage } = useNavigationUtil()

    return (
        <Stack style={styles.container} justifyContent="center" alignItems="center">
            <Typography>Don't have an account?</Typography>
            <Button onClick={navigateToSignUpPage} buttonTextStyle={{
                flex: undefined,
                color: colors.text
            }} buttonContainerStyle={styles.signUpBtn} variant="text">Sign Up</Button>
        </Stack>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    signUpBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})