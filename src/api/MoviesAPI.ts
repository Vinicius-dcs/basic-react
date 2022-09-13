import axios from 'axios';

export const MoviesAPI = {
    getAll: async () => {
        let response = await axios.get('https://api.b7web.com.br/cinema/');
        return response.data;
    }
}