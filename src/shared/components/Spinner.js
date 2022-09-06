import { StyleSheet, Text, View } from "react-native"
import { useTheme } from "../context/ThemeContext"
import LottieView from "lottie-react-native"

const Spinner = ({text = 'Please Wait'}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return(
        <View style={styles.container}>
            <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/116822-transfer-files.json')}
                />
            <Text style={styles.loadingContainer}>{text}</Text>
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        padding: theme.spacing.s,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
    },
    loadingContainer: {
        backgroundColor: theme.color.white,
        padding: theme.spacing.s,
        borderRadius: theme.radius.m,
    },
})

export default Spinner;