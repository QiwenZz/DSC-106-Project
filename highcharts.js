Highcharts.chart('linechart', {

    chart: {
      scrollablePlotArea: {
        minWidth: 700
      },
      zoomType: 'x',
      backgroundColor: 'rgba(255, 255, 255, 0.70)'
      
    },
  
    data: {
      csvURL: window.location.origin + '/csv/totalEnrollment.csv'
    },
  
    title: {
      text: null
    },
  
    subtitle: {
      text: null
    },
  
  
    yAxis: [{ // left y axis
      title: {
        text: "Enrollment Number by Gender (millions)"
      }
    }],

    xAxis: [{ // left y axis
      title: {
        text: "Year"
      }
    }],
  
    legend: {
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0
    },
  
    tooltip: {
      shared: true,
      crosshairs: true
    },
  
    plotOptions: {

      series: {
        cursor: 'pointer',
        marker: {
          lineWidth: 1
        }
      },
    },
  
    series: [{
      name: 'Male Number',
      lineWidth: 4,
      marker: {
        radius: 5
      },
      color: '#1493d2'
    }, {
      name: 'Female Number',
      lineWidth: 4,
      marker: {
        radius: 5
      },
      color: '#f8991c'
    }]
  });
  
create1970()
function create2015(){
  Highcharts.chart('pie-chart1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'pie',
        maxWidth:500,
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
        height: 300,
        

    },
    style:{
      backgroundColor: 'transparent'
    },
    title: {
        text: 'Population Percentage in Developed/Developing Countries in 2015',
        style:{
          fontSize:'15px',
          fontWeight: 'bold'

        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  textOutline: 0
                },
                borderColor: 'black'
            }
        }
    },
    responsive: {  
        rules: [{  
          condition: {  
            maxWidth: 500  
          },  
          chartOptions: {  
            legend: {  
              enabled: false  
            }  
          }  
        }]  
      },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Developed Country',
            y: 0.179,
            color: '#1493d2'
        }, {
            name: 'Developing Country',
            y: 0.821,
            color: '#f8991c'
        }]
    }]
});


Highcharts.chart('pie-chart2', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Tertiary Education Enrollment Population By Developed or Developing Country in 2015',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
          }
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Developed Countries',
          y: 24.48,
          color: '#1493d2'

      }, {
          name: 'Developing Countries',
          y: 75.52,
          color: '#f8991c'

      }]
  }]
});

Highcharts.chart('pie-chart3', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Population By High/Middle/Low Income Country in 2015',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
          }
      }
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Low Income Countries',
          y: 8.73,

      }, {
          name: 'Middle Income Countries',
          y: 75.19

      },{
          name: 'High Income Countries',
          y: 16.08
    }]
  }]
});
Highcharts.chart('pie-chart4', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Tertiary Education Enrollment Population By High/Middle/Low Income Country in 1970',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
          }
      }
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Low Income Countries',
          y: 2.1,

      }, {
          name: 'Middle Income Countries',
          y: 72.74,

      },{
          name: 'High Income Countries',
          y: 25.16
    }]
  }]
});


}

function create1970(){
  Highcharts.chart('pie-chart1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.60)',
    },
    title: {
        text: 'Population Percentage in Developed/Developing Countries in 1970',
        style:{
          fontSize:'15px',
          fontWeight: 'bold'

        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  textOutline: 0
                },
            }
        }
    },
    responsive: {  
        rules: [{  
          condition: {  
            maxWidth: 500  
          },  
          chartOptions: {  
            legend: {  
              enabled: false  
            }  
          }  
        }]  
      },
    series: [{
        name: 'Percentage',
        colorByPoint: true,
        data: [{
            name: 'Developed Country',
            y: 0.258,
            color: '#1493d2'
        }, {
            name: 'Developing Country',
            y: 0.742,
            color: '#f8991c'
        }]
    }]
});


Highcharts.chart('pie-chart2', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Tertiary Education Enrollment Population By Developed or Developing Country in 1970',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
          }
      }
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Developed Countries',
          y: 30.2,
          color: '#1493d2'

      }, {
          name: 'Developing Countries',
          y: 69.8,
          color: '#f8991c'

      }]
  }]
});

Highcharts.chart('pie-chart3', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Population By High/Middle/Low Income Country in 1970',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
          }
      }
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Low Income Countries',
          y: 5.3,

      }, {
          name: 'Middle Income Countries',
          y: 71.7

      },{
          name: 'High Income Countries',
          y: 23.0
    }]
  }]
});
Highcharts.chart('pie-chart4', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 300,
      backgroundColor: 'rgba(255, 255, 255, 0.60)',
  },
  title: {
      text: 'Tertiary Education Enrollment Population By High/Middle/Low Income Country in 1970',
      style:{
        fontSize:'15px',
        fontWeight: 'bold'
        
      }
  },
  responsive: {  
    rules: [{  
      condition: {  
        maxWidth: 500  
      },  
      chartOptions: {  
        legend: {  
          enabled: false  
        }  
      }  
    }]  
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                textOutline: 0
              },
              borderWidth: 0
          }
      }
  },
  series: [{
      name: 'Percentage',
      colorByPoint: true,
      data: [{
          name: 'Low Income Countries',
          y: 1.2,

      }, {
          name: 'Middle Income Countries',
          y: 45.3,

      },{
          name: 'High Income Countries',
          y: 53.5
    }]
  }]
});

}