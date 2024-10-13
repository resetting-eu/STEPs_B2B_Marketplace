        // "use strict";
        /*-----------------------------------------------texturalTrianglePlot----------------------------------------------*/
        //import {barycentric, ternaryPlot} from "@julesblm/d3-ternary"
        var { barycentric, ternaryPlot } = d3;
      
        var values;
      
        var graph_width = 600;//600;
        var graph_height = graph_width;
        var graph_radius = graph_width / 2;
      
        var ternarySoil = barycentric()
          .a((d) => d.silt)
          .b((d) => d.clay)
          .c((d) => d.sand);
      
        var _textureTernaryPlot = ternaryPlot(ternarySoil)
          .radius(graph_radius)
          .domains([
            [1, 0],
            [1, 0],
            [1, 0],
          ])
          .labels(["Silt Separate, %", "Clay Separate, %", "Sand Separate, %"])
          .labelAngles([60, -60, 0])
          .labelOffsets([100, 100, 100])
          .tickAngles([-60, 0, 60])
          .tickTextAnchors(["start", "end", "start"]);
      
        var graph_yOffset = graph_height / 2 + _textureTernaryPlot.radius() / 4;
      
        var _divisions = [
          {
            texture: "Silt",
            color_val: "#35d030",
            values: [
              { clay: 0, sand: 20, silt: 80 },
              { clay: 12, sand: 8, silt: 80 },
              { clay: 12, sand: 0, silt: 88 },
              { clay: 0, sand: 0, silt: 100 },
              { clay: 0, sand: 20, silt: 80 },
            ],
          },
      
          {
            texture: "Silt loam",
            color_val: "#82d901",
            values: [
              { clay: 0, sand: 20, silt: 80 },
              { clay: 0, sand: 50, silt: 50 },
              { clay: 27, sand: 23, silt: 50 },
              { clay: 27, sand: 0, silt: 73 },
              { clay: 12, sand: 0, silt: 88 },
              { clay: 12, sand: 8, silt: 80 },
              { clay: 0, sand: 20, silt: 80 },
            ],
          },
          {
            texture: "Loam",
            color_val: "#cea600",
            values: [
              { clay: 7, sand: 43, silt: 50 },
              { clay: 7, sand: 52, silt: 41 },
              { clay: 20, sand: 52, silt: 28 },
              { clay: 27, sand: 45, silt: 28 },
              { clay: 27, sand: 23, silt: 50 },
              { clay: 7, sand: 43, silt: 50 },
            ],
          },
          {
            texture: "Sand",
            color_val: "#ffc88b",
            values: [
              { clay: 0, sand: 100, silt: 0 },
              { clay: 10, sand: 90, silt: 0 },
              { clay: 0, sand: 85, silt: 15 },
              { clay: 0, sand: 100, silt: 0 },
            ],
          },
          {
            texture: "Loamy sand",
            color_val: "#fcc2ca",
            values: [
              { clay: 10, sand: 90, silt: 0 },
              { clay: 15, sand: 85, silt: 0 },
              { clay: 0, sand: 70, silt: 30 },
              { clay: 0, sand: 85, silt: 15 },
              { clay: 10, sand: 90, silt: 0 },
            ],
          },
          {
            texture: "Sandy loam",
            color_val: "#f8c7e9",
            values: [
              { clay: 20, sand: 80, silt: 0 },
              { clay: 20, sand: 52, silt: 28 },
              { clay: 7, sand: 52, silt: 41 },
              { clay: 7, sand: 43, silt: 50 },
              { clay: 0, sand: 50, silt: 50 },
              { clay: 0, sand: 70, silt: 30 },
              { clay: 15, sand: 85, silt: 0 },
              { clay: 20, sand: 80, silt: 0 },
            ],
          },
          {
            texture: "Clay loam",
            color_val: "#bce83b",
            values: [
              { clay: 40, sand: 45, silt: 15 },
              { clay: 40, sand: 20, silt: 40 },
              { clay: 27, sand: 20, silt: 53 },
              { clay: 27, sand: 45, silt: 28 },
              { clay: 40, sand: 45, silt: 15 },
            ],
          },
          {
            texture: "Sandy clay loam",
            color_val: "#fc829b",
            values: [
              { clay: 35, sand: 65, silt: 0 },
              { clay: 35, sand: 45, silt: 20 },
              { clay: 27, sand: 45, silt: 28 },
              { clay: 20, sand: 52, silt: 28 },
              { clay: 20, sand: 80, silt: 0 },
              { clay: 35, sand: 65, silt: 0 },
            ],
          },
          {
            texture: "Sandy clay",
            color_val: "#fa2302",
            values: [
              { clay: 55, sand: 45, silt: 0 },
              { clay: 35, sand: 45, silt: 20 },
              { clay: 35, sand: 65, silt: 0 },
              { clay: 55, sand: 45, silt: 0 },
            ],
          },
          {
            texture: "Clay",
            color_val: "#f4f988",
            values: [
              { clay: 100, sand: 0, silt: 0 },
              { clay: 55, sand: 45, silt: 0 },
              { clay: 40, sand: 45, silt: 15 },
              { clay: 40, sand: 20, silt: 40 },
              { clay: 60, sand: 0, silt: 40 },
              { clay: 100, sand: 0, silt: 0 },
            ],
          },
          {
            texture: "Silty clay",
            color_val: "#a0e1c0",
            values: [
              { clay: 60, sand: 0, silt: 40 },
              { clay: 40, sand: 20, silt: 40 },
              { clay: 40, sand: 0, silt: 60 },
              { clay: 60, sand: 0, silt: 40 },
            ],
          },
          {
            texture: "Silty clay loam",
            color_val: "#5ed7a7",
            values: [
              { clay: 40, sand: 0, silt: 60 },
              { clay: 40, sand: 20, silt: 40 },
              { clay: 27, sand: 20, silt: 53 },
              { clay: 27, sand: 0, silt: 73 },
              { clay: 40, sand: 0, silt: 60 },
            ],
          },
        ];
      
        var _ternaryDivisions = _divisions.map((d) => {
          // add centroid for label position to each division
          var centroid = d3.polygonCentroid(d.values.map(_textureTernaryPlot));
          var coords = d.values.map(_textureTernaryPlot);
          var colors = d.color_val;//.map(_textureTernaryPlot);
          var center = _textureTernaryPlot.invert(centroid);
      
          return {
            ...d,
            coords,
            centroid,
            center: { clay: center[0], sand: center[1], silt: center[2] },
          };
        });
        var _closedLine = d3.line().curve(d3.curveLinearClosed);
      
        var _gridLines = _textureTernaryPlot
          .gridLines()
          .map((axisGrid) => axisGrid.map(d3.line()).join(" "));
      
        var _format =
        d3.format(".2%");
function mainHorizCaller(targetEl) {
  
  // filter out all svg not cntaining 'chart_horiz'
  var svgArray = Array.from(targetEl.getElementsByTagName("svg")).filter(
    (svg) => svg.id.includes("chart_horiz")
  );
  for (let horiz of svgArray) {
    var horizName = horiz.id.split("_")[horiz.id.split("_").length - 1];
    var svg = d3.select(horiz);
    mainHoriz(svg, horizName);
  }
}
function mainHoriz(svg, horizName) {
  // var svg = d3.select("#chart_" + horizName);
  // console.log("#3");
  // console.log(horizName);
  // console.log(svg);
  var chart = svg
    .attr("id", "chart_" + horizName)
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("transform", `translate(${graph_width / 2} ${graph_yOffset})`);

  var defs = svg.append("defs");

  defs
    .append("clipPath")
    .attr("id", "trianglePath_" + horizName)
    .append("path")
    .attr("d", _textureTernaryPlot.triangle());

  defs
    .append("marker")
    .attr("id", "arrow_" + horizName)
    .attr("markerWidth", "10")
    .attr("markerHeight", "10")
    .attr("refX", "0")
    .attr("refY", "3")
    .attr("orient", "auto")
    .attr("markerUnits", "strokeWidth")
    .append("path")
    .attr("d", "M0,0 L0,6 L9,3 z");

  chart
    .append("g")
    .attr("class", "grid")
    .selectAll("g")
    .data(_gridLines)
    .join("path")
    .attr("d", (d) => d)
    .attr("stroke", "black")
    .attr("stroke-width", 0.5);

  var tickGroup = chart
    .append("g")
    .attr("class", "ternary-ticks")
    .attr("font-size", 10)
    .selectAll("g")
    .data(_textureTernaryPlot.ticks())
    .join("g")
    .attr("class", "axis-ticks")
    .selectAll("g")
    .data((d) => d)
    .join("g")
    .attr("class", "tick")
    .attr("transform", (d) => `translate(${d.position})`)
    .call((g) =>
      g
        .append("text")
        .attr("text-anchor", (d) => d.textAnchor)
        .attr("transform", (d) => `rotate(${d.angle})`)
        .attr(
          "dx",
          (d) => (-d.size - 5) * (d.textAnchor === "start" ? -1 : 1)
        )
        .attr("dy", ".5em")
        .text((d) => d.tick)
    )
    .call((g) =>
      g
        .append("line")
        .attr("transform", (d) => `rotate(${d.angle + 90})`)
        .attr("y2", (d) => d.size * (d.textAnchor === "start" ? -1 : 1))
        .attr("stroke", "grey")
    );

  var axisLabelsGroup = chart
    .append("g")
    .attr("class", "axis-labels")
    .append("g")
    .attr("class", "labels")
    .attr("font-size", 16);

  var axisLabelsGroups = axisLabelsGroup
    .selectAll("text")
    .data(_textureTernaryPlot.axisLabels({ center: true }), (d) => d.label)
    .join(
      (enter) => {
        var labelGroup = enter
          .append("g")
          .attr(
            "transform",
            (d, i) => `translate(${d.position})rotate(${d.angle})`
          );

        var axisArrow = labelGroup
          .append("line")
          .attr("stroke", "black")
          .attr("x1", (d, i) => (i === 2 ? 100 : -100))
          .attr("x2", (d, i) => (i === 2 ? -100 : 100))
          .attr("marker-end", "url(#arrow_" + horizName + ")");
          // .attr("marker-end", "url(#arrow_horiz0)");

        var axisLabelText = labelGroup
          .append("text")
          .attr("text-anchor", "middle")
          .attr("stroke", "ghostwhite")
          .attr("stroke-width", 7)
          .attr("paint-order", "stroke")
          .attr("alignment-baseline", "middle")
          .text((d) => d.label);
      },
      (update) =>
        update.attr(
          "transform",
          (d, i) => `translate(${d.position})rotate(${d.angle})`
        )
    );

  chart
    .append("path")
    .attr("d", _textureTernaryPlot.triangle())
    .attr("fill", "none")
    .attr("pointer-events", "all")
    .attr("stroke", "black")
    .attr("stroke-width", "1.2px")
    .call(
      d3
        .drag()
        .on("drag", ({ x, y }) => dragged(x, y))
        .on("start", ({ x, y }) => dragged(x, y))
    );

  // chart
  //   .append("g")
  //   .attr("class", "data")
  //   .attr("clip-path", "url(#trianglePath)")
  //   .selectAll("path")
  //   .data(_ternaryDivisions.map((d) => d.coords))
  //   .join("path")
  //   .attr("d", _closedLine)
  //   .attr("fill", _ternaryDivisions.color_val)
  //   .attr("stroke", "black")
  //   .attr("stroke-width", 2);

  chart
    .append("g")
    .selectAll("text")
    .data(_ternaryDivisions)
    .join("text")
    .attr("x", (d) => d.centroid[0])
    .attr("y", (d) => d.centroid[1])
    .attr("text-anchor", "middle")
    .attr("stroke", "ghostwhite")
    .attr("stroke-width", 5)
    .attr("paint-order", "stroke")
    .attr("alignment-baseline", "middle")
    .attr("onselectstart", "return false;")
    .attr("font-size", 11)
    .text((d) => d.texture);

  /*-------------colors adding------------*/
  // Create a color scale based on your _ternaryDivisions.colors array
  var colorScale = d3.scaleOrdinal()
    .domain(_ternaryDivisions.map((d) => d.coords))
    .range(_ternaryDivisions.map((d) => d.color_val));

  // Append a <g> element for your data
  var dataGroup = chart.append('g')
    .attr('class', 'data')
    .attr('clip-path', 'url(#trianglePath)');

  // Select all paths within the data group
  var paths = dataGroup.selectAll('path')
    .data(_ternaryDivisions.map((d) => d.coords))
    .join('path')
    .attr('d', _closedLine)
    .attr('fill', (d) => colorScale(d)) // Assign a unique color based on the data value
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // Move the data group to the bottom (before other elements)
  chart.node().prepend(dataGroup.node())//.appendChild(dataGroup.node());
  /*-------------colors adding------------*/

  var handle = chart
    .append("circle")
    .attr("id", "drag-handle_" + horizName)
    .attr("fill", "cornflowerblue")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 4);

  handle.append("title").text((d) => d);

  function dragged(x, y) {
    handle.attr("cx", x).attr("cy", y);

    // svg.dispatchEvent(new CustomEvent("input"), { bubbles: true });
    values = _textureTernaryPlot.invert([x, y]);
    console.log(values.map(x => _format(x)));


  var [siltValue, clayValue, sandValue] = values;

  // Calculate percentages
  var total = siltValue + clayValue + sandValue;
  var siltPercentage = ((siltValue / total) * 100).toFixed(2);
  var clayPercentage = ((clayValue / total) * 100).toFixed(2);
  var sandPercentage = ((sandValue / total) * 100).toFixed(2);

  // Update the table cells
  var siltCell = window['res_display_table_' + horizName].rows[1].cells[0];//res_display_table_horiz0.rows[1].cells[0];
  var clayCell = window['res_display_table_' + horizName].rows[1].cells[1];
  var sandCell = window['res_display_table_' + horizName].rows[1].cells[2];

  siltCell.textContent = `${siltPercentage}%`;
  clayCell.textContent = `${clayPercentage}%`;
  sandCell.textContent = `${sandPercentage}%`;



  }

  //values = _textureTernaryPlot.invert([0, 0]);
}
  // mainHoriz0();