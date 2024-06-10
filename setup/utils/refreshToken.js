import axios from "axios";
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

const refreshToken = async () => {
    const [authToken, setAuthToken] = useState(()=> AsyncStorage.getItem('Token') ? AsyncStorage.getItem('Token') : null)
    // Create a new axios instancee
    console.log('trigger')
    const bodyParameters = {
        'UserName': `${process.env.UserName}`,
        'Password': `${process.env.Password}`,
        'Grant_Type': `${process.env.Grant_Type}`
    }
    // const [accessToken, setAccessToken] = useState(null)
    // const token =await AsyncStorage.getItem("token");
    let token = null
    let expire = null
    await axios.post(
            tokenUrl,
            bodyParameters,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        ).then(function (response) {
            token = response.data.access_token
            console.log('da '+token)
            expire = response.data.expires_in.toString()
            AsyncStorage.setItem("Token", + token);
            AsyncStorage.setItem("Expire", expire);
            setAuthToken(token)
        }).catch(function (error) {
            console.log(error);
        })
    return authToken;
};
export default refreshToken