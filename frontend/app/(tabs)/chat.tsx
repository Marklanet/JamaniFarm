import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Alert, SafeAreaView, Image, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { fetchCharts, createChart } from '../../lib/appchat';
import { icons } from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import Markdown from 'react-native-markdown-display';

// Define the chat interface
interface ChatMessage {
  id: number;
  userId: number;
  title: string;
  userInput: string;
  systemResponse: string;
  date: string;
  imageUrl?: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [title, setTitle] = useState<string>('Farming Info');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null); // State for systemResponse
  const [showHistory, setShowHistory] = useState<boolean>(false); // State to track history view

  const flatListRef = useRef<FlatList<ChatMessage> | null>(null);

  // Fetch existing messages
  const fetchMessages = async () => {
    try {
      const data = await fetchCharts();
      setMessages(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    // Scroll to the end when messages are updated
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  // Handle sending a message
  const sendMessage = async () => {
    if (input.trim() === '' && !image) {
      Alert.alert('Error', 'Please enter a message or select an image.');
      return;
    }

    setLoading(true);

    try {
      const data = await createChart(title, input, image || undefined);
      setResponse(data); // Assuming data is a string

      // Clear input and image after sending
      setInput('');
      setImage(null);
      fetchMessages(); // Refresh messages

      // Reset the showHistory state to false to switch back to chat state
      setShowHistory(false);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle picking an image
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Camera roll permission is required to select an image.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri); // Use result.assets[0].uri to get the image URI
    }
  };

  const renderItem = ({ item }: { item: ChatMessage }) => (
    <View className="mb-4 flex-row justify-between items-start">
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} className="w-24 h-24 rounded-md mb-2" />
      )}
      <View className={`flex-1 p-3 rounded-md shadow-md w-full ${item.userId === 1 ? 'bg-[#f7fee7] self-end' : ' self-start'}`}>
        <View className="flex-row p-2 rounded-lg rounded-br-none justify-between items-center mb-2 max-w-[70%] ml-[30%] bg-[#a3f08e]">
          <Text className="flex-1 text-sm text-[#100707]">User: {item.userInput}</Text>
        </View>
        <View className="flex-row p-2 justify-between rounded-lg rounded-bl-none items-center mt-2 max-w-[85%] bg-[#d1d5db]">
          <Markdown>{item.systemResponse}</Markdown>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-[#f7fee7]">
      <CustomHeader pickImage={pickImage} onHistoryPress={() => setShowHistory(!showHistory)} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.select({ ios: 90, android: 0 })}
      >
        {showHistory ? (
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', padding: 10 }}>
            <View className="p-3 rounded-md max-w-[85%] max-h-max pt-5 mt-10 mb-20 pb-16 bg-[#d1d5db] shadow-md self-start">
              <Markdown>{response}</Markdown>
            </View>
          </ScrollView>
        ) : (
          <FlatList
            ref={flatListRef} // Set the ref here
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }} // Ensures the input area is visible
          />
        )}
      </KeyboardAvoidingView>
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-[#f7fee7] flex-row justify-between items-center mt-3">
        <TouchableOpacity onPress={pickImage} className="p-2 border-secondary border rounded-lg">
          <Image
            source={icons.attach}
            resizeMode="contain"
            style={{ tintColor: 'black' }}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TextInput
          className="border-secondary border rounded-md p-1.5 flex-1 mx-2 text-center"
          value={input}
          onChangeText={setInput}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={sendMessage} disabled={loading} className={`p-2 border-secondary border rounded-lg ${loading ? 'opacity-50' : ''}`}>
          <Image
            source={icons.send}
            style={{ tintColor: 'black' }}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
