function changeIndexAxis() {
  return window.screen.width > 767 ? 'x' : 'y';
}

export const optionsPhone = {
    chartArea:{
      bottom: 5
    },
    maintainAspectRatio: false,
    categoryPercentage: 0.75,
    barPercentage: 0.5,
    // barValueSpacing: 10,
    indexAxis: 'y',
    // barThickness: 8,
    borderRadius: 6,
    elements: {
      bar: {
        borderWidth: 0,
        // categoryPercentage: 0.1,
        // barPercentage: 0.9,
        // width: 1000
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top',
        labels: {
          // This more specific font property overrides the global property
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
          // drawBorder: false,
          borderColor: 'white',
          borderWidth: 2,
          // color: 'rgba(243, 243, 243, 0.2)'
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
          // display: false,
          color: 'rgba(243, 243, 243, 0.2)',
          offset: false,
          // tickColor: 'white'

          // borderColor: 'white',
          // borderWidth: 2,
          tickLength: 13,
          tickBorderDash: [3, 10],
          // tickBorderDashOffset: 50,

          // drawBorder: false,
        },
        border:{
          display: false,
          dash: [8, 10],
          
          // borderColor: 'white',
        },
        ticks: {
          color: '#F3F3F3',
          // padding: 10
        },
        position: 'top',
        // tickBorderDashOffset: 1

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
    // barValueSpacing: 10,
    indexAxis: 'x',
    // barThickness: 8,
    borderRadius: 6,
    elements: {
      bar: {
        borderWidth: 0,
        // categoryPercentage: 0.1,
        // barPercentage: 0.9,
        // width: 1000
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top',
        labels: {
          // This more specific font property overrides the global property
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
        // left: 40
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          offset: false,
          // drawBorder: false,
          // borderColor: 'white',
          // borderWidth: 2,
          color: 'rgba(243, 243, 243, 0.2)',
          // tickLength: 13,
          tickBorderDash: [0, 10],
        },
        border: {
          display: true,
          dash: [8, 10],
        },
        ticks: {
          color: '#F3F3F3',
          padding: 0,
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
      //  position:{
      //   x: 1
      //  }
      },
      x: {
        grid: {
          display: false,
          color: 'rgba(243, 243, 243, 0.2)',
          offset: false,
          // tickColor: 'white'

          // borderColor: 'white',
          // borderWidth: 2,
          tickLength: 10,
          // tickBorderDash: [3, 10],
          // tickBorderDashOffset: 50,

          // drawBorder: false,
        },
        border:{
          display: false,
          dash: [8, 10],
          
          // borderColor: 'white',
        },
        ticks: {
          color: '#F3F3F3',
          // padding: 10,
          // min: 100
          font: {
            size: 12,
            family: 'Lato',
            weight: 400,
          },
        },
        // position: 'left',
        // tickBorderDashOffset: 1
        // position:{
        //   x: 0
        //  }
      }
    },
    // labels: {
    //   fontColor: '#F3F3F3'
    // },
  }