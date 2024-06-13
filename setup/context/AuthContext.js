import React, { Children } from 'react';
import { createContext, useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import 'text-encoding-polyfill'
import Encrypt from '../constant/Encrypt';

const AuthContext = createContext()

export default AuthContext;
// Define your API and identity URLs
const tokenUrl = `${process.env.API_BASE_URL}/token`
const loginUrl = `${process.env.API_BASE_URL}/api/ClientLogin/AppLogin`

export const AuthProvider = ({children}) => {

    const getAllLocalData = async() => {
        let token = await AsyncStorage.getItem('Token')  ? await AsyncStorage.getItem('Token') : null
        let id = await AsyncStorage.getItem('Id') ? await AsyncStorage.getItem('Id'): null
        let sId = await AsyncStorage.getItem('sId') ? await AsyncStorage.getItem('sId'): null
        let user = await AsyncStorage.getItem('user') ? await AsyncStorage.getItem('user'): null
        setAuthToken(token)
        setId(id)
        setSessionId(sId)
        setUser(JSON.parse(user))
    }
    useEffect(()=> {
        getAllLocalData()
    },[])
    // useEffect(()=> {
    //     const getData = async() => {
    //     const id = await AsyncStorage.getItem('userName');
    //     setUserName(id)
    //     }
    //     getData()
    // }, [])
    // const navigation = useNavigation()
    const [authToken, setAuthToken] = useState()
    const [id, setId] = useState(null)
    const [sessionId, setSessionId] = useState()
    const [loading, setLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState()
    const [name, setName] = useState()
    const [img, setImg] = useState()
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
                expire = response.data.expires_in.toString()
                AsyncStorage.setItem("Token", token);
                AsyncStorage.setItem("Expire", expire);
                let dad = AsyncStorage.getItem('Token')
                console.log('local' + dad)
                setAuthToken(token)
            }).catch(function (error) {
                console.log(error);
            })
            return token;
    };
    const loginApi = async ({ email, password, token }) => {
        const storedToken = await AsyncStorage.getItem('Token')
        console.log(storedToken)
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
        let name = null;
        let img = null;
        let UserData = []; 
        await axios.post(
            loginUrl,
            bodyParameters,
            config
        ).then( function (response) {
            sId = response.data.SessionId
            let result = response.data.ApplicantData[0]
            Id = result.Id.toString()
            
            // console.log(response.data.ApplicantData[0])
            
            setIsAuth(true)
            setUser(result)
            console.log(isAuth)
            setId(Id)
            setSessionId(sId)
            AsyncStorage.setItem("Id",  Id);
            AsyncStorage.setItem("sId",  sId);
            AsyncStorage.setItem("user", JSON.stringify(result))
        }).catch(function (err) {
            status = err.response.status
            console.log(JSON.stringify(status))
        })
        return [sId, Id, status];
    }
    const logoutUser = () => {
        console.log('logout')
        setAuthToken(null)
        setId(null)
        setSessionId(null)
        setIsAuth(false)
        console.log(isAuth)
        setUser(null)
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('Id')
        AsyncStorage.removeItem('sId')
        AsyncStorage.removeItem('user')
    }
    let contextData = {
        id: id,
        setId: setId,
        sessionId: sessionId,
        setSessionId: setSessionId,
        authToken: authToken,
        setAuthToken: setAuthToken,
        generateToken: generateToken,
        loginApi: loginApi,
        logoutUser: logoutUser,
        isAuth: isAuth,
        setIsAuth: setIsAuth,
        user: user
    }
    // useEffect(()=> {
    //     if(authToken !== '' && id !== '' && sessionId !== ''){
    //         setIsAuth(true)
    //     }
    // }, [])
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}



