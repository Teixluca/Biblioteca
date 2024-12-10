const BASE_URL_USER = 'http://localhost:5214/api/User'



// chama API para mostrar todos os livros

export const getRequestUser = async () => {
    try {
        // executa o comando
        const response = await fetch(BASE_URL_USER, {
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



export const postRequestUser = async (user, email, ano, id) => {
    try {


        let myBody = {
            idUser: 0,
            id: id,
            nameUser: user,
            emailUser: email,
            anoNasc: ano

        }
        const response = await fetch(BASE_URL_USER, {
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