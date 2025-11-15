
am5.ready(function() {

    // Create root element
    var root = am5.Root.new("chartdiv");
  
    // 🔹 حذف لوگوی amCharts
    root._logo.dispose();
  
    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
  
    // Create chart
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 5,
        paddingRight: 5
      })
    );
  
    // Add cursor
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);
  
    // Create axes
    var xRenderer = am5xy.AxisRendererX.new(root, { 
      minGridDistance: 60,
      minorGridEnabled: true
    });
  
    var xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      })
    );
  
    xRenderer.grid.template.setAll({
      location: 1
    });
  
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      })
    );
  
    // Create series
    var series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country"
      })
    );
  
    series.columns.template.setAll({
      width: am5.percent(120),
      fillOpacity: 0.9,
      strokeOpacity: 0
    });
  
    series.columns.template.adapters.add("fill", (fill, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
  
    series.columns.template.adapters.add("stroke", (stroke, target) => {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
  
    series.columns.template.set("draw", function(display, target) {
      var w = target.getPrivate("width", 0);
      var h = target.getPrivate("height", 0);
      display.moveTo(0, h);
      display.bezierCurveTo(w / 4, h, w / 4, 0, w / 2, 0);
      display.bezierCurveTo(w - w / 4, 0, w - w / 4, h, w, h);
    });
  
    // Set data
    var data = [
      { country: "ابان", value: 0 },
      { country: "مهر", value: 500 },
      { country: "شهریور", value: 1000 },
      { country: "مرداد", value: 1500 },
      { country: "تیر", value: 2000 },
      { country: "خرداد", value: 2500 },
      { country: "اردبهشت", value: 3000 },
      { country: "فروردین", value: 3500 },
    ];
  
    xAxis.data.setAll(data);
    series.data.setAll(data);
  
    // Animate
    series.appear(1000);
    chart.appear(1000, 100);
  
  }); // end am5.ready()


















  
  