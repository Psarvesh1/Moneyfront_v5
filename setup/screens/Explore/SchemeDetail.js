import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { StyleSheet, View, Text, SafeAreaView, FlatList, ActivityIndicator, useColorScheme } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Divider } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Tooltip from 'react-native-walkthrough-tooltip';
import { getSchemeDetailByCode, getSchemeInvestmentDetail } from '../../utils/api'
import AuthContext from '../../context/AuthContext'

const SchemeDetail = ({ route, navigation }) => {
    let { id, sessionId } = useContext(AuthContext)
    const { SchemeCode } = route.params
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    const [schemeData, setSchemeData] = useState()
    const [schemeDetail, setSchemeDetail] = useState()
    const resultArr = []
    
    const fetchData = async () => {
        try {
            const data = await getSchemeDetailByCode({ id, sessionId, SchemeCode })
            const detail = await getSchemeInvestmentDetail({id, sessionId, SchemeCode})
            resultArr.push(data)
            setSchemeDetail(detail.SchemeInvestmentLists[0])
            setSchemeData(resultArr)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!schemeData) {
            fetchData()
        }
    })

    const ActivityIndicatorElement = () => {
        return (
            <View style={styles.activityIndicatorStyle}>
                <ActivityIndicator color="#009688" size="large" style={{ marginTop: 30 }} />
            </View>
        );
    };

    const roundDecimal = (x) => {
        return (Math.round(x * 100)/100).toFixed(2)
    }

    const SchemeData = ({ SchemeName, Risk, Category, BenchMark, STANDARDR, SHARPR, 
        LaunchDate, FundManager, MinInvestment, AUM, Fund_Name }) => {
        return (
            <LinearGradient
                useAngle
                angle={45}
                start={{ x: -1, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.linearGradient}
                colors={['#21b361', '#08a490', '#12ab7f', '#01a09d']}>
                <Container showsVerticalScrollIndicator={false}>
                    <Card1>
                        <PlanTitle>{SchemeName}</PlanTitle>
                        <NavTitle>NAV As on {schemeDetail.NAVDate}</NavTitle>
                        <Amount>Rs. {schemeDetail.NAVRs}</Amount>
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 14 }}>
                            <Text style={{ fontSize: 18 }}>Risk-</Text>
                            <Text style={{ marginLeft: 4, color: '#21b361', fontSize: 15 }}>
                                {Risk}
                            </Text>
                        </View>
                    </Card1>
                    <Card2>
                        <Meta>{Category}</Meta>
                        <MetaLabel>Diversified</MetaLabel>
                        <Meta style={{ marginTop: 10 }}>{BenchMark}</Meta>
                        <MetaLabel>Benchmark</MetaLabel>
                    </Card2>
                    <Card3 style={{ padding: 2 }}>
                        <IconContainer>
                            <View style={{ width: '75%' }}>
                                <Text style={styles.title}>Validity Measurement</Text>
                            </View>
                            <View>
                                <Tooltip
                                    isVisible={visible}
                                    backgroundColor='transparent'
                                    disableShadow={true}
                                    contentStyle={{ backgroundColor: '#f2a435', height: 70, width: 240, justifyContent: 'center' }}
                                    content={
                                        <Text style={{ color: '#fff', fontWeight: 500, textAlign: "center" }}>Volatility measures reflect the uncertainity
                                            or risk of change in security's value.
                                        </Text>}
                                    placement="top"
                                    onClose={() => setVisible(false)}>
                                    <TouchableOpacity onPress={() => setVisible(true)}>
                                        <Icon
                                            name="information-circle-outline"
                                            size={24}
                                            style={styles.icon}
                                        />
                                    </TouchableOpacity>
                                </Tooltip>
                            </View>
                        </IconContainer>
                        <Divider />
                        <Row>
                            <Value>{roundDecimal(STANDARDR)}</Value>
                            <Meta style={{ marginTop: 10 }}>Standard Deviation (%)</Meta>
                        </Row>

                        <Row>
                            <Value>{roundDecimal(SHARPR)}</Value>
                            <Meta style={{ marginTop: 10 }}>Shape Ratio (%)</Meta>
                            <Divider style={{ width: '100%' }} />
                        </Row>
                        <Row>
                            <Value>0 0</Value>
                            <Meta style={{ marginTop: 10 }}>Average Maturity</Meta>
                        </Row>
                    </Card3>
                    <Card4>
                        <InfoText>Additional Info</InfoText>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Launch Date</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue>{LaunchDate}</InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Fund Manager</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue style={{ color: '#13b5ba' }}>{FundManager}</InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Entry Load</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue></InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Exit Load</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue>{schemeDetail.ExitLoad}</InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Min Investment</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue>{MinInvestment}</InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                        <InfoRow>
                            <InfoColumn>
                                <InfoLabel>Asset Size (AUM in cr)</InfoLabel>
                            </InfoColumn>
                            <InfoColumn2>
                                <InfoValue>{AUM}</InfoValue>
                            </InfoColumn2>
                        </InfoRow>
                    </Card4>
                    <Card5>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>One Month Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.OneMonthRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>Three Month Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.ThreeMonthRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>Six Month Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.SixMonthRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>One Year Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.OneYearRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>Two Year Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.TwoYearRet === '' ? '-' : schemeDetail.TwoYearRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>Three Year Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.ThreeYearRet === '' ? '-' : schemeDetail.ThreeYearRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                        <ReturnRow>
                            <ReturnColumn>
                                <ReturnLabel>Five Year Return</ReturnLabel>
                            </ReturnColumn>
                            <ReturnColumn>
                                <ReturnValue>{schemeDetail.FiveYearRet === '' ? '-' : schemeDetail.FiveYearRet}</ReturnValue>
                            </ReturnColumn>
                        </ReturnRow>
                    </Card5>
                    <TermsContainer>
                        <Terms>
                            Note: Returns less than one year are absolute. Returns greater than
                            one year are annualized.
                        </Terms>
                    </TermsContainer>
                </Container>
            </LinearGradient>
        );
    }
    return (
        <SafeAreaView>
            {
                loading ? <ActivityIndicatorElement /> : <FlatList
                    data={schemeData}
                    renderItem={({ item }) => 
                    <SchemeData 
                    SchemeName={item.SchemeName} 
                    Risk={item.Risk} 
                    Category={item.Category} 
                    BenchMark = {item.BenchMark}
                    STANDARDR ={item.STANDARDR}
                    SHARPR ={item.SHARPR}
                    LaunchDate = {item.LaunchDate}
                    FundManager = {item.FundManager}
                    MinInvestment = {item.MinInvestment}
                    AUM = {item.AUM}
                    />}
                    keyExtractor={item => item.SchemeName}

                />
            }
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        alignSelf: 'flex-end'
    },
    icon: {
        alignSelf: 'flex-end',
        marginRight: 10,
        color: '#21b361'
    },
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        justifyContent: 'center',
    },
    container: {
        padding: 10
    },
    searchList: {
        marginTop: 10
    },
    searchData: {
        padding: 15
    },
    schemeTitle: {
        fontSize: 18
    }
})

const Container = styled.View`
    
`

const Card1 = styled.View`
    borderRadius: 5px;
    backgroundColor: #fff;
    alignItems: center;
    padding: 20px 50px 12px 50px;
    flexDirection: column;
    justifyContent: space-between;
`
const PlanTitle = styled.Text`
    fontSize: 18px;
    textAlign: center;
`

const NavTitle = styled.Text`
    fontSize: 16px;
    fontWeight: 300;
    textAlign: center;
    marginTop: 12px
`
const Amount = styled.Text`
    fontSize: 26px;
    fontWeight: 500;
    marginTop: 10px
`
const Card2 = styled.View`
    borderRadius: 5px;
    backgroundColor: #fff;
    alignItems: center;
    marginTop: 20px;
    padding: 10px 0;
`

const Card3 = styled.View`
    borderRadius: 5px;
    backgroundColor: #fff;
    alignItems: center;
    marginTop: 20px;
    padding: 4px 0;
    width: 100%;
`

const Card4 = styled.View`
    borderRadius: 5px;
    backgroundColor: #fff;
    padding: 5px 5px 20px 5px;
    marginTop: 20px;
    alignItems: center;
    width: 100%
`

const InfoText = styled.Text`
    fontSize: 18px;
    fontWeight: 400;
    marginBottom: 10px;
`

const Meta = styled.Text`
    fontSize: 16px;
    color: #98a2a9;
`
const MetaLabel = styled.Text`
    fontSize: 18px;
    color: #21b361;
    marginTop: 10px;
`
const IconContainer = styled.View`
    flexDirection: row;
    padding: 5px;
    width: 100%;
    alignItems: center;
    justifyContent: space-between;
`

const Row = styled.View`
    padding: 10px 10px;
    alignItems: center;
`

const Value = styled.Text`
    fontSize: 26px;
    color: #21b361;
`
const InfoColumn = styled.View`
    width: 50%;
    flexDirection: column;
`
const InfoColumn2 = styled.View`
    width: 40%;
    flexDirection: column;
    alignItems: center;
`
const InfoRow = styled.View`
    width: 100%;
    flexDirection: row;
    marginTop: 10px;
    paddingLeft: 10px;
`
const InfoLabel = styled.Text`
    fontSize: 16px;
    color: #98a2a9;
`
const InfoValue = styled.Text`
    fontSize: 16px;
    fontWeight: 400;
`
const Card5 = styled.View`
    borderRadius: 5px;
    backgroundColor: #fff;
    padding: 5px 5px 20px 5px;
    marginTop: 20px;
    alignItems: center;
    width: 100%
`

const ReturnRow = styled.View`
    width: 100%;
    flexDirection: row;
    marginTop: 10px;
    paddingLeft: 10px;
`

const ReturnColumn = styled.View`
    width: 50%;
    flexDirection: column;
`
const ReturnLabel = styled.Text`
    fontSize: 14px;
    fontWeight: 500;
`
const ReturnValue = styled.Text`
    marginLeft: 20px;
`

const TermsContainer = styled.View`
    paddingBottom: 50px;
    marginTop: 10px;
`

const Terms = styled.Text`
    fontSize: 12px;
    fontWeight: 500;
`


export default SchemeDetail