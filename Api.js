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

export const getRequestId = async (id) => {
    try {
        // executa o comando
        const response = await fetch(`${BASE_URL}/${id}`, {
            
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET Request failed with status: ${response.status}`);
        }

        const textData = await response.text();
        const data = JSON.stringify(textData);

        return data;

    } catch (error) {

        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}

export const postRequest = async (name, autor, quantidade) => {
    try {


        let myBody = {
            id: 0,
            name: name,
            autor: autor,
            quantidade: quantidade

        }

        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myBody)
        });


        if (!response.ok) {
            throw new Error("Post Failed !!!")
        }


        const textData = await response.text();
        return JSON.stringify(textData);


    } catch (error) {
        console.error(error);
        throw error;
    }
};

