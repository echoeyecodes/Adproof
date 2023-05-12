import { StyleSheet, View } from "react-native"
import { IconButton } from "./buttons/IconButton"
import CloseIcon from '../assets/icons/ic_chevron_left.svg'
import { useThemeColor } from "../utils/colors"
import { Typography } from "./typography/Typography"
import { Divider } from "./Divider"
import { useNavigationUtil } from "../utils/navigation/useNavigation"

export type SecondaryToolbarProps = {
    rightContainer?: React.ReactNode,
    title: string
}

const ICON_SIZE = 18

export const SecondaryToolbar = (props: SecondaryToolbarProps) => {
    const colors = useThemeColor()
    const { goBack } = useNavigationUtil()

    return (
        <View style={[styles.container, {
            backgroundColor: colors.background
        }]}>
            <View style={styles.toolbarContent}>
                <IconButton onClick={goBack} containerStyle={[styles.closeBtnContainer, {
                    borderColor: colors.text
                }]}>
                    <CloseIcon color={colors.text} width={ICON_SIZE} height={ICON_SIZE} />
                </IconButton>

                <Typography style={styles.toolbarTitle} variant="heading2">{props.title}</Typography>

                <View style={{ flex: 1 }} />
                {props.rightContainer}
            </View>
            <Divider />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    toolbarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    closeBtnContainer: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 8
    },
    toolbarTitle: {
        marginStart: 5
    },
})