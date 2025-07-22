import { Text, View, Modal, Pressable, Platform } from "react-native";

interface ModalScreenProps {
  title: string;
  form: React.JSX.Element | React.JSX.Element[];
  cta: React.JSX.Element | React.JSX.Element[];
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  closeModal?: () => void;
}

export default function ModalScreen({
  title,
  form,
  cta,
  modalVisible,
  setModalVisible,
  closeModal,
}: ModalScreenProps) {
  return (
    <Modal
      animationType={Platform.OS === "ios" ? "slide" : "fade"}
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
      statusBarTranslucent
    >
      <Pressable
        className="flex-1 justify-center items-center bg-black/50"
        onPress={closeModal}
      >
        <Pressable
          className="bg-white mx-4 p-6 rounded-2xl w-full max-w-sm shadow-xl"
          onPress={(e) => e.stopPropagation()}
        >
          <Text className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {title}
          </Text>
          <View>{form}</View>

          <View className="flex-row justify-between space-x-3">{cta}</View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
