function main7() {
"use strict";
// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
    width_horiz = 460 - margin.left - margin.right,
    height_horiz = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg_horiz = d3.select("#soil_horiz_div")
  .append("svg")
    .attr("width", width_horiz + margin.left + margin.right)
    .attr("height", height_horiz + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

const str_csv_data ="group,Nitrogen,normal,stress\nbanana,12,1,13\npoacee,6,6,33\nsorgho,11,28,12\ntriticum,19,6,1\n"
// Parse the Data
var data = d3.csvParse(str_csv_data);

//d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv", function(data) {
  function main_horiz() {
  // List of subgroups = header of the csv files = soil condition here
  var subgroups_horiz = data.columns.slice(1);
// console.log(subgroups_horiz)
  // List of groups = species here = value of the first column called group -> I show them on the X axis
  var groups_horiz = Array.from(new Set(data.map(function(d) { return d.group; })));
// console.log(groups_horiz)
  // Add X axis
  var x = d3.scaleBand()
      .domain(groups_horiz)
      .range([0, width_horiz])
      .padding([0.2])
  svg_horiz.append("g")
    .attr("transform", "translate(0," + height_horiz + ")")
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height_horiz, 0 ]);
  svg_horiz.append("g")
    .call(d3.axisLeft(y));

  // color palette = one color per subgroup
  var color = d3.scaleOrdinal()
    .domain(subgroups_horiz)
    .range(['#e41a1c','#377eb8','#4daf4a']);

  // Normalize the data -> sum of each group must be 100!
  // console.log(data);
  var dataNormalized = []
  data.forEach(function(d){
    // Compute the total
    var tot = 0
    for (var i in subgroups_horiz){ name=subgroups_horiz[i] ; tot += +d[name] }
    // Now normalize
    for (var i in subgroups_horiz){ name=subgroups_horiz[i] ; d[name] = d[name] / tot * 100}
  });

  //stack the data? --> stack per subgroup
  var stackedData = d3.stack()
    .keys(subgroups_horiz)
    (data);

  // Show the bars
  svg_horiz.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .enter().append("g")
      .attr("fill", function(d) { return color(d.key); })
      .selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return x(d.data.group); })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width",x.bandwidth());

};
// Call the main_horiz function to draw the chart
main_horiz();

}