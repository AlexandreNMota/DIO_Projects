


/*// Async e await
async function resolvePromise(){
    const MY_PROMISE = new Promise((resolve, reject) =>{
        window.setTimeout(() =>{
            resolve('Resolvida ');
        }, 3000);
    });

    const RESOLVED = await MY_PROMISE
        .then((result) => result + 'passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    return RESOLVED
    }
*/
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat');
const CAT_IMG = document.getElementById('cat');


const getCats = async () => {
    
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    }
    catch(e){
        console.log(e.message);
    }
};

const loadIMG = async () =>{
    CAT_IMG.src = await getCats();
};

CAT_BTN.addEventListener('click', loadIMG);

loadIMG();





