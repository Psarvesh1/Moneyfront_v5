import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { Searchbar, Divider } from 'react-native-paper';
import AuthContext from '../../context/AuthContext';
import { searchSchemes } from '../../utils/api';
import { useNavigation } from '@react-navigation/native';
import routes from '../../router-manager/routes';
const SearchScheme = ({navigation}) => {
    let { id, sessionId, authToken } = useContext(AuthContext)
    console.log(authToken)
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchData, setSearchData] = useState()
    const [loading, setLoading] = useState(false)
    // const {navigation} = useNavigation()
    useEffect(() => {
        if(searchQuery === ''){
            setSearchData(null)
        }
    })
    const handleSearch = async (text) => {
        setLoading(true)
        setSearchQuery(text)
        try {
            const data = await searchSchemes({ id, sessionId, searchQuery })
            setSearchData(data.List)
            console.log(searchData)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }
    const ActivityIndicatorElement = () => {
        return (
            <View style={styles.activityIndicatorStyle}>
                <ActivityIndicator color="#009688" size="large" style={{ marginTop: 30 }} />
            </View>
        );
    };
    const SearchList = ({ SchemeName, SchemeCode }) => {
        return (
            <View style={styles.searchList}>
                <TouchableOpacity onPress={() => navigation.navigate(routes.SchemeDetail, {SchemeCode: SchemeCode})}>
                <View style={styles.searchData}>
                    <Text style={styles.schemeTitle}>
                        {SchemeName}
                    </Text>
                </View>
                </TouchableOpacity>
                <Divider />
            </View>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search Mutual Funds"
                    onChangeText={(text) => handleSearch(text)}
                    value={searchQuery}
                    style={styles.search}
                    containerStyle={{ padding: 0 }}
                    inputStyle={{
                        minHeight: 0
                    }}
                    onClearIconPress={() => {
                        setSearchQuery()
                        setSearchData(null)
                    }}
                />
                <Divider />
                <View style={{marginBottom: 130}}>
                {
                    loading ? <ActivityIndicatorElement /> : <FlatList
                        style={{ paddingBottom: 300 }}
                        data={searchData}
                        renderItem={({ item }) =>
                            <SearchList SchemeName={item.SchemeName} SchemeCode={item.SchemeCode}/>
                        }
                        keyExtractor={item => item.SchemeCode}
                    />
                }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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

export default SearchScheme