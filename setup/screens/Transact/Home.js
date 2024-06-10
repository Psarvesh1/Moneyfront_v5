import React, {useState} from 'react';
import styled from 'styled-components';
import { horizontalScale, verticalScale, moderateScale } from '../../themes/metrics';
import ComingSoon from '../../components/ComingSoon';
const Transact = ({navigation}) => {
  const [tab, setTab] = useState(0);

  return (
    <ComingSoon/>
  );
};

const Container = styled.View`
  flex: 1;

  flex-direction: column;
`;

const Title = styled.Text`
  fontSize: ${moderateScale(28)};
  fontWeight: bold;
  marginBottom: ${verticalScale(10)};
  marginLeft: ${horizontalScale(15)};
  alignSelf: flex-start;
`
export default Transact;
