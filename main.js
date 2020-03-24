
$(function(){
    var myChart = echarts.init(document.getElementById('echarts'));
    var xData = [2000,2005,2010,2015,2020],
        yData = [6,9,8,8,7];
    var option = {
        title: {
            text: 'JavaScript排名变化'
        },
        tooltip: {},
        legend: {
            data:[]
        },
        xAxis: {
            data: xData
        },
        yAxis: {},
        series: [{
            name: '排名',
            type: 'line',
            data: yData
        }]
    };
    var e=$("#excel");
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);  
    return new Handsontable(e.get(0),
    {
        data:[
            ["Java","1","降","-0.01%"],
            ["C","2","升","+2.44%"],
            ["Python","3","升","+1.41%"],
            ["C++","4","降","-2.58%"],
            ["C#","5","升","+2.07%"],
            ["Visual Basic.NET","6","降","-1.17%"],
            ["JavaScript","7","降","-0.85%"]
        ],
        contextMenu:!0,
        manualRowResize:!0,
        colWidths:160,
        rowHeights:40,
        manualColumnResize:!0,
        className: "htCenter htMiddle",
        colHeaders:["语言名称","排名","升或降","变化幅度"],
        rowHeaders:false
    }
    )
})