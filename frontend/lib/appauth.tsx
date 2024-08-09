import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define your API endpoint //192.168.3.107
const API_URL = 'http://192.168.1.73:5000/api/auth'; // Replace with your server URL

// Create user function
export const registerUser = async (email: string, password: string, username: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
      username,
    });
    const { token, user } = response.data; // Extract token and user from response
    await AsyncStorage.setItem('authToken', token); // Store the token in AsyncStorage
    return { user }; // Return both user data and token
  } catch (error) {
    throw new Error(`Failed to create user: ${(error as Error).message}`);
  }
};

// Login user function
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    const { token, user } = response.data; // Extract token and user from response
    await AsyncStorage.setItem('authToken', token); // Store the token in AsyncStorage
    return { user }; // Return both user data and token
  } catch (error) {
    throw new Error(`Failed to login: ${(error as Error).message}`);
  }
};

// Get current user function
export const getCurrentUser = async () => {
  try {
    const token = await AsyncStorage.getItem('authToken');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await axios.get(`${API_URL}/current-user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to get current user: ${(error as Error).message}`);
  }
};

// Logout function
export const logoutUser = async () => {
 
  await AsyncStorage.removeItem('authToken'); // Remove the token from AsyncStorage
};
