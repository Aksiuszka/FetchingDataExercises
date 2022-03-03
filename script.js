//old way of fetching data (one pic)
console.log('stary sposob');
const obrazek = fetch('https://picsum.photos/200/300')
	.then((response) => {
		console.log(response);
		return response.blob();
	})
	.then((res) => {
		console.log(res);
		document.getElementById('random').src = URL.createObjectURL(res);
	})
	.catch((error) => {
		console.log('error');
		console.log(error);
	});
// new way of fetching data, still pic
async function getPic() {
	console.log('nowy sposob');
	const obrazek2 = await fetch('https://picsum.photos/200/300');
	const resp = await obrazek2.blob();
	document.getElementById('random2').src = URL.createObjectURL(resp);
}
getPic().catch((error) => {
	console.log('error');
	console.log(error);
});
// fetching txt
async function getTxt() {
	console.log('teraz txt');
	const txt = await fetch('wiersz.txt');
	const response = await txt;
	return response.text();
}
getTxt()
	.then((poemat) => {
		document.getElementById('txt').innerHTML = poemat;
	})
	.catch((error) => {
		console.log('error');
		console.log(error);
	});
// fetching csv table data
console.log('dane z tabelki csv');

// getCSV().then(dane=>{
//    document.getElementById('table').innerHTML = dane;
// }).catch(error=>{
//     console.log("error");
//     console.log(error)
// });
// async function getCSV(){
//     const table = await fetch('zones.csv');
//     const response = await table.text();
//     // tne na wiersze
//     const tabela = response.split('\n').slice(1);
//     tabela.forEach(rows=>{
//         const col = rows.split(',');
//         const year =col[0];
//         const temp = col[1];
//         console.log(year, temp);
        
//     })
//   return tabela;

