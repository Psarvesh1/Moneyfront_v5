import styled from "styled-components";
import React, { useContext, useState } from 'react'
import SnapNoData from "./SnapNoData";
import SnapData from "./SnapData";
import AuthContext from "../../../context/AuthContext";
const Snapshot = ({setTab}) => {
  
  let { isAuth } = useContext(AuthContext)

  return (
    <>
      <SnapData setTab={setTab}/>
    </>
  );
}


const Profile = styled.View`
  flexDirection: column;
  height: 350px;
`
const Head = styled.Text`
  fontSize: 18px;
  textAlign: center;
  alignSelf: center;
  color: white;
`
const Meta = styled.Text`
  fontSize: 14px;
  textAlign: center;
  marginTop: 20px;
  paddingLeft: 10px;
  paddingRight: 20px;
`
const Info = styled.Text`
  fontSize: 14px;
  marginTop: 10px;
`
export default Snapshot