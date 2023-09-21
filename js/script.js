const bordaColorida = document.querySelector('.borda');

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const formSearch = document.querySelector('.form-search');
const inputSearch = document.querySelector('.input-search');



const fetchDigimon = async (digimon) => {
    try {
        const apiResponse = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`);

        if (apiResponse.status === 200) {
            const data = await apiResponse.json();
            console.log(data.name);
            return data;
        } else {
            throw new Error(`Falha na solicitação com status ${apiResponse.status}`);
        }
    } catch (error) {
        console.log('Ocorreu um erro durante a busca pela API:', error.message);
        throw error;
    }
}

// funcionalidades do input//
formSearch.addEventListener('submit', async (eventInput) => {
    eventInput.preventDefault();

    const inputValue = inputSearch.value.toLowerCase();
    const inputText = inputValue.trim();

    if (inputText) {
        try {
            const digimonData = await fetchDigimon(inputText);
            const imageURL = await fetchImageDigimon(inputText);
            if (digimonData && imageURL) {
                imageAPI.style.display = 'block';
                imageAPI.src = imageURL;
                if (inputText === "wargreymon" || inputText === "vikemon" || inputText === "rosemon" || inputText === "seraphimon" || inputText === "magnadramon" || inputText === "herculeskabuterimon" || inputText === "metalgarurumon" || inputText === "phoenixmon" || inputText === "omnimon" || inputText === "imperialdramon"){
                    imageAPI.style.display = 'block';
                    bordaColorida.style.display = 'block' 
                    if(digimonsComVideos.includes(inputText)){
                        showVideo(inputText);
                    }
                                       
                }else{

                    imageAPI.style.display = 'block';
                    bordaColorida.style.display = 'none';
                }
                inputSearch.value = '';
            } else {
                console.log('Imagem do digimon não encontrada');
                imageAPI.style.display = 'none';
            }
        } catch (error) {
            console.log('Erro ao buscar informações do digimon');
            imageAPI.src = './image/digiFeces.jpg';

        }
    }
});
