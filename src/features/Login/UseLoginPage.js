import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Keyboard } from "react-native";
import { ROUTE } from "../../shared/hook/constant";
import { useAuth } from "../../shared/hook/UseAuth";
import useViewState from "../../shared/hook/UseViewState";

const useLoginPage = () => {
    const navigation = useNavigation();
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const {viewState, setLoading, setError} = useViewState();
    const {onLogin} = useAuth();

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            if (userName === '' && password === '') {
                throw new Error('Please input your user name and password');
            } else {
                const response = await onLogin({userName: userName, password: password})
                // console.log('Response Login',response);
                if (response) {
                    navigation.replace(ROUTE.HOME)
                } else {
                    setError(new Error('Unauthorized'));
                }
            }
        } catch (error) {
            setError(error)
        }
    }
    return {viewState, userName, password, onChangeUserName, onChangePassword, onAuthenticate}
}

export default useLoginPage;