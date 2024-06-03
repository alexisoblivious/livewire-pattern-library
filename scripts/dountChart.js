// Seed data to populate the donut pie chart
var donutData = [
    {
      label: "Cooking",
      value: 4,
    },
    {
      label: "Gaming",
      value: 5,
    },
    {
      label: "Sports",
      value: 13,
    },
    {
      label: "Childrens",
      value: 10,
    },
    {
      label: "Entertainment",
      value: 7,
    },
  ];
  
  // Define size & radius of donut pie chart
  var donutWidth = 450,
    donutHeight = 450,
    donutRadius = Math.min(donutWidth, donutHeight) / 2;
  
  // Define arc colours
  var donutColour = d3.scaleOrdinal(d3.schemeCategory10);
  
  // Define arc ranges
  var arcText = d3.scaleOrdinal().range([0, donutWidth]);
  
  // Determine size of arcs
  var donutarc = d3
    .arc()
    .innerRadius(donutRadius - 130)
    .outerRadius(donutRadius - 10);
  
  // Create the donut pie chart layout
  var donutpie = d3
    .pie()
    .value(function (d) {
      return d["value"];
    })
    .sort(null);
  
  // Append SVG attributes and append g to the SVG
  var donutsvg = d3
    .select("#donutChartContainer")
    .attr("width", donutWidth)
    .attr("height", donutHeight)
    .append("g")
    .attr("transform", "translate(" + donutRadius + "," + donutRadius + ")");
  
  // Define inner circle
  donutsvg
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 100)
    .attr("fill", "#fff");
  
  // Calculate SVG paths and fill in the colours
  var donutG = donutsvg
    .selectAll(".arc")
    .data(donutpie(donutData))
    .enter()
    .append("g")
    .attr("class", "arc")
  
  
  // Append the path to each g
  donutG.append("path")
    .attr("d", donutarc)
    .attr("fill", function (d, i) {
      return donutColour(i);
    });
  
  // Append text labels to each arc
  donutG.append("text")
    .attr("transform", function (d) {
      return "translate(" + donutarc.centroid(d) + ")";
    })
    .attr("dy", ".35em")
    .style("text-anchor", "middle")
    .attr("fill", "#fff")
    .text(function (d, i) {
      return donutData[i].label;
    });
  
    donutG.selectAll(".arc text").call(wrap, arcText.range([0, donutWidth]));
  
  // Append text to the inner circle
  donutsvg
    .append("text")
    .attr("dy", "-0.5em")
    .style("text-anchor", "middle")
    .attr("class", "inner-circle")
    .attr("fill", "#36454f")
    .text(function (d) {
      return "View";
    });
  
  donutsvg
    .append("text")
    .attr("dy", "1.0em")
    .style("text-anchor", "middle")
    .attr("class", "inner-circle")
    .attr("fill", "#36454f")
    .text(function (d) {
      return "By Genre";
    });
  
  // Wrap function to handle labels with longer text
  function wrap(text, width) {
    text.each(function () {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", 0)
          .attr("y", y)
          .attr("dy", dy + "em");
      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > 90) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }
  