am5.ready(function() {

    var root2 = am5.Root.new("chartdiv2");

     // 🔹 حذف لوگوی amCharts
     root2._logo.dispose();
  
  
    root2.setThemes([
      am5themes_Animated.new(root2)
    ]);
  
    var chart2 = root2.container.children.push(am5xy.XYChart.new(root2, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    }));
  
    var xAxis2 = chart2.xAxes.push(am5xy.CategoryAxis.new(root2, {
      categoryField: "year",
      renderer: am5xy.AxisRendererX.new(root2, {})
    }));
  
    var yAxis2 = chart2.yAxes.push(am5xy.ValueAxis.new(root2, {
      renderer: am5xy.AxisRendererY.new(root2, {})
    }));
  
    var series2 = chart2.series.push(am5xy.ColumnSeries.new(root2, {
      name: "Revenue",
      xAxis: xAxis2,
      yAxis: yAxis2,
      valueYField: "value",
      categoryXField: "year"
    }));
  
    var data2 = [
      { year: "2025", value: 150 }
    ];
  
    xAxis2.data.setAll(data2);
    series2.data.setAll(data2);
  
    series2.appear(1000);
    chart2.appear(1000, 100);
  
  });




