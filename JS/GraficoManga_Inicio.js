document.addEventListener('DOMContentLoaded', function () {
    var ChartDOM = document.getElementById('CajaGrafico');
    var myChart = echarts.init(ChartDOM);
    
    fetch('https://angelvilr.github.io/MejoresMangas_2024_API/MejoresMangasJSON.json')
    .then(response => response.json())
    .then(data => {

        data: [{value: 1048, name: 'Random'}]

        let DataManga = data.map((manga) =>{
            return {value: manga.Valor, name: manga.Nombre}
        })
        
        option = {
            title: {
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'horizontal',
              left: 'center',
              padding: [5,0],
              itemGap: 15
            },
            series: [
              {                
                type: 'pie',
                radius: '60%',                
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
                data: DataManga,
                itemStyle: {
                    color: function (params) {
                        const colors = ['#f71818','#f86e0e','#f9e811','#51d100','#1a9551','#08dbcb','#0934f3','#7907dc','#ff2ae3'];
                        return colors[params.dataIndex];
                    }
                }
              }
            ]
          };
          myChart.setOption(option);
          window.addEventListener('resize',function () {
            myChart.resize();
          });
    });
});