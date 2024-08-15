import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://192.168.3.103:5000/api/chats';

// Fetch existing messages
export const fetchCharts = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) throw new Error('No token found');

    const response = await axios.get(`${API_URL}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Create a new chat
export const createChart = async (title: string, userInput: string, image?: string) => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    if (!token) throw new Error('No token found');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('userInput', userInput);

    if (image) {
      formData.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'photo.jpg',
      } as any);
    }

    const response = await axios.post(`${API_URL}/create`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
