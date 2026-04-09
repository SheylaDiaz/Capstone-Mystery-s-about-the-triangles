async function loadImage() {
  console.log("hello")
  try {
    const res = await fetch(`http://localhost:8080/randomimg`);

    if (!res.ok) {
      throw new Error("API request failed");
    }
    const data = await res.json();

    document.getElementById("oceanimg").src = data.urls.regular;

  } catch (err) {
    console.error("Image error:", err);
  }
}



document.addEventListener('DOMContentLoaded', () => {
  loadImage();
  const ctx = document.getElementById('myChart').getContext('2d');
  
  const years = [
    2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024,
    2025, 2026
  ];

  const missingPeopleData = [
    50, 65, 70, 80, 90,
    110, 95, 120, 130, 150,
    140, 160, 170, 180, 190,
    200, 210
  ];

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Missing People',
          data: missingPeopleData,
          borderWidth: 2,
          tension: 0.3 ,
          backgroundColor: 'rgba(120, 209, 236, 0.5)',
        borderColor: 'black'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Missing People by Year (2010–2026)',
          color:'white',
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Missing: ${context.parsed.y}`;
            }
          }
        }
      },
      scales: {
        x:{
    ticks: {
      color: 'white' 
    },
          title: {
            display: true,
            text: 'Year',
            color: 'white'
          }
        },
        y:{
    ticks: {
      color: 'white'
    },
          title: {
            display: true,
            text: 'Number of Missing People',
            color: 'white'
          },
          beginAtZero: true
        }
      }
    }
  });
});