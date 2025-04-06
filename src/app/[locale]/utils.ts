import axios from "axios";

export const fetchMessageHistory = async () => {
    try {
      const response = await axios.get('https://api.dify.ai/v1/messages', {
        headers: {
          Authorization: `Bearer ${process.env.KEY_API}`, 
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar histórico de mensagens:', error);
      return [];
    }
  };