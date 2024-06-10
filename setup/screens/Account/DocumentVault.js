import React, { useState } from 'react'
import styled from 'styled-components'
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import KYCDoc from './KYCDoc';
import PDoc from './PDoc';
import { useNavigation } from '@react-navigation/native';
const DocumentVault = () => {
const navigation = useNavigation()
const [tab, setTab] = useState(0)
  return (
    <Container>
        <SegmentedControl
        values={['KYC Documents', 'Personal Documents']}
        selectedIndex={tab}
        onChange={event => {
          setTab(event.nativeEvent.selectedSegmentIndex);
        }}
        style={{width: '95%', alignSelf: 'center', marginTop: 10}}
      />
    {tab==0? <KYCDoc navigation={navigation}/>: tab==1?<PDoc navigation={navigation}/>: null}

    </Container>
    
  )
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #fff
`

export default DocumentVault