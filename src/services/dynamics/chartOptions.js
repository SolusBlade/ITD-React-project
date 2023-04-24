export const optionsPhone = {
    chartArea:{
      bottom: 5
    },
    maintainAspectRatio: false,
    categoryPercentage: 0.75,
    barPercentage: 0.5,
    indexAxis: 'y',
    borderRadius: 6,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
              size: 16,
          },
      }
      },
      title: {
        display: false,
      },
    },
    layout:{
      padding: {
        left: 40
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          borderColor: 'white',
          borderWidth: 2,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#F3F3F3',
          padding: 0,
          backdropPadding: 0,
          font: {
            size: 12,
          },
        },
        gridLines: {
          tickMarkLength: 10
       },
       position:{
        y: -0.75
       }
      },
      x: {
        grid: {
          color: 'rgba(243, 243, 243, 0.2)',
          offset: false,
          tickLength: 13,
          tickBorderDash: [3, 10],
        },
        border:{
          display: false,
          dash: [8, 10],
        },
        ticks: {
          color: '#F3F3F3',
        },
        position: 'top',

      }
    },
    labels: {
      fontColor: '#F3F3F3'
    },
  };

  export const optionsTablet = {
    chartArea:{
      bottom: 5
    },
    maintainAspectRatio: false,
    categoryPercentage: 0.75,
    barPercentage: 0.5,
    indexAxis: 'x',
    borderRadius: 6,
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
              size: 16,
          },
      }
      },
      title: {
        display: false,
      },
    },
    layout:{
      padding: {
        left: 0
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          offset: false,
          color: 'rgba(243, 243, 243, 0.2)',
          tickLength: 10,
          tickBorderDash: [3, 10],
        },
        border: {
          display: true,
          dash: [8, 10],
        },
        ticks: {
          color: '#F3F3F3',
          backdropPadding: 0,
          font: {
            size: 12,
            family: 'Lato',
            weight: 400,
          },
        },
        gridLines: {
          tickMarkLength: 10
        },
      },
      x: {
        grid: {
          display: false,
          color: 'rgba(243, 243, 243, 0.2)',
          offset: false,
          tickLength: 10,
        },
        border:{
          display: false,
          dash: [8, 10],
        },
        ticks: {
          color: '#F3F3F3',
          font: {
            size: 12,
            family: 'Lato',
            weight: 400,
          },
        },
      }
    },
  }