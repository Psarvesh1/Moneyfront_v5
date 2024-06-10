import styled from "styled-components";
import { Button } from "react-native-paper";
import React,{useState} from 'react'
import HoldingsData from "./HoldingsData";
import HoldingsNoData from "./HoldingsNoData";


const Holdings = ({navigation}) => {
  const [flag, setFlag] = useState(1)
  return (
    <>
    {flag==1? <HoldingsData navigation={navigation}/>: <HoldingsNoData/>}
    </>
  );
}

export default Holdings