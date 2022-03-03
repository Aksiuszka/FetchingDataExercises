const newLabels =[];
const temperatury =[];
charting();
async function charting(){
    await getCSV();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: newLabels,
            datasets: [{
                label: 'Srednia temperatura',
                data: temperatury,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// getCSV().then(dane=>{
//     document.getElementById('table').innerHTML = dane;
//  }).catch(error=>{
//      console.log("error");
//      console.log(error)
//  });
 async function getCSV(){
     const table = await fetch('zones.csv');
     const response = await table.text();
     // tne na wiersze
     const tabela = response.split('\n').slice(1);
     tabela.forEach(rows=>{
         const col = rows.split(',');
         const year =col[0];
         const temp = col[1];
         console.log(year, temp);
         newLabels.push(year);
         temperatury.push(parseFloat(temp)+14);
     })
   return tabela;
    }
