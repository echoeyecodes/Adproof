import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginPage } from "../../pages/auth/Login";
import { Onboarding } from "../../pages/auth/Onboarding";
import { SignUpPage } from "../../pages/auth/SignUp";
import { SignUpInfoPage } from "../../pages/auth/SignUpInfo";

type RootDefaultStackParams = {
    Onboarding: undefined,
    Login: undefined,
    SignUp: undefined,
    SignUpInfo: undefined
}

const Stack = createNativeStackNavigator<RootDefaultStackParams>()

export const RootNavigation = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="SignUp" component={SignUpPage} />
            <Stack.Screen name="SignUpInfo" component={SignUpInfoPage} />
        </Stack.Navigator>
    </NavigationContainer>
}