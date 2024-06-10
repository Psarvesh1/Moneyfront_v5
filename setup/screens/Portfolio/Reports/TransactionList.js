import React, {useContext, useEffect, useState} from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import UserContext from '../../../context/UserContext'
import { TransactionCard } from '../../../components/TransactionCard'
import { GLSummaryCard } from '../../../components/GLSummaryCard'
const TransactionList = ({ route, navigation }) => {
  let {gainLossTransaction, setGainLossTransaction, gainLossSummary} = useContext(UserContext)
  const [transactions, setTransactions] = useState()
  const [summary, setSummary] = useState()
  const {Fund_Name} = route.params
  function filterByValue() {
    let result = gainLossTransaction.filter(item => item.Fund_Name === Fund_Name);
    setTransactions(result)
    console.log(transactions)
    let GLresult = gainLossSummary.filter(item => item.Fund_Name === Fund_Name)
    setSummary(GLresult)
  }
  useEffect(() => {
    filterByValue()
  },[])
  return (
    <View style={styles.contain}>
        {summary ? <FlatList 
              scrollEnabled={false}
              data={summary}
              style={{height: 400, marginVertical: 0}}
              renderItem={({item}) => 
              <GLSummaryCard 
                Scheme={item.Scheme_Name}
                TotalAmount={item.Purchase_Amount}
                SellAmount={item.Sell_Amount}
                LTGainLoss = {item.GL_LT_Debt}
                STGainLoss ={item.GL_ST_Debt}
                FolioNo ={item.Folio_Number}
                Fund_Name={item.Fund_Name}
                navigation={navigation}
                btn_flag={false}
              />
            }
            keyExtractor={item => item.Scheme}
            ListEmptyComponent={
              <View style={styles.Nodata}>
                <Text style={styles.NoDataTitle}>No Data Found!</Text>
              </View>
            }
            />: null}
        {transactions ? <FlatList
        style={{paddingBottom: 200}}
        data={transactions}
        ListEmptyComponent={<Text>No Data</Text>}
        renderItem={({ item }) =>
          <TransactionCard
            Transaction_Date = {item.Transaction_Date}
            Purchase_Amount = {item.Purchase_Amount}
            Purchase_Price = {item.Purchase_Price}
            Units = {item.Units}
            Sell_Rate = {item.Sell_Rate}
            GL_LT_Debt = {item.GL_LT_Debt}
            Sell_Amount = {item.Sell_Amount}
            GL_ST_Debt = {item.GL_ST_Debt}
          />
        }
        keyExtractor={item => item.Scheme}
      /> : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  contain:{
    flex: 1,
    padding: 20
  }
})

export default TransactionList