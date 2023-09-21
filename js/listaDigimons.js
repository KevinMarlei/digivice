// Função para buscar a lista completa de Digimons
async function fetchAllDigimons() {
    try {
        const apiResponse = await fetch('https://digimon-api.vercel.app/api/digimon');
        if (apiResponse.status === 200) {
            const data = await apiResponse.json();
            return data;
        } else {
            throw new Error(`Falha na solicitação com status ${apiResponse.status}`);
        }
    } catch (error) {
        console.log('Ocorreu um erro durante a busca pela lista de Digimons:', error.message);
        throw error;
    }
}

// Função para renderizar a lista de nomes de Digimons
async function renderDigimonList() {
    try {
        const allDigimons = await fetchAllDigimons(); // Obtém a lista completa de Digimons

        if (allDigimons && allDigimons.length > 0) {
            const digimonList = document.querySelector('.digimon-list'); // Seleciona a div onde a lista de nomes será exibida
            const ul = document.createElement('ul'); // Cria uma lista não ordenada (ul) para os nomes

            allDigimons.forEach(function (digimon, index) {
                const li = document.createElement('li');
                li.textContent = digimon.name;

                li.addEventListener('click', async function () {
                    await renderSelectedDigimon(index, allDigimons);
                });

                ul.appendChild(li); // Adiciona o item de lista à lista não ordenada
            });

            digimonList.innerHTML = ''; // Limpa qualquer conteúdo anterior
            digimonList.appendChild(ul); // Adiciona a nova lista de nomes à div
        } else {
            console.log('Lista de Digimons vazia ou inválida.');
        }
    } catch (error) {
        console.log('Erro ao renderizar a lista de nomes de Digimons', error);
    }
}

// Chama a função para renderizar a lista de nomes de Digimons
renderDigimonList();

// Função para obter o URL da imagem do Digimon com base no nome
function getImageUrl(name) {
    return `https://digimon.shadowsmith.com/img/${name.toLowerCase()}.jpg`;
}

// Função para renderizar um Digimon com base no índice
async function renderSelectedDigimon(index, allDigimons) {
    try {
        const digimon = allDigimons[index];
        if (digimon) {
            const imageURL = getImageUrl(digimon.name);

            if (imageURL) {
                const imageAPI = document.querySelector('.imagem-api');
                const borda = document.querySelector('.borda');
                if (digimon.name.toLowerCase() === "wargreymon" || digimon.name.toLowerCase() === "vikemon" || digimon.name.toLowerCase() === "rosemon" || digimon.name.toLowerCase() === "seraphimon" || digimon.name.toLowerCase() === "magnadramon" || digimon.name.toLowerCase() === "herculeskabuterimon" || digimon.name.toLowerCase() === "metalgarurumon" || digimon.name.toLowerCase() === "phoenixmon" || digimon.name.toLowerCase() === "omnimon" || digimon.name.toLowerCase() === "imperialdramon") {
                    borda.style.display = 'block';

                } else {
                    borda.style.display = 'none';
                }
                imageAPI.style.display = 'block';
                imageAPI.src = imageURL;
                showVideo(digimon.name);
            } else {
                console.log('Imagem do Digimon não encontrada');
                imageAPI.style.display = 'none';
            }
        } else {
            console.log('Digimon não encontrado');
            imageAPI.style.display = 'none';
        }
    } catch (error) {
        console.log('Erro durante a renderização do Digimon', error);
    }
}