import React, { Children } from 'react';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext()

export default UserContext

export const UserProvider = ({children}) => {
    const [sipData, setSipData] = useState()
    const [lumpsumData, setLumpsumData] = useState()
    const [portfolioSummary, setPortfolioSummary] = useState(null)
    const [portfolioTransactions, setPortfolioTransactions] = useState(null)
    const [holdingsData, setHoldingsData] = useState()
    const [cashHolding, setCashHolding] = useState()
    const [debtHolding, setDebtHolding] = useState()
    const [equityHolding, setEquityHolding] = useState()
    const [snapshot, setSnapshot] = useState(false)
    const [clientPortfolio, setClientPortfolio] = useState(null)
    const [clientActualPortfolio, setClientActualPortfolio] = useState(null)
    const [clientSuggestedPortfolio, setClientSuggestedPortfolio] = useState(null)
    const [clientHoldingSummary, setClientHoldingSummary] = useState()
    const [gainLossTransaction, setGainLossTransaction] = useState()
    const [gainLossSummary, setGainLossSummary] = useState()
    const [tab, setTab] = useState(0);
    const removeUser = () => {
        setPortfolioSummary(null)
        setPortfolioTransactions(null)
        setHoldingsData()
        setCashHolding()
        setDebtHolding()
        setEquityHolding()
        setSnapshot(false)
        setClientActualPortfolio(null)
        setClientPortfolio(null)
        setClientSuggestedPortfolio(null)
        setSipData()
        setLumpsumData()
        setClientHoldingSummary(null)
        setGainLossTransaction(null)
        setGainLossSummary(null)
    }
    let contextData = {
        portfolioSummary,
        setPortfolioSummary,
        portfolioTransactions,
        setPortfolioTransactions,
        holdingsData,
        setHoldingsData,
        cashHolding,
        debtHolding,
        equityHolding,
        setCashHolding,
        setDebtHolding,
        setEquityHolding,
        removeUser,
        clientActualPortfolio,
        clientPortfolio,
        clientSuggestedPortfolio,
        setClientPortfolio,
        setClientActualPortfolio,
        setClientSuggestedPortfolio,
        snapshot,
        clientHoldingSummary,
        setClientHoldingSummary,
        tab,
        setTab,
        gainLossTransaction,
        setGainLossTransaction,
        gainLossSummary,
        setGainLossSummary,
        lumpsumData,
        setLumpsumData,
        sipData,
        setSipData
    }
    
    return(
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    )
}