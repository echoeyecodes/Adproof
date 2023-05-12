import { StyleSheet, View } from "react-native"
import { Button } from "../../components/buttons/Button"
import { AuthLayout } from "../../components/layout/AuthLayout"
import AppleIcon from '../../assets/icons/ic_apple.svg'
import GoogleIcon from '../../assets/icons/ic_google.svg'
import MessageIcon from '../../assets/icons/ic_message.svg'
import { useThemeColor } from "../../utils/colors"
import { useMemo } from "react"
import { Stack } from "../../components/display/Stack"
import { HaveAccount } from "../../components/auth/HaveAccount"
import { useNavigationUtil } from "../../utils/navigation/useNavigation"

type SignUpPageProps = {

}

export const SignUpPage = (props: SignUpPageProps) => {
    const colors = useThemeColor()
    const { navigateToSignUpInfoPage } = useNavigationUtil()

    const socialBtnStyles = useMemo(() => {
        return {
            buttonContainerStyle: {
                borderColor: colors.gray,
                paddingHorizontal: 20
            },
            btnTextStyle: {
                color: colors.text
            }
        }
    }, [colors])

    return (
        <AuthLayout message='Register now to enjoy maximum security 
        and advanced protection on the internet'>
            <View style={styles.container}>

                <Stack type="vertical" gap={20}>
                    <Button onClick={navigateToSignUpInfoPage}  startIcon={<View style={[styles.iconContainer, {
                        backgroundColor: colors.black
                    }]}>
                        <MessageIcon color={colors.white} />
                    </View>} buttonContainerStyle={[styles.actionBtn, socialBtnStyles.buttonContainerStyle]} buttonTextStyle={[socialBtnStyles.btnTextStyle]} variant="outlined">
                        Sign up with Email
                    </Button>

                    <Button startIcon={<View style={[styles.iconContainer, {
                        backgroundColor: colors.black
                    }]}>
                        <AppleIcon color={colors.white} />
                    </View>} buttonContainerStyle={[styles.actionBtn, socialBtnStyles.buttonContainerStyle]} buttonTextStyle={[socialBtnStyles.btnTextStyle]} variant="outlined">
                        Sign up with Apple
                    </Button>

                    <Button startIcon={<View style={[styles.iconContainer, styles.googleIconContainer, {
                        backgroundColor: colors.white,
                        borderColor: colors.gray
                    }]}>
                        <GoogleIcon color={colors.white} />
                    </View>} buttonContainerStyle={[styles.actionBtn, socialBtnStyles.buttonContainerStyle]} buttonTextStyle={[socialBtnStyles.btnTextStyle]} variant="outlined">
                        Sign up with Google
                    </Button>
                </Stack>

                <HaveAccount />
            </View>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        padding: 10
    },
    actionBtn: {
        paddingVertical: 10
    },
    iconContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleIconContainer: {
        borderWidth: 1
    }
})