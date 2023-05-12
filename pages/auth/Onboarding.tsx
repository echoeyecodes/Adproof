import { useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native"
import { useSharedValue } from "react-native-reanimated";
import Carousel from 'react-native-reanimated-carousel';
import { Button } from "../../components/buttons/Button";
import { CarouselIndicator } from "../../components/carousel/Carouselndicator";
import { Stack } from "../../components/display/Stack";
import { OnboardingLayout } from "../../components/layout/OnboardingLayout";
import { OnboardingItem } from "../../components/onboarding/OnboardingItem";
import { Typography } from "../../components/typography/Typography";
import { useThemeColor } from "../../utils/colors";
import { OnboardingData } from "../../utils/data/onboardingData";
import { useNavigationUtil } from "../../utils/navigation/useNavigation";

type OnboardingProps = {

}

const width = Dimensions.get('window').width;
const CONTAINER__PADDING = 10

export const Onboarding = (props: OnboardingProps) => {
    const colors = useThemeColor()
    const { navigateToSignUpPage, navigateToLoginPage } = useNavigationUtil()
    const [activeIndex, setActiveIndex] = useState(0)
    const animValue = useSharedValue<number>(0)

    function handleNavigateToLoginPage() {
        navigateToLoginPage(false)
    }

    function onSnapToItem(index: number) {
        setActiveIndex(index)
    }

    return (
        <OnboardingLayout>
            <View style={styles.container}>
                <Carousel
                    loop
                    width={width - (CONTAINER__PADDING * 2)}
                    height={width / 1.5}
                    autoPlay={true}
                    onProgressChange={(_, value) => {
                        animValue.value = value
                    }}
                    data={OnboardingData}
                    scrollAnimationDuration={1000}
                    onSnapToItem={onSnapToItem}
                    renderItem={({ item }) => (
                        <OnboardingItem data={item} />
                    )}
                />

                <CarouselIndicator size={OnboardingData.length} activeIndex={activeIndex} animValue={animValue} />

                <Typography style={styles.message}>
                    The best adblocker app for a faster, safer browsing experience
                </Typography>

                <Stack gap={20} type="vertical" style={styles.actionBtns}>
                    <Button onClick={navigateToSignUpPage} buttonTextStyle={styles.registerBtn}>Register for free</Button>

                    <Stack justifyContent="center" alignItems="center">
                        <Button onClick={handleNavigateToLoginPage} buttonTextStyle={[styles.textBtn, {
                            color: colors.text
                        }]} variant="text">
                            Sign in
                        </Button>

                        <Typography style={{
                            color: colors.gray
                        }}>{String.fromCharCode(0x2022)}</Typography>

                        <Button buttonTextStyle={[styles.textBtn, {
                            color: colors.text
                        }]} variant="text">
                            Skip
                        </Button>
                    </Stack>

                    <Typography style={[styles.termsText, {
                        color: colors.gray
                    }]}>
                        By starting a 7 days  free trial. You accept the <Typography variant="heading3" style={{
                            fontSize: 14
                        }}>Terms of Services </Typography>
                        and the <Typography variant="heading3" style={{
                            fontSize: 14
                        }}>Privacy Policy</Typography>. A monthly paid subscription will
                        activate and you will be charged $12.99 if you do not cancel
                        your subscription at least 24 hours before the free trial
                        period of 7 days comes to an end.
                    </Typography>
                </Stack>
            </View>
        </OnboardingLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: CONTAINER__PADDING
    },
    message: {
        textAlign: 'center',
        marginVertical: 40
    },
    actionBtns: {

    },
    registerBtn: {
        paddingVertical: 5
    },
    textBtn: {
        flex: undefined
    },
    termsText: {
        textAlign: 'center'
    }
})