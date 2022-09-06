import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import MainContainer from "../../shared/components/MainContainer";
import LottieView from "lottie-react-native"
import AppBackground from "../../shared/components/AppBackground";
import TitleLabel from "../../shared/components/TitleLabel";
import FormButton from "../../shared/components/FormButton";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../shared/hook/constant";
import { theme } from "../../shared/Theme";


const WelcomePage = () => {
    const navigation = useNavigation();
    return(
        <MainContainer>
            <AppBackground style={{
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/116822-transfer-files.json')}
                />
                <View style={styles.titleContainer}>
                    <TitleLabel text='Pos System'/>
                    <TitleLabel subTitle text='Simple Poin of Sales'/>
                </View>
                <FormButton label='Sign In' onClick={()=>{navigation.replace(ROUTE.LOGIN)}}/>
            </AppBackground>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    // background: {
    //   flex: 1,
    //   alignItems: 'center',
    //   justifyContent: 'space-evenly',
    // },
    titleContainer: {
        alignItems: "center"
    },
    // title: {
    //     fontSize: 32,
    //     fontWeight: 'bold',
    //     color: 'blue'
    // },
    // subTitle: {
    //     fontSize: 16,
    //     color: 'blue'
    // },
    input: {
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#000",
        alignSelf: "stretch",
        margin: 20
    },
    // button: {
    //     alignItems: "center",
    //     backgroundColor: "rgb(0,150,200)",
    //     padding: 10,
    //     borderRadius: 5,
    //     alignSelf: "stretch",
    //     margin: 20
    // },
    // textButton: {
    //     color: "#fff"
    // }
  });

export default WelcomePage;