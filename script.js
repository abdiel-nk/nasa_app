const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=16"


async function listImgAsync(){
    try{
        let fetchImagen=  await fetch(url)
        let datosImgs = await fetchImagen.json()

        const card = document.querySelector("[data-ul]")

                datosImgs.forEach(elemento => {
                    const contenido = `<li class="card">
                    <img class="card__image" src="${elemento.url}" alt="imagen">
                    <h3 class="card__title">${elemento.title}</h3>
                </li>`
                card.innerHTML = card.innerHTML + contenido;
                });

    }
    catch(error){
        console.log(error);
    }
}
listImgAsync()

// async function fetchData(){
//     try {
//         let response = await.fetch('url')   
//         let data = await.response.json()
//     } catch (error) {
//         console.log(error);
//     }
// }

//------Listar Img------
// function listImg (){
//     fetch(url)
//     .then(response => response.json())
//     .then(datosImg=>{
//         console.log(datosImg);
    
//         const card = document.querySelector("[data-ul]")

//         datosImg.forEach(elemento => {
//             const contenido = `<li class="card">
//             <img class="card__image" src="${elemento.url}" alt="imagen">
//             <h3 class="card__title">${elemento.title}</h3>
//         </li>`
//         card.innerHTML = card.innerHTML + contenido;
//         });
//     })
//     .catch(error=> console.log(error))
// }

// listImg()

