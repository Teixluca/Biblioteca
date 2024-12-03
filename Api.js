const BASE_URL = 'http://localhost:5214/api/Biblioteca'


export const getRequest = async () => {
    try {
        // executa o comando
        const response = await fetch(BASE_URL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET Request failed with status: ${response.status}`);
        }

        const textData = await response.text();
        const data = JSON.parse(textData);

        return data;

    } catch (error) {

        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}
