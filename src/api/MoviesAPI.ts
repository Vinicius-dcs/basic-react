export const MoviesAPI = {
    getAll: async () => {
        let response = await fetch('https://api.b7web.com.br/cinema/');
        return await response.json();
    }
}