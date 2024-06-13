import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, Linking, View, Image, StyleSheet, SafeAreaView } from 'react-native'
import File from 'react-native-vector-icons/AntDesign'
import Arrow from 'react-native-vector-icons/FontAwesome6'
import Contact from 'react-native-vector-icons/AntDesign'
import Document from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Logout from 'react-native-vector-icons/Entypo'
import { Button, Dialog, Portal, PaperProvider } from 'react-native-paper';
import UserIcon from '../../../assets/images/user-icon.png'
import routes from '../../router-manager/routes'
import AuthContext from '../../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserContext from '../../context/UserContext'
const Account = () => {
  let {user, setIsAuth, isAuth, setId} = useContext(AuthContext)
  let {removeUser} = useContext(UserContext)
    const navigation = useNavigation()
    let {logoutUser} = useContext(AuthContext)
    let {id} = useContext(AuthContext)
    console.log(id)
    console.log('userData ' + user)

    let name = user.Name

    let base64Image = user.Bs64img

    const [visible, setVisible] = useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const instagramURI = async () => {
      const url = 'https://www.instagram.com/moneyfront_in/?hl=en';
      const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
      if (supported) {
        await Linking.openURL(url); // It will open the URL on browser.
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };
    const facebookURI = async () => {
      const url = 'https://www.facebook.com/moneyfront/';
      const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
      if (supported) {
        await Linking.openURL(url); // It will open the URL on browser.
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };
    const linkedinURI = async () => {
      const url = 'https://www.linkedin.com/company/moneyfront?trk=biz-companies-cym';
      const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
      if (supported) {
        await Linking.openURL(url); // It will open the URL on browser.
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };
    const twitterURI = async () => {
      const url = 'https://twitter.com/moneyfront';
      const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
      if (supported) {
        await Linking.openURL(url); // It will open the URL on browser.
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };
    const logout = () => {
      // navigation.navigate(routes.Landing)
      removeUser()
      setId(null)
      setIsAuth(false)
      console.log(isAuth)
      AsyncStorage.removeItem('token')
      AsyncStorage.removeItem('Id')
      AsyncStorage.removeItem('sId')
      AsyncStorage.removeItem('user')
    }
  return (
    <SafeAreaView style={{flex: 1}}>
    <Container>
    <PaperProvider>
    
    <Portal>
        <View style={{backgroundColor: '#fff', justifyContent: 'center', paddingTop: 10}}>
        <Title>Account</Title>
        <AccountCard>
        <ImageContainer>
        <Image source={{uri: `data:image/jpeg;base64,${base64Image}`}} style={styles.icon}/>
        </ImageContainer>
            <Info>
            <Text style={{fontSize: 18, fontWeight: 500}}>
                    {name}
            </Text>                
                <Text style={{marginTop: 2, fontSize: 15, color:'#0c9deb'}}>
                    Domestic
                </Text>
                <Text style={{marginTop: 2, fontSize: 15, color: '#949191'}}>Account # {id}</Text>
            </Info>
        </AccountCard>
        </View>
        <SubContainer showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.Account_Info)}>
        <Card>
            <Mini>
            <File name='filetext1' size={26}/>
            <CardTitle>Account Information</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.Risk_Assessment)}>
        <Card>
            <Mini>
            <Contact name='contacts' size={26}/>
            <CardTitle>Risk Assessment</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.Document_Vault)}>
        <Card>
            <Mini>
            <Document name='document-lock-outline' size={26}/>
            <CardTitle>Document Vault</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.FORGOT_PASSWORD)}>
        <Card>
            <Mini>
            <FontAwesome name='unlock' size={26}/>
            <CardTitle>Change Password</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Change_Password)}>
        <Card>
            <Mini>
            <FontAwesome name='newspaper-o' size={26}/>
            <CardTitle>Mandate</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Terms_Policies)}>
        <Card>
            <Mini>
            <FontAwesome name='book' size={26}/>
            <CardTitle>Terms & Policies</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Privacy_Policy)}>
        <Card>
            <Mini>
            <FontAwesome name='hand-paper-o' size={26}/>
            <CardTitle>Privacy Policy</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Refund_Cancellation)}>
        <Card>
            <Mini>
            <FontAwesome name='warning' size={26}/>
            <CardTitle>Refund & Cancellation Policy</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate(routes.Blog)}>
        <Card>
            <Mini>
            <FontAwesome name='file-image-o' size={26}/>
            <CardTitle>Blog</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Contact_Us)}>
        <Card>
            <Mini>
            <FontAwesome name='phone' size={26}/>
            <CardTitle>Contact Us</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={showDialog}>
        <Card>
            <Mini>
            <Logout name='log-out' size={26}/>
            <CardTitle>Logout</CardTitle>
            </Mini>
            <Arrow name='angle-right' size={20}/>
        </Card>
        </TouchableOpacity>
        <IconContainer>
            <TouchableOpacity onPress={linkedinURI}>
            <FontAwesome name='linkedin' size={26}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={twitterURI}>
            <FontAwesome name='twitter' size={26}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={instagramURI}>
            <FontAwesome name='instagram' size={26}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={facebookURI}>
            <FontAwesome name='facebook' size={26}/>
            </TouchableOpacity>
        </IconContainer>
        <Meta>Made in India</Meta>
        </SubContainer>
        <Dialog visible={visible} onDismiss={hideDialog} style={{backgroundColor: '#fff', borderRadius: 10}}>
            {/* <Dialog.Title>Do you really want to Sign out?</Dialog.Title> */}
            <Dialog.Content>
              <Text style={{fontSize: 18}}>Do you really want to Sign out?</Text>
            </Dialog.Content>
            <View style={{flexDirection: 'row'}}>
            <Dialog.Actions>
              <Button labelStyle={{fontSize: 18}} onPress={logout}>Yes</Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button labelStyle={{fontSize: 18}} onPress={hideDialog}>No</Button>
            </Dialog.Actions>
            </View>
          </Dialog>
        </Portal>
    </PaperProvider>
    </Container>
    </SafeAreaView>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    flexDirection: column;
    backgroundColor: #efefef;
`
const SubContainer = styled.ScrollView`
    marginBottom: 30px;
`
const Title = styled.Text`
    fontSize: 26px;
    fontWeight: 600;
    marginLeft: 10px;
`
const AccountCard= styled.View`
    backgroundColor: #fff;
    flexDirection: row;
    alignItems: center;
    padding: 10px;
    marginTop: 20px;
`
const Info = styled.View`
    flexDirection: center;
    marginLeft: 20px;
`

const Card = styled.View`
    backgroundColor: #fff;
    flexDirection: row;
    alignItems: center;
    marginTop: 14px;
    padding: 10px;
    justifyContent: space-between;
`
const Mini = styled.View`
    flexDirection: row;
    alignItems: center;
`
const CardTitle = styled.Text`
    fontSize: 16px;
    marginLeft: 10px;
    fontWeight: 500;
`
const IconContainer = styled.View`
    flexDirection: row;
    padding: 10px;
    alignSelf: center;
    width: 40%;
    justifyContent: space-evenly;
    marginTop: 10px;
`
const ImageContainer = styled.View`
    flexDirection: row;
    alignSelf: center;
    justifyContent: space-evenly;
    borderWidth: 1;
    height: 80;
    width: 80;
    borderRadius: 100px;
    alignItems: center;
`
const Meta = styled.Text`
    fontSize: 14px;
    textAlign: center;
    color: #949191;
`



const styles = StyleSheet.create({
    icon: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 100
    }
})

export default Account