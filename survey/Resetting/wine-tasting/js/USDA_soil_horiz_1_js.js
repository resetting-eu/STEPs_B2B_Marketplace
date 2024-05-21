// "use strict";
function mainHoriz1() {
  const svg = d3.select("#chart_horiz1");
  const chart = svg
    .attr("id", "chart_horiz1")
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("transform", `translate(${width / 2} ${_yOffset})`);

  const defs = svg.append("defs");

  defs
    .append("clipPath")
    .attr("id", "trianglePath_horiz1")
    .append("path")
    .attr("d", _textureTernaryPlot.triangle());

  defs
    .append("marker")
    .attr("id", "arrow_horiz1")
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

  const tickGroup = chart
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

  const axisLabelsGroup = chart
    .append("g")
    .attr("class", "axis-labels")
    .append("g")
    .attr("class", "labels")
    .attr("font-size", 16);

  const axisLabelsGroups = axisLabelsGroup
    .selectAll("text")
    .data(_textureTernaryPlot.axisLabels({ center: true }), (d) => d.label)
    .join(
      (enter) => {
        const labelGroup = enter
          .append("g")
          .attr(
            "transform",
            (d, i) => `translate(${d.position})rotate(${d.angle})`
          );

        const axisArrow_horiz1 = labelGroup
          .append("line")
          .attr("stroke", "black")
          .attr("x1", (d, i) => (i === 2 ? 100 : -100))
          .attr("x2", (d, i) => (i === 2 ? -100 : 100))
          .attr("marker-end", "url(#arrow_horiz1)");

        const axisLabelText = labelGroup
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
    .attr("font-size", 11)
    .text((d) => d.texture);

  /*-------------colors adding------------*/
  // Create a color scale based on your _ternaryDivisions.colors array
  const colorScale = d3.scaleOrdinal()
    .domain(_ternaryDivisions.map((d) => d.coords))
    .range(_ternaryDivisions.map((d) => d.color_val));

  // Append a <g> element for your data
  const dataGroup = chart.append('g')
    .attr('class', 'data')
    .attr('clip-path', 'url(#trianglePath)');

  // Select all paths within the data group
  const paths = dataGroup.selectAll('path')
    .data(_ternaryDivisions.map((d) => d.coords))
    .join('path')
    .attr('d', _closedLine)
    .attr('fill', (d) => colorScale(d)) // Assign a unique color based on the data value
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

  // Move the data group to the bottom (before other elements)
  chart.node().prepend(dataGroup.node())//.appendChild(dataGroup.node());
  /*-------------colors adding------------*/

  const handle = chart
    .append("circle")
    .attr("id", "drag-handle_horiz1")
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


  const [siltValue, clayValue, sandValue] = values;

  // Calculate percentages
  const total = siltValue + clayValue + sandValue;
  const siltPercentage = ((siltValue / total) * 100).toFixed(2);
  const clayPercentage = ((clayValue / total) * 100).toFixed(2);
  const sandPercentage = ((sandValue / total) * 100).toFixed(2);

  // Update the table cells
  const siltCell = res_display_table_horiz1.rows[1].cells[0];
  const clayCell = res_display_table_horiz1.rows[1].cells[1];
  const sandCell = res_display_table_horiz1.rows[1].cells[2];

  siltCell.textContent = `${siltPercentage}%`;
  clayCell.textContent = `${clayPercentage}%`;
  sandCell.textContent = `${sandPercentage}%`;



  }

  //values = _textureTernaryPlot.invert([0, 0]);
}
  // mainHoriz1();