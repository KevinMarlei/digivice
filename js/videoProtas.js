const exibirVideo = document.querySelector('.videos');
const digimonsComVideos = [
    'wargreymon','metalgarurumon','seraphimon','phoenixmon',
    'herculeskabuterimon','vikemon','rosemon','magnadramon',
    'omnimon','paildramon','imperialdramon',
];


function showVideo(digimonName){
    const nomeMinusculo = digimonName.toLowerCase();
    
    switch(nomeMinusculo){
        case 'wargreymon':
            exibirVideo.src = 'https://www.youtube.com/embed/7X83ok9dPR8?si=TV4WZggHqW8L785u&amp;start=74';
            setTimeout(() => stopVideo(), 50000);
            break;
        case 'metalgarurumon':
            exibirVideo.src = 'https://www.youtube.com/embed/oLolZOUCLlw?si=K_nWeRd4HuxfIm_x&amp;start=46';
            setTimeout(()=> stopVideo(), 42000);
            break;
        case 'seraphimon':
            exibirVideo.src = 'https://www.youtube.com/embed/uZM8FxQfCRI?si=SEjYLb0iKDgqzn-2&amp;start=10';
            setTimeout(()=> stopVideo(), 90000);
            break;
        case 'phoenixmon':
            exibirVideo.src = 'https://www.youtube.com/embed/tLRWSR5NlJc?si=JGJMehbHEELK-9HB&amp;start=0';
            setTimeout(()=> stopVideo(), 46000);
            break;
        case 'herculeskabuterimon':
            exibirVideo.src = 'https://www.youtube.com/embed/SyTS425rdNw?si=HJ-1quoZFdwSn61l&amp;start=0';
            setTimeout(() => stopVideo (), 42000);
            break;
        case 'vikemon':
            exibirVideo.src = 'https://www.youtube.com/embed/HO4UeFHzmN0?si=RCEFEORvJBm3h6X_&amp;start=0';
            setTimeout(() => stopVideo(), 40000);
            break;
        case 'rosemon':
            exibirVideo.src = 'https://www.youtube.com/embed/MPWPL7P9V2w?si=2Jf1XRLiQo7DeXyR&amp;start=51';
            setTimeout(() => stopVideo(),16000);
            break;
        case 'magnadramon':
            exibirVideo.src = 'https://www.youtube.com/embed/_uiC7x_9MtA?si=xQ6kmwL5DFwNuVyH&amp;start=7';
            setTimeout(()=> stopVideo(), 55000);
            break;
        case 'omnimon':
            exibirVideo.src = 'https://www.youtube.com/embed/6-IchNjI5g8?si=IuL5heccBMbdtPQ2&amp;start=0';
            setTimeout(() => stopVideo(),30000);
            break;
        case 'paildramon':
            exibirVideo.src = 'https://www.youtube.com/embed/Ccs_eI5790s?si=IJZLYr0Cd9T6ujtw&amp;start=0';
            setTimeout(() => stopVideo(),28000);
            break;
        case 'imperialdramon':
            exibirVideo.src = 'https://www.youtube.com/embed/j1QQ6MViQLY?si=qlc3HYJS2UlSpzge';
            setTimeout(() => stopVideo(),30000);
            break;
       
        default:
            exibirVideo.src = '';
            break;
    }
}
function stopVideo(){
    exibirVideo.src = '';
}