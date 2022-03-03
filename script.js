console.log("stary sposob");
const obrazek = fetch('https://picsum.photos/200/300').then(response=>{
    console.log(response);
    return response.blob();
}).then(res =>{
    console.log(res);
    document.getElementById('random').src = URL.createObjectURL(res);
}).catch(error=>{
    console.log("error");
    console.log(error);
});

async function getPic(){
    console.log("nowy sposob");
    const obrazek2 = await fetch('https://picsum.photos/200/300');
    const resp = await obrazek2.blob();
    document.getElementById('random2').src = URL.createObjectURL(resp);
    
}
getPic().catch(error=>{
    console.log("error");
    console.log(error)});

    async function getTxt (){
        
    console.log("teraz txt")
       const txt = await fetch('wiersz.txt');
       const response = await txt;
       return response.text();
    }
    getTxt().then(poemat=>{
        document.getElementById('txt').innerHTML = poemat;
    }).catch(error=>{
        console.log("error");
        console.log(error)});