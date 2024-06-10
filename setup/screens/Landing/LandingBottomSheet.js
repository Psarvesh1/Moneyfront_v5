import BottomSheet from '@gorhom/bottom-sheet';
import {useMemo} from 'react';
import {StyleSheet, Text} from 'react-native';
import styled from 'styled-components';
const BottomSheetModal = () => {
  const snapPoints = useMemo(() => ['4%', '33%'], []);

  return (
        <BottomSheet index={1} snapPoints={snapPoints}>
          <ContentContainer>
            <FirstCol>
                <Text style={[{fontSize: 20}]}>Disclosure</Text>
                <Text style={[{color: 'lightgrey', marginTop: 12}]}>Number of complaints</Text>
                <Text style={[{fontSize: 13,marginTop: 14}]}>At beginning of the month</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>Received during the month</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>Resolved during the month</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>Pending at the end of the month</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>Reason for pendency</Text>
            </FirstCol>
            <SecCol>
                <Text style={[{fontSize: 13, marginTop: 50, marginRight: 50}]}>0</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>0</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>0</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>0</Text>
                <Text style={[{fontSize: 13, marginTop: 10}]}>NA</Text>
            </SecCol>
          </ContentContainer>
        </BottomSheet>
  );
};

const ContentContainer = styled.View`
    flex: 1;
    alignItems: center;
    flexDirection: row;
    justifyContent: space-between;
    padding: 20px;
`
const FirstCol = styled.View`
    flexDirection: column;
`
const SecCol = styled.View`
    flexDirection: column;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
  },
});

export default BottomSheetModal;
