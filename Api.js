const BASE_URL = 'http://localhost:5214/api/Biblioteca'


// chama API para mostrar todos os livros

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


// chama API para mostrar livro escolhido
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
        const data = JSON.parse(textData);

        return data;

    } catch (error) {

        // tratativa - em caso de erro
        console.error(error);
        throw error;
    }
}


// chama API para alugar
export const postRequest = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/aluga/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao alugar o livro");
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        console.error(error);
        throw error;
    }
};


// chama API para devovler
export const postRequestDevolve = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/devolve/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao alugar o livro");
        }

        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postRequestAddLivro = async (title, autor, qtd, estoque, imagem) => {
    try {


        let myBody = {
            id: 0,
            name: title,
            autor: autor,
            quantidade: qtd,
            estoque: estoque,
            imagemUrl: imagem


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
