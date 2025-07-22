import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import ModalScreen from "./modal";

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskText, setTaskText] = useState("");

  const handleSaveTask = () => {
    if (taskText.trim()) {
      setTaskText("");
      setModalVisible(false);
    }
  };

  const closeModal = () => {
    setTaskText("");
    setModalVisible(false);
  };
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold text-gray-800">📝 To-Do App</Text>
      <Text className="text-gray-600 mt-2">
        Seu aplicativo está funcionando!
      </Text>

      {/* Botão para abrir modal */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="mt-6 bg-blue-500 px-8 py-4 rounded-xl shadow-lg active:bg-blue-600"
      >
        <Text className="text-white font-semibold text-lg">
          + Criar nova tarefa
        </Text>
      </TouchableOpacity>
      <ModalScreen
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        cta={
          <View>
            <Pressable
              className="bg-gray-200 px-4 py-2 rounded-xl"
              onPress={closeModal}
            >
              <Text className="text-gray-700">Cancelar</Text>
            </Pressable>
            <Pressable
              className="bg-blue-500 px-4 py-2 rounded-xl mt-2"
              onPress={handleSaveTask}
            >
              <Text className="text-white">Salvar</Text>
            </Pressable>
          </View>
        }
        form={
          <TextInput
            className="border-2 border-gray-200 rounded-xl p-4 mb-6 text-gray-700 focus:border-blue-500"
            placeholder="O que você precisa fazer?"
            placeholderTextColor="#9CA3AF"
            value={taskText}
            onChangeText={setTaskText}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            autoFocus
          />
        }
        title="Criar nova tarefa"
        closeModal={closeModal}
      />

      {/* Modal Overlay */}
    </View>
  );
}

export default Home;
