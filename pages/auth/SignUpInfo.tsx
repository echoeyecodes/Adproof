import { StyleSheet, View } from "react-native"
import { Button } from "../../components/buttons/Button"
import { Stack } from "../../components/display/Stack"
import { AuthLayout } from "../../components/layout/AuthLayout"
import { RegularTextInput } from "../../components/text_inputs/RegularTextInput"
import EyeIcon from '../../assets/icons/ic_eye_visible.svg'
import EyeIconOff from '../../assets/icons/ic_eye_invisible.svg'
import { useThemeColor } from "../../utils/colors"
import { useCallback, useState } from "react"
import { IconButton } from "../../components/buttons/IconButton"
import { HaveAccount } from "../../components/auth/HaveAccount"
import { isEmail } from "../../utils/validation/validation"
import Snackbar from 'react-native-snackbar';

type SignUpInfoPageProps = {

}

export const SignUpInfoPage = (props: SignUpInfoPageProps) => {
    const colors = useThemeColor()
    const [showPassword, setShowPassword] = useState(false)
    const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false)
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onEmailChange(value: string) {
        setEmail(value)
    }

    function onFirstNameChange(value: string) {
        setFirstname(value)
    }

    function onLastNameChange(value: string) {
        setLastName(value)
    }

    function onPasswordChange(value: string) {
        setPassword(value)
    }

    function revealPassword() {
        setShowPassword(true)
    }

    function hidePassword() {
        setShowPassword(false)
    }

    function signUp() {
        if (!isEmail(email)) {
            return showErrorSnackbar("Email is invalid")
        }
        if (firstname.trim().length < 3) {
            return showErrorSnackbar("First Name should be at least 3 letters")
        }
        if (lastname.trim().length < 3) {
            return showErrorSnackbar("Last Name should be at least 3 letters")
        }
        Snackbar.show({
            text: 'Sign Up Successful',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: colors.green
        });
    }

    function showErrorSnackbar(message: string) {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_SHORT
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
        <AuthLayout message={'Register now to enjoy maximum security and advanced protection on the internet'}>
            <View style={styles.container}>

                <Stack type="vertical" gap={10}>
                    <RegularTextInput value={firstname} onChangeText={onFirstNameChange} inputMode="text" containerStyles={styles.inputItem} startLabel="First Name" placeholder="Your First Name" />

                    <RegularTextInput value={lastname} onChangeText={onLastNameChange} inputMode="text" containerStyles={styles.inputItem} startLabel="Last Name" placeholder="Your Last Name" />

                    <RegularTextInput value={email} onChangeText={onEmailChange} inputMode="email" containerStyles={styles.inputItem} startLabel="Email" placeholder="Your email address" />

                    <RegularTextInput value={password} onChangeText={onPasswordChange} secureTextEntry={!showPassword} containerStyles={styles.inputItem} startLabel="Password" placeholder="Enter your password" endIcon={<EndIcon />} endLabel={isPasswordIncorrect ? "Incorrect Password!" : ""} endLabelStyle={{
                        color: colors.primary
                    }} />
                </Stack>

                <Stack style={styles.forgotPasswordContainer}>
                    <View style={{ flex: 1 }} />
                    <Button buttonTextStyle={{
                        color: colors.text
                    }} variant="text">Forgot Password</Button>
                </Stack>

                <Button onClick={signUp} buttonContainerStyle={styles.signUpBtn}>Sign Up</Button>

                <HaveAccount />
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

    },
    forgotPasswordContainer: {
        marginEnd: -5
    },
    signUpBtn: {
        paddingVertical: 15,
        marginTop: 20
    },
})