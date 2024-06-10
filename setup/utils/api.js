import axios from "axios";
import Encrypt from "../constant/Encrypt";
import api from "./axiosInstance";

export const snapshotApi = async ({id, sessionId}) => {

    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/SnapShot`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

// export const holdingsApi = async 

export const holdingsApi = async ({id, sessionId}) => {

    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/GetClientHoldings`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;        
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getClientData = async ({id, sessionId}) => {

    const data = `${id}|${sessionId}`

    const encryptedData = Encrypt(data, process.env.key)

    console.log(encryptedData)

    const url = `${process.env.API_BASE_URL}/api/ClientOnboard/GetOnboardData`

    const bodyParameters = {
        ParamValue : encryptedData
    }
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        console.log(response) 
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getPortfolioSummary = async ({id, sessionId, newDate}) => {
    let type= 'AMC'
    const data = `${id}|${sessionId}|${type}|${newDate}|${process.env.ProjectID}`;

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/GetPortfolioSummaryReport`

    const bodyParameters = {
        ParamValue : encryptedData
    }

    console.log(encryptedData)
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
        console.log(response) 
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getGainLossReport = async({id, sessionId, selectedStartDate, selectedEndDate}) => {

    const selectedDate = '2021-04-02'

    const endDate = '2023-04-03'

    const data = `${id}|${sessionId}|${selectedStartDate}|${selectedEndDate}`

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/ClientReports/GetGainlossSchemewiseReport`

    const bodyParameters = {
        ParamValue : encryptedData
    }

    console.log(encryptedData)
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const searchSchemes = async({id, sessionId, searchQuery}) => {
    const sortBy = 'ALL'
    const amcList = 'ALL'
    const assetType = 'ALL'
    const categoryList = 'ALL'
    const count = 10
    const PageNo = 1
    const data = `${id}|${sessionId}|${sortBy}|${amcList}|${assetType}|${categoryList}|${searchQuery}|${count}|${PageNo}`

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/Schemes/GetSchemeSearchPaging`

    const bodyParameters = {
        ParamValue : encryptedData
    }

    console.error(encryptedData)
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data;
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getSchemeDetailByCode = async({id, sessionId, SchemeCode}) => {
    const data = `${id}|${sessionId}|${SchemeCode}`

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/Schemes/GetSchemeDetails`
    const bodyParameters = {
        ParamValue : encryptedData
    }

    console.log(encryptedData)
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}

export const getSchemeInvestmentDetail = async({id, sessionId, SchemeCode}) => {
    const data = `${id}|${sessionId}|${SchemeCode}`

    const encryptedData = Encrypt(data, process.env.key)

    const url = `${process.env.API_BASE_URL}/api/Schemes/GetSchemeInvestmentInfo`
    const bodyParameters = {
        ParamValue : encryptedData
    }

    console.log(encryptedData)
    
    let result = null
    await api.post(
        url,
        bodyParameters,
        // config
    ).then(function(response){
        result  = response.data
    }).catch(function(error){
        console.log(error.message)
    })
    // console.log('dada'+ result.AbsoluteReturn)
    return result
}