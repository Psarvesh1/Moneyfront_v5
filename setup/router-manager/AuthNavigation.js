import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import routes from './routes'
import ImageRoutes from './ImageRoutes'

import BottomNavigation from './BottomNavigation'
import Equity from '../screens/Explore/Equity/Equity'
// import ExploreSIP from '../screens/Explore/Equity/ExploreSIP'
import Bonds from '../screens/Explore/Bond|NPS/Bonds'
import BondsNPCFaq from '../screens/Explore/Bond|NPS/BondNPCFaq'
import NPSComponent from '../screens/Explore/Bond|NPS/NPSComponent'

// import BuyNow from '../screens/Transact/BuyMore/BuyNow'
// import BuyMore from '../screens/Transact/BuyMore/BuyMore'
// import Results from '../screens/Transact/BuyMore/Results'
// import ResultDetail from '../screens/Transact/BuyMore/ResultDetail'
// import SipScheme from '../screens/Transact/SIP/SipScheme'
// import HistoryDetails from '../screens/Transact/OrderHistory/HistoryDetails'

import Reports from '../screens/Portfolio/Reports/Reports'
import ReportDetail from '../screens/Portfolio/Reports/ReportDetail'
import AccountInfo from '../screens/Account/AccountInfo'
import RiskHome from '../screens/Account/Risk-Assesment/RiskHome'
import DocumentVault from '../screens/Account/DocumentVault'
import Mandate from '../screens/Account/Mandate'
import Terms from '../screens/Account/Terms'
import PrivacyPolicy from '../screens/Account/PrivacyPolicy'
import RefundPolicy from '../screens/Account/RefundPolicy'
import Blog from '../screens/Account/Blog'
import ContactUs from '../screens/Account/ContactUs'
import AnnualIncome from '../screens/Account/Risk-Assesment/AnnualIncome'
import Investment from '../screens/Account/Risk-Assesment/Investment'
import Learning from '../screens/Account/Risk-Assesment/Learning'
import Approach from '../screens/Account/Risk-Assesment/Approach'
import RiskResult from '../screens/Account/Risk-Assesment/RiskResult'
import Holdings from '../screens/Portfolio/Holdings/Holdings'
import HoldingsDetail from '../components/HoldingsDetail'
import HoldingsData from '../screens/Portfolio/Holdings/HoldingsData'
import Cash from '../screens/Portfolio/Holdings/HoldingsType/Cash'
import ComingSoon from '../components/ComingSoon'
import PortfolioSummary from '../screens/Portfolio/Reports/PortfolioSummary'
import GainLossReport from '../screens/Portfolio/Reports/GainLossReport'
import SearchScheme from '../screens/Explore/SearchScheme'
import SchemeDetail from '../screens/Explore/SchemeDetail'
import TransactionList from '../screens/Portfolio/Reports/TransactionList'
const AuthNavigation = (Stack) => {
  return (
    <> 
      <Stack.Screen name={'Home'} component={BottomNavigation} options={{
        headerShown: false
      }} />
      <Stack.Screen name={routes.Equity} component={Equity} options={{
        headerShown: true, headerBackTitle: 'Explore'
      }} />
      {/* <Stack.Screen name={routes.ExploreSIP} component={ExploreSIP} options={{ headerShown: true, headerBackTitle: 'Explore', headerTitle: 'SIP' }} /> */}
      <Stack.Screen name={routes.Bonds} component={Bonds}
        options={({ navigation }) => ({
          headerShown: true,
          headerBackTitle: 'Explore',
          headerTitle: () => (
            <Text style={{ fontSize: 24, fontWeight: 500 }}>Bonds</Text>
          ),
          headerRight: () => (
            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('BondsNPCFaq')}>
                <Image source={ImageRoutes.BondsConvo} style={{ height: 34, width: 34 }} />
              </TouchableOpacity>
            </View>
          ),
        })} />
      <Stack.Screen
        name={routes.SearchScheme}
        component={SearchScheme}
        options={{
          headerShown: true,
          headerBackTitle: 'Explore',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Search Schemes</Text>
          ),
        }}
      />
      <Stack.Screen
        name={routes.SchemeDetail}
        component={SchemeDetail}
        options={{
          headerShown: true,
          headerBackTitle: 'Explore',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}></Text>
          ),
        }}
      />
      <Stack.Screen
        name={routes.BondsNPCFaq}
        component={BondsNPCFaq}
        options={{
          headerShown: true,
          headerBackTitle: 'Bonds',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>FAQ</Text>
          ),
        }}
      />
      <Stack.Screen
        name="NPSScreen"
        component={NPSComponent}
        options={({ navigation }) => ({
          headerShown: true,
          headerBackTitle: 'Explore',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              National Pension Scheme
            </Text>
          ),
          headerRight: () => (
            <View style={{ marginBottom: 10 }}>
              <TouchableOpacity style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('BondsNPCFaq')}
              >
                <Image source={ImageRoutes.BondsConvo} style={{ height: 34, width: 34 }} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      {/* <Stack.Screen
        name={routes.Buy_Now}
        component={BuyNow}
        options={{
          headerShown: true, headerBackTitle: 'Back', headerTitle: '',
          headerTintColor: '#068015',
        }} />
      <Stack.Screen name={routes.ComingSoon} component={ComingSoon} options={{
        headerShown: false
      }} />
      <Stack.Screen
        name={routes.Buy_More}
        component={BuyMore}
        options={{ headerShown: true, headerBackTitle: 'Transact', headerTitle: '' }}
      /> */}
      {/* <Stack.Screen
        name={routes.Results}
        component={Results}
        options={{ headerShown: true, headerBackTitle: 'Back', headerTitle: 'Results' }}
      />
      <Stack.Screen
        name={routes.Result_Detail}
        component={ResultDetail}
        options={({ navigation }) => ({

          headerShown: true,
          headerBackTitle: 'Result',
          headerTitle: '',
          headerBackTitleStyle: {
            color: '#068015'
          },
          headerTintColor: '#068015',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate('Buy_Now')}>
              <Text style={{ fontSize: 16, color: '#068015', fontWeight: 'bold' }}>
                Buy Now
              </Text>
            </TouchableOpacity>
          ),
        })}
      /> */}
      {/* <Stack.Screen
        name={routes.SipScheme}
        component={SipScheme}
        options={{ headerShown: true, headerBackTitle: 'Transact' }}
      />
      <Stack.Screen
        name={routes.HistoryDetails}
        component={HistoryDetails}
        options={{ headerShown: true, headerTitle: '', headerBackTitle: 'Transact' }}
      /> */}

      <Stack.Screen
        name={routes.Reports}
        component={Reports}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={routes.Portfolio_Summary}
        component={PortfolioSummary}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={routes.GainLossReport}
        component={GainLossReport}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name={routes.TransactionList}
        component={TransactionList}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen
        name={routes.Report_Details}
        component={ReportDetail}
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Scheme</Text>
          ),
        }}
      /> */}

      {/* ---------------------------------Account Screens--------------------------------- */}
      <Stack.Screen
        name={routes.Account_Info}
        component={AccountInfo}
        options={{
          headerShown: true,
          headerBackTitle: 'Account',
          headerTintColor: '#068015',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Account Information
            </Text>
          ),
        }}
      />
      {/* ---------------------------------Risk Screens Start--------------------------------- */}
      <Stack.Screen
        name={routes.Risk_Assessment}
        component={RiskHome}
        options={{ headerShown: true, headerTitle: 'Risk Assessment', headerBackTitle: 'Account', headerTintColor: '#068015' }}
      />
      <Stack.Screen
        name={routes.Annual_Income}
        component={AnnualIncome}
        options={{ headerShown: true, headerTitle: 'Risk Assessment', headerBackTitle: 'Back', headerTintColor: '#068015' }}
      />
      <Stack.Screen
        name={routes.Investment}
        component={Investment}
        options={{ headerShown: true, headerTitle: 'Risk Assessment', headerBackTitle: 'Back', headerTintColor: '#068015' }}
      />
      <Stack.Screen
        name={routes.Learning}
        component={Learning}
        options={{ headerShown: true, headerTitle: 'Risk Assessment', headerBackTitle: 'Back', headerTintColor: '#068015' }}
      />
      <Stack.Screen
        name={routes.Approach}
        component={Approach}
        options={{ headerShown: true, headerTitle: 'Risk Assessment', headerBackTitle: 'Back', headerTintColor: '#068015' }}
      />
      <Stack.Screen
        name={routes.Risk_Result}
        component={RiskResult}
        options={{ gestureEnabled: false, headerShown: true, headerTitle: 'Risk Assessment', headerLeft: () => <></>, headerTintColor: '#068015' }}
      />
      {/* ---------------------------------Risk Screens End--------------------------------- */}
      <Stack.Screen
        name={routes.Document_Vault}
        component={DocumentVault}
        options={{
          headerShown: true,
          headerBackTitle: 'Account',
          headerTintColor: '#068015',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Account Information
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name={routes.Mandate}
        component={Mandate}
        options={{
          headerShown: true,
          headerBackTitle: 'Account',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Mandate</Text>
          ),
        }}
      />
      <Stack.Screen
        name={routes.Terms_Policies}
        component={Terms}
        options={{
          headerShown: true, headerBackTitle: 'Back', headerTitle: 'Terms & Policies',
          headerTintColor: '#068015',
        }}
      />
      <Stack.Screen
        name={routes.Privacy_Policy}
        component={PrivacyPolicy}
        options={{
          headerShown: true,
          headerBackTitle: 'Account',
          headerTintColor: '#068015',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Account Information
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name={routes.Refund_Cancellation}
        component={RefundPolicy}
        options={{
          headerShown: true,
          headerBackTitle: 'Account',
          headerTintColor: '#068015',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Account Information
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name={routes.Blog}
        component={Blog}
        options={{ headerShown: true, headerTitle: 'Blog', headerBackTitle: 'Back' }}
      />
      <Stack.Screen
        name={routes.Contact_Us}
        component={ContactUs}
        options={{
          headerShown: true, headerBackTitle: 'Account',
          headerTintColor: '#068015',
          headerTitle: () => (
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Contact US</Text>
          ),
        }}
      />
      <Stack.Screen name = 'Cash' component = {Cash} options={{
        headerShown: false
      }}/>
      
      {/* <Stack.Screen name = 'Cash' component = {Cash}/>
      <Stack.Screen name='Holdings' component = {Holdings}/>
      <Stack.Screen name='HoldingsData' component = {HoldingsData}/> */}
      <Stack.Screen name={routes.HoldingsDetail} component={HoldingsDetail}
        options={{ headerShown: true, headerBackTitle: 'Portfolio' }}
      />
      
    </>
  )
}

export default AuthNavigation;