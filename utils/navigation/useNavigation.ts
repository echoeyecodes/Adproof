import { StackActions, useNavigation } from "@react-navigation/native"

export function useNavigationUtil() {
    const navigation = useNavigation()

    function navigateToSignUpPage() {
        navigation.dispatch(StackActions.push("SignUp"))
    }

    function navigateToLoginPage(reset?: boolean) {
        if (reset) {
            return navigation.dispatch(StackActions.replace("Login"))
        } else navigation.dispatch(StackActions.push("Login"))
    }

    function navigateToSignUpInfoPage() {
        navigation.dispatch(StackActions.push("SignUpInfo"))
    }

    function goBack() {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }

    return {
        navigateToSignUpPage,
        navigateToLoginPage,
        navigateToSignUpInfoPage,
        goBack
    }
}