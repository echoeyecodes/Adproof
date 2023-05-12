import { TextStyle } from "react-native/types";

interface TextStyles {
    default: TextStyle,
    heading1: TextStyle,
    heading2: TextStyle,
    heading3: TextStyle,
}

export const textStyles: TextStyles = {
    default: {
        fontSize: 14,
        fontFamily: "Inter-Regular"
    },
    heading1: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
    },
    heading2: {
        fontSize: 20,
        fontFamily: 'Inter-Bold'
    },
    heading3: {
        fontSize: 18,
        fontFamily: 'Inter-Bold'
    },
}