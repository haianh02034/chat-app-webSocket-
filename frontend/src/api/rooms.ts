import axios from 'axios';

const API_URL = 'http://localhost:3000/rooms';

export const getMyRooms = async () => {
  try {
    const response = await axios.get(`${API_URL}/my`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching my rooms:', error);
    throw error;
  }
};
