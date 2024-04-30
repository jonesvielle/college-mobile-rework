import React, {useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {responsiveScale, width} from '../utilities/helper';
import Box from './box';
import {palette} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

interface BottomSheetModalProps {
  show: boolean;
  isDraggable: boolean;
  onDismiss: () => void;
  type: 'default' | 'long' | 'short' | 'extra-short';
  handleType: 'lectures-list' | 'school-list' | 'none';
}

const MainModal: React.FC<BottomSheetModalProps> = ({
  show = false,
  isDraggable = false,
  children,
  onDismiss,
  type = 'default',
  handleType = 'none',
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const open = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const close = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  React.useEffect(() => {
    if (show) {
      open();
    } else {
      close();
    }
  }, [show]);

  const snapPoints = useMemo(() => {
    if (type === 'default') return ['5%', '50%'];
    if (type === 'long') return ['5%', '80%'];
    if (type === 'short') return ['5%', '35%'];
    if (type === 'extra-short') return ['5%', '23%'];
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        style={{
          position: 'relative',
          zIndex: 30,
          backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5, // For Android
        }}
        {...props}
      />
    ),
    [],
  );
  const handleComponent = () => {
    if (handleType === 'lectures-list') {
      return (
        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Box
            borderColor="collegeRed"
            backgroundColor="white"
            style={{marginTop: -responsiveScale(10)}}
            borderWidth={responsiveScale(0.5)}
            padding="m"
            borderRadius={responsiveScale(100)}>
            <Icon size={responsiveScale(10)} name="play" color={palette.red} />
          </Box>
        </Box>
      );
    }
    if (handleType === 'school-list') {
      return null;
    }
    if (handleType === 'none') {
      return null;
    }
    return null;
  };

  return (
    <BottomSheetModalProvider>
      {/* <View
        style={{
          flex: 1,
          width: '100%',
          
        }}> */}
      <BottomSheetModal
        onDismiss={onDismiss}
        backdropComponent={renderBackdrop}
        style={{
          borderRadius: responsiveScale(5),
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,

          elevation: 12,
        }}
        enableContentPanningGesture={isDraggable}
        handleComponent={handleComponent}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}>
        <BottomSheetView style={{flex: 1, width}}>{children}</BottomSheetView>
      </BottomSheetModal>
      {/* </View> */}
    </BottomSheetModalProvider>
  );
};

export default MainModal;
