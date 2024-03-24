import {responsiveFont, responsiveScale} from '../../utilities/helper';
import MainModal from '../mainModal';
import Box from '../box';
import Text from '../text';
import {Platform, Pressable} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import SearchInput from '../searchInput';
import MainButton from '../mainButton';

interface UniversityListModalProps {
  show: boolean;
  onDismiss: () => void;
  data: string[];
  sendUniversity: (university: string) => void;
}

const UniversityListModal = ({
  show = false,
  onDismiss,
  data = [],
  sendUniversity,
}: UniversityListModalProps) => {
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState<string>('');

  return (
    <MainModal type="long" onDismiss={onDismiss} show={show}>
      <Box paddingTop="xl">
        <Box paddingHorizontal="m">
          <Text fontWeight="bold">UNIVERSITY LIST</Text>
          <SearchInput setFilteredData={setFilteredData} data={data} />
        </Box>
        <Box
          height={
            Platform.OS === 'ios' ? responsiveScale(140) : responsiveScale(150)
          }>
          <FlatList
            data={filteredData.length === 0 ? data : filteredData}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setSelectedUniversity(item);
                }}>
                <Box
                  paddingVertical="s"
                  paddingHorizontal="m"
                  flexDirection="row"
                  alignItems="center"
                  backgroundColor={
                    index % 2 === 0 ? 'lightCollegeRed' : 'white'
                  }>
                  {item === selectedUniversity ? (
                    <Icon name="checkbox" size={responsiveFont(17)} />
                  ) : (
                    <Icon name="checkbox-outline" size={responsiveFont(17)} />
                  )}

                  <Text
                    fontSize={responsiveFont(12)}
                    color="secondaryGrey"
                    marginLeft="s">
                    {item}
                  </Text>
                </Box>
              </Pressable>
            )}
          />
        </Box>
        {selectedUniversity.length > 0 && (
          <MainButton
            onPress={() => {
              sendUniversity(selectedUniversity);
            }}
            margin="m"
            textProp={{
              textAlign: 'center',
              color: 'white',
              paddingVertical: responsiveScale(5),
            }}
            backgroundColor="collegeRed"
            label="CONTINUE"
          />
        )}
      </Box>
    </MainModal>
  );
};

export default UniversityListModal;
