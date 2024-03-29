
$(function () {

    chart2022();
    chart2023();

});

function chart2023() {

    const ctx = document.getElementById('chart2023');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sapituca', 'Caraminholas', 'Casa do bebe', 'NT', 'Alfa'],
            datasets: [{
                label: '',
                data: [3114248.68, 4446682.50, 3020235.99, 3181697.02, 825359.38],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

function chart2022() {

    const ctx = document.getElementById('chart2022');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sapituca', 'Caraminholas', 'Casa do bebe', 'NT', 'Alfa'],
            datasets: [{
                label: '',
                data: [2942796.63, 3991052.23, 3234588.82, 3088971.31, 901535.91],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}