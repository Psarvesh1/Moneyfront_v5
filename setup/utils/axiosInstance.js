import axios, {AxiosInstance} from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


    const api = axios.create();

    // Add a request interceptor to add the JWT token to the authorization header
    api.interceptors.request.use(
        async (config) => {
            let token = await AsyncStorage.getItem('Token')
            // console.log(token)
            // console.log(token)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
                console.log(token)
            }
            //else{
            //     const token = generateToken()
            //     config.headers.Authorization = `Bearer ${token}`;
            // }
            return config
        },
        (error) => Promise.reject(error)
    );

    // Add a response interceptor to refresh the JWT token if it's expired

    let isRefreshing = false;
    let failedQueue = [];
    const processQueue = (error, token = null) => {
        failedQueue.forEach(prom => {
          if (error) {
            prom.reject(error);
          } else {
            prom.resolve(token);
          }
        })
        
        failedQueue = [];
    }

    api.interceptors.response.use( function(response){
        return response
    },function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest._retry){
        console.log('interceptor')
        if(isRefreshing){
            return new Promise(function(resolve, reject){
                failedQueue.push({resolve, reject})
            }).then(token => {
                originalRequest.headers['Authorization'] = 'Bearer '+ token;
                return api(originalRequest)
            }).catch(err => {
                return Promise.reject(err)
            })
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const bodyParameters = {
            'UserName': `${process.env.UserName}`,
            'Password': `${process.env.Password}`,
            'Grant_Type': `${process.env.Grant_Type}`
        }
        const tokenUrl = `${process.env.API_BASE_URL}/token`
        return new Promise(function(resolve, reject){
            axios.post(tokenUrl, bodyParameters, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then((response) => {
                console.log(response)
                let token = response.data.access_token.toString();
                // console.log(token)
                // token = response.data.access_token
                AsyncStorage.setItem("Token", + token);
                api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                originalRequest.headers['Authorization'] = 'Bearer ' + token;
                processQueue(null, token)
                resolve(api(originalRequest))
            }).catch((err)=> {
                processQueue(err, null);
                reject(err)
            })
            .finally(()=> {isRefreshing: false})
        })
    }
    return Promise.reject(error)
    }
)

export default api
    // Create a new axios instance
