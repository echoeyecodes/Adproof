import { StyleSheet, View } from "react-native"
import { Button } from "../../components/buttons/Button"
import { Stack } from "../../components/display/Stack"
import { AuthLayout } from "../../components/layout/AuthLayout"
import { RegularTextInput } from "../../components/text_inputs/RegularTextInput"
import EyeIcon from '../../assets/icons/ic_eye_visible.svg'
import EyeIconOff from '../../assets/icons/ic_eye_invisible.svg'
import Snackbar from 'react-native-snackbar';
import { useThemeColor } from "../../utils/colors"
import { useCallback, useState } from "react"
import { IconButton } from "../../components/buttons/IconButton"
import { NoAccount } from "../../components/auth/NoAccount"
import { isEmail } from "../../utils/validation/validation"
import { DEFAULT_PASSWORD } from "../../utils/constants"

type LoginPageProps = {

}

export const LoginPage = (props: LoginPageProps) => {
    const colors = useThemeColor()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false)

    function revealPassword() {
        setShowPassword(true)
    }

    function hidePassword() {
        setShowPassword(false)
    }

    function onEmailChange(value: string) {
        setEmail(value)
    }

    function onPasswordChange(value: string) {
        setIsPasswordIncorrect(false)
        setPassword(value)
    }

    function login() {
        if (!isEmail(email)) {
            Snackbar.show({
                text: 'Invalid Email',
                duration: Snackbar.LENGTH_SHORT,
            });
        }
        if (password != DEFAULT_PASSWORD) {
            return setIsPasswordIncorrect(true)
        }
        Snackbar.show({
            text: 'Login Successful',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.green
        });
    }

    const EndIcon = useCallback(() => {
        if (showPassword) {
            return <IconButton onClick={hidePassword}>
                <EyeIconOff color={colors.text} />
            </IconButton>
        } else {
            return <IconButton onClick={revealPassword}>
                <EyeIcon color={colors.text} />
            </IconButton>
        }
    }, [showPassword])

    return (
        <AuthLayout message={'Login now to access super fasting streaming'}>
            <View style={styles.container}>
                <RegularTextInput value={email} onChangeText={onEmailChange} inputMode="email" containerStyles={styles.inputItem} startLabel="First Name" placeholder="Your email address" />

                <RegularTextInput value={password} onChangeText={onPasswordChange} secureTextEntry={!showPassword} containerStyles={styles.inputItem} startLabel="Password" placeholder="Enter your password" endIcon={<EndIcon />} endLabel={isPasswordIncorrect ? "Incorrect Password!" : ""} endLabelStyle={{
                    color: colors.primary
                }} />

                <Stack style={styles.forgotPasswordContainer}>
                    <View style={{ flex: 1 }} />
                    <Button buttonTextStyle={{
                        color: colors.text
                    }} variant="text">Forgot Password</Button>
                </Stack>

                <Button onClick={login} buttonContainerStyle={styles.loginBtn}>Login</Button>

                <NoAccount />
            </View>
        </AuthLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        padding: 10
    },
    inputItem: {
        marginVertical: 10
    },
    forgotPasswordContainer: {
        marginEnd: -5
    },
    loginBtn: {
        paddingVertical: 15,
        marginTop: 20
    }
})