const imageAPI = document.querySelector('.imagem-api');
let searchDigimon = 'koromon';

const fetchImageDigimon = async (image) => {
    try {
        const imageURL = `https://digimon.shadowsmith.com/img/${image}.jpg`;
        console.log(imageURL);
        return imageURL;
    } catch (error) {
        console.log('Erro durante busca pela API de imagens');
        throw error;
    }
}

const renderDigimon = async (digimon) => {
    try {
        const imageURL = await fetchImageDigimon(digimon);
        if (imageURL) {
            imageAPI.style.display = 'block';
            imageAPI.src = imageURL;
        }
    } catch (error) {
        console.log('Erro durante a renderização do Digimon', error);
    }
}

renderDigimon(searchDigimon);