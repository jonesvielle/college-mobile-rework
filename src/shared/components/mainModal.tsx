import React, {useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {responsiveScale, width} from '../utilities/helper';

interface BottomSheetModalProps {
  show: boolean;
  isDraggable: boolean;
  onDismiss: () => void;
  type: 'default' | 'long' | 'short';
}

const MainModal: React.FC<BottomSheetModalProps> = ({
  show = false,
  isDraggable = false,
  children,
  onDismiss,
  type = 'default',
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
    if (type === 'default') return ['5%', '65%'];
    if (type === 'long') return ['5%', '80%'];
    if (type === 'short') return ['5%', '30%'];
  }, []);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        style={{
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

  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
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
          handleComponent={null}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}>
          <BottomSheetView style={{flex: 1, width}}>{children}</BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default MainModal;
