import React, { Children } from 'react';
import { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import 'text-encoding-polyfill'
import Encrypt from '../constant/Encrypt';
// Define your API and identity URLs



const tokenUrl = `${process.env.API_BASE_URL}/token`
const loginUrl = `${process.env.API_BASE_URL}/api/ClientLogin/AppLogin`

export const AuthProvider = ({children}) => {
    const generateToken = async () => {
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
                expire = response.data.expires_in
                console.log(response.data.expire)
                console.log(expire)
                AsyncStorage.setItem("Token", "Bearer " + token);
                AsyncStorage.setItem("Expire", "Bearer " + expire);
            }).catch(function (error) {
                console.log(error);
            })
            return token;
    };
    const loginApi = async ({ email, password, token }) => {
        // const storedToken = await AsyncStorage.getItem('Token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
    
        const data = `${email}|${password}|${process.env.ProjectID}`;
    
        const encryptedData = Encrypt(data, process.env.key);
    
        console.log(encryptedData)
    
        const bodyParameters = {
            ParamValue: encryptedData
        }
        let sId = null;
        let Id = null;
        let status = null;
        await axios.post(
            loginUrl,
            bodyParameters,
            config
        ).then(function (response) {
            sId = response.data.SessionId
    
            Id = response.data.ApplicantData[0].Id
        }).catch(function (err) {
            status = err.response.status
            console.log(JSON.stringify(status))
        })
        return [sId, Id, status];
    }
}




