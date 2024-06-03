const width = 600;
const height = 400;
const margin = 40;

//1. Line Graphs
{
  let svg1 = d3
    .select("#lineGraphContainer")
    .append("svg")
    .attr("width", width + 2 * margin)
    .attr("height", height + 2 * margin)
    .append("g")
    .attr("transform", "translate(" + 2 * margin + "," + margin + ")");
  //Title
  svg1
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .text("SAMPLE - Number of Views per Year for 5 Youtubers")
    .style("font-size", 20);

  //Legend
  let legend1 = d3
    .select("#lineGraphContainer")
    .append("svg")
    .attr("width", 200)
    .attr("height", 400)
    .append("g")
    .attr("transform", "translate(" + 2 * margin + "," + margin + ")");
  legend1
    .append("text")
    .text("LEGEND")
    .attr("text-anchor", "middle")
    .style("text-decoration", "underline");

  legend1
    .append("text")
    .text("Youtuber 1")
    .attr("y", height / 15)
    .attr("text-anchor", "middle")
    .style("fill", "var(--lw-red)");
  legend1
    .append("rect")
    .attr("x", 50)
    .attr("y", height / 15 - 10)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", "var(--lw-red)");
  legend1
    .append("text")
    .text("Youtuber 2")
    .attr("y", (2 * height) / 15)
    .attr("text-anchor", "middle")
    .style("fill", "var(--lw-blue)");
  legend1
    .append("rect")
    .attr("x", 50)
    .attr("y", (2 * height) / 15 - 10)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", "var(--lw-blue)");
  legend1
    .append("text")
    .text("Youtuber 3")
    .attr("y", (3 * height) / 15)
    .attr("text-anchor", "middle")
    .style("fill", "var(--lw-yellow-dark)");
  legend1
    .append("rect")
    .attr("x", 50)
    .attr("y", (3 * height) / 15 - 10)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", "var(--lw-yellow-dark)");
  legend1
    .append("text")
    .text("Youtuber 4")
    .attr("y", (4 * height) / 15)
    .attr("text-anchor", "middle")
    .style("fill", "green");
  legend1
    .append("rect")
    .attr("x", 50)
    .attr("y", (4 * height) / 15 - 10)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", "green");
  legend1
    .append("text")
    .text("Youtuber 5")
    .attr("y", (5 * height) / 15)
    .attr("text-anchor", "middle")
    .style("fill", "purple");
  legend1
    .append("rect")
    .attr("x", 50)
    .attr("y", (5 * height) / 15 - 10)
    .attr("width", 10)
    .attr("height", 10)
    .style("fill", "purple");

  //Years Axis
  const x1 = d3
    .scaleTime()
    .domain([new Date(2015, 0), new Date(2023, 0)])
    .range([margin, width - margin]);
  svg1
    .append("g")
    .attr("transform", "translate(0," + (height - margin) + ")")
    .call(d3.axisBottom(x1));
  svg1
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + 10)
    .text("Years");

  //Number of Views Axis
  const y1 = d3
    .scaleLinear()
    .domain([0, 100000])
    .range([height - margin, margin]);
  svg1
    .append("g")
    .attr("transform", "translate(" + margin + ", 0)")
    .call(d3.axisLeft(y1));
  svg1
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", -margin - 50)
    .attr("y", -margin + 0)
    .attr("transform", "rotate(-90)")
    .text("Number of Views per Year");

  //Data
  const data1 = [
    {
      Year: "2015",
      Youtuber1: 14020,
      Youtuber2: 24020,
      Youtuber3: 53029,
      Youtuber4: 54767,
      Youtuber5: 1000,
    },
    {
      Year: "2016",
      Youtuber1: 20312,
      Youtuber2: 24312,
      Youtuber3: 54029,
      Youtuber4: 44567,
      Youtuber5: 4753,
    },
    {
      Year: "2017",
      Youtuber1: 18750,
      Youtuber2: 24750,
      Youtuber3: 59181,
      Youtuber4: 44568,
      Youtuber5: 10435,
    },
    {
      Year: "2018",
      Youtuber1: 39674,
      Youtuber2: 53674,
      Youtuber3: 62829,
      Youtuber4: 75434,
      Youtuber5: 14536,
    },
    {
      Year: "2019",
      Youtuber1: 54089,
      Youtuber2: 58029,
      Youtuber3: 63019,
      Youtuber4: 96745,
      Youtuber5: 32141,
    },
    {
      Year: "2020",
      Youtuber1: 52039,
      Youtuber2: 50039,
      Youtuber3: 65019,
      Youtuber4: 76546,
      Youtuber5: 64145,
    },
    {
      Year: "2021",
      Youtuber1: 59101,
      Youtuber2: 59999,
      Youtuber3: 68290,
      Youtuber4: 43256,
      Youtuber5: 72341,
    },
    {
      Year: "2022",
      Youtuber1: 62019,
      Youtuber2: 43567,
      Youtuber3: 69293,
      Youtuber4: 64678,
      Youtuber5: 85252,
    },
    {
      Year: "2023",
      Youtuber1: 45039,
      Youtuber2: 78902,
      Youtuber3: 71289,
      Youtuber4: 73455,
      Youtuber5: 95622,
    },
  ];

  //Lines
  let group1 = svg1.append("g");
  //Line 1
  const line1 = d3.line(
    (d) => x1(new Date(d.Year)),
    (d) => y1(d.Youtuber1)
  );
  group1
    .append("path")
    .attr("d", line1(data1))
    .attr("stroke", "var(--lw-red)")
    .attr("stroke-width", 2)
    .attr("fill", "none");
  //Line2
  const line2 = d3.line(
    (d) => x1(new Date(d.Year)),
    (d) => y1(d.Youtuber2)
  );
  group1
    .append("path")
    .attr("d", line2(data1))
    .attr("stroke", "var(--lw-blue)")
    .attr("stroke-width", 2)
    .attr("fill", "none");
  //Line3
  const line3 = d3.line(
    (d) => x1(new Date(d.Year)),
    (d) => y1(d.Youtuber3)
  );
  group1
    .append("path")
    .attr("d", line3(data1))
    .attr("stroke", "var(--lw-yellow-dark)")
    .attr("stroke-width", 2)
    .attr("fill", "none");
  //Line4
  const line4 = d3.line(
    (d) => x1(new Date(d.Year)),
    (d) => y1(d.Youtuber4)
  );
  group1
    .append("path")
    .attr("d", line4(data1))
    .attr("stroke", "green")
    .attr("stroke-width", 2)
    .attr("fill", "none");
  //Line5
  const line5 = d3.line(
    (d) => x1(new Date(d.Year)),
    (d) => y1(d.Youtuber5)
  );
  group1
    .append("path")
    .attr("d", line5(data1))
    .attr("stroke", "purple")
    .attr("stroke-width", 2)
    .attr("fill", "none");

  //Dots
  let group2 = svg1.append("g");
  group2
    .selectAll("g")
    .data(data1)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x1(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y1(d.Youtuber1);
    })
    .attr("r", 3)
    .style("fill", "var(--lw-red)");
  group2
    .selectAll("g")
    .data(data1)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x1(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y1(d.Youtuber2);
    })
    .attr("r", 3)
    .style("fill", "var(--lw-blue)");
  group2
    .selectAll("g")
    .data(data1)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x1(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y1(d.Youtuber3);
    })
    .attr("r", 3)
    .style("fill", "var(--lw-yellow-dark)");
  group2
    .selectAll("g")
    .data(data1)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x1(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y1(d.Youtuber4);
    })
    .attr("r", 3)
    .style("fill", "green");
  group2
    .selectAll("g")
    .data(data1)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      return x1(new Date(d.Year));
    })
    .attr("cy", (d) => {
      return y1(d.Youtuber5);
    })
    .attr("r", 3)
    .style("fill", "purple");
}

//2. Bar Graphs
{
  //Single Bar Graph
  {
    let svg = d3
      .select("#barGraphContainer")
      .append("svg")
      .attr("width", width + 2 * margin)
      .attr("height", height + 2 * margin)
      .append("g")
      .attr("transform", "translate(" + 2 * margin + "," + margin + ")");

    //Title
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .text("SAMPLE - Number of Popular Youtubers per Category")
      .style("font-size", 20);

    //X Axis - Genres
    const x = d3
      .scaleBand()
      .domain(["Cooking", "Gaming", "Entertainment", "Childrens", "Sports"])
      .range([margin, width - margin]);
    svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(d3.axisBottom(x));
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3
      .scaleLinear()
      .domain([0, 1000])
      .range([height - margin, margin]);
    svg
      .append("g")
      .attr("transform", "translate(" + margin + ", 0)")
      .call(d3.axisLeft(y));
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", -2.5 * margin)
      .attr("y", -margin / 2)
      .attr("transform", "rotate(-90)")
      .text("Number of Youtubers");

    //Data
    const data = [
      { Genre: "Cooking", Youtubers: 350 },
      { Genre: "Gaming", Youtubers: 400 },
      { Genre: "Entertainment", Youtubers: 500 },
      { Genre: "Childrens", Youtubers: 450 },
      { Genre: "Sports", Youtubers: 200 },
    ];

    //Bars and Values
    const barWidth = 80; //this can change
    const group = svg.append("g");
    //Bars
    group
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Genre) + x.step() / 2 - barWidth / 2)
      .attr("y", (d) => y(d.Youtubers) - height)
      .attr("height", (d) => height - margin - y(d.Youtubers))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red)")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
        d3.select("#barGraph-" + d.Genre).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
        d3.select("#barGraph-" + d.Genre).style("fill", "transparent");
      });
    //Values
    group
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (d) => x(d.Genre) + x.step() / 2)
      .attr("y", (d) => y(d.Youtubers) - height - 10)
      .attr("id", (d, i) => "barGraph-" + d.Genre)
      .classed("valueIndicator", true)
      .text((d) => d.Youtubers)
      .style("fill", "white");
  }

  //Grouped Bar Graph 1
  {
    let svg = d3
      .select("#barGraphContainer")
      .append("svg")
      .attr("width", 1.5 * width + 2 * margin)
      .attr("height", height + 2 * margin)
      .append("g")
      .attr("transform", "translate(" + 2 * margin + "," + margin + ")");

    //Title
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (width * 3) / 4)
      .text("SAMPLE - 5 Most Popular Youtubers by Views in Each Genre")
      .style("font-size", 20);

    //X Axis - Genres
    const x = d3
      .scaleBand()
      .domain(["Cooking", "Gaming", "Entertainment", "Childrens", "Sports"])
      .range([margin, 1.5 * width - margin]);
    svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(d3.axisBottom(x));
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (width * 3) / 4)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3
      .scaleLinear()
      .domain([0, 100000])
      .range([height - margin, margin]);
    svg
      .append("g")
      .attr("transform", "translate(" + margin + ", 0)")
      .call(d3.axisLeft(y));
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", -2.5 * margin)
      .attr("y", -margin / 2)
      .attr("transform", "rotate(-90)")
      .text("Number of Views This Year");

    //Data
    const data = [
      {
        Genre: "Cooking",
        Youtuber1: 20381,
        Youtuber2: 48102,
        Youtuber3: 50191,
        Youtuber4: 71920,
        Youtuber5: 83920,
      },
      {
        Genre: "Gaming",
        Youtuber1: 15039,
        Youtuber2: 39101,
        Youtuber3: 50109,
        Youtuber4: 70192,
        Youtuber5: 72819,
      },
      {
        Genre: "Entertainment",
        Youtuber1: 43028,
        Youtuber2: 75930,
        Youtuber3: 81920,
        Youtuber4: 92039,
        Youtuber5: 98209,
      },
      {
        Genre: "Childrens",
        Youtuber1: 27191,
        Youtuber2: 51920,
        Youtuber3: 62910,
        Youtuber4: 80192,
        Youtuber5: 82930,
      },
      {
        Genre: "Sports",
        Youtuber1: 10129,
        Youtuber2: 32019,
        Youtuber3: 41029,
        Youtuber4: 49230,
        Youtuber5: 74930,
      },
    ];

    //Bars
    const barWidth = 20; //this can change (but you need to make the chart width bigger/smaller)
    const group1 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 - barWidth * 2.5
      )
      .attr("y", (d) => y(d.Youtuber1) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber1))
      .attr("width", barWidth)
      .style("fill", "red")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
      });
    const group2 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 - barWidth * 1.25
      )
      .attr("y", (d) => y(d.Youtuber2) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber2))
      .attr("width", barWidth)
      .style("fill", "red")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
      });
    const group3 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Genre) + x.step() / 2 - barWidth / 2)
      .attr("y", (d) => y(d.Youtuber3) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber3))
      .attr("width", barWidth)
      .style("fill", "red")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
      });
    const group4 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 + barWidth * 1.25
      )
      .attr("y", (d) => y(d.Youtuber4) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber4))
      .attr("width", barWidth)
      .style("fill", "red")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
      });
    const group5 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 + barWidth * 2.5
      )
      .attr("y", (d) => y(d.Youtuber5) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber5))
      .attr("width", barWidth)
      .style("fill", "red")
      .on("mouseover", function (event, d) {
        d3.select(this).style("fill", "var(--lw-red-light)");
      })
      .on("mouseleave", function (event, d) {
        d3.select(this).style("fill", "red");
      });
  }

  //Grouped Bar Graph 2
  {
    let svg = d3
      .select("#barGraphContainer")
      .append("svg")
      .attr("width", 1.5 * width + 2 * margin)
      .attr("height", height + 2 * margin)
      .append("g")
      .attr("transform", "translate(" + 2 * margin + "," + margin + ")");

    //Title
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (width * 3) / 4)
      .text("SAMPLE - 5 Most Popular Youtubers by Views in Each Genre");

    //X Axis - Genres
    const x = d3
      .scaleBand()
      .domain(["Cooking", "Gaming", "Entertainment", "Childrens", "Sports"])
      .range([margin, 1.5 * width - margin]);
    svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(d3.axisBottom(x));
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", (width * 3) / 4)
      .attr("y", height + 10)
      .text("Genres");

    //Y Axis - Number of Youtubers
    const y = d3
      .scaleLinear()
      .domain([0, 100000])
      .range([height - margin, margin]);
    svg
      .append("g")
      .attr("transform", "translate(" + margin + ", 0)")
      .call(d3.axisLeft(y));
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("x", -2.5 * margin)
      .attr("y", -margin / 2)
      .attr("transform", "rotate(-90)")
      .text("Number of Views This Year");

    //Data
    const data = [
      {
        Genre: "Cooking",
        Youtuber1: 20381,
        Youtuber2: 48102,
        Youtuber3: 50191,
        Youtuber4: 71920,
        Youtuber5: 83920,
      },
      {
        Genre: "Gaming",
        Youtuber1: 15039,
        Youtuber2: 39101,
        Youtuber3: 50109,
        Youtuber4: 70192,
        Youtuber5: 72819,
      },
      {
        Genre: "Entertainment",
        Youtuber1: 43028,
        Youtuber2: 75930,
        Youtuber3: 81920,
        Youtuber4: 92039,
        Youtuber5: 98209,
      },
      {
        Genre: "Childrens",
        Youtuber1: 27191,
        Youtuber2: 51920,
        Youtuber3: 62910,
        Youtuber4: 80192,
        Youtuber5: 82930,
      },
      {
        Genre: "Sports",
        Youtuber1: 10129,
        Youtuber2: 32019,
        Youtuber3: 41029,
        Youtuber4: 49230,
        Youtuber5: 74930,
      },
    ];

    //Bars
    const barWidth = 20; //this can change (but you need to make the chart width bigger/smaller)
    const group1 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 - barWidth * 2.5
      )
      .attr("y", (d) => y(d.Youtuber1) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber1))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red-lightest)");
    const group2 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 - barWidth * 1.25
      )
      .attr("y", (d) => y(d.Youtuber2) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber2))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red-light)");
    const group3 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.Genre) + x.step() / 2 - barWidth / 2)
      .attr("y", (d) => y(d.Youtuber3) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber3))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red)");
    const group4 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 + barWidth * 1.25
      )
      .attr("y", (d) => y(d.Youtuber4) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber4))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red-dark)");
    const group5 = svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .selectAll("g")
      .data(data)
      .enter()
      .append("rect")
      .attr(
        "x",
        (d) => x(d.Genre) + x.step() / 2 - barWidth / 2 + barWidth * 2.5
      )
      .attr("y", (d) => y(d.Youtuber5) - height)
      .attr("height", (d) => height - margin - y(d.Youtuber5))
      .attr("width", barWidth)
      .style("fill", "var(--lw-red-darkest)");
  }
}

//3. Single Value Charts
{
  //separate width and height values
  const width = 200;
  const height = 200;
  const fontSize = 60;

  {
    //Static Single Values
    {
      //First One
      let svg = d3
        .select("#singleStaticContainer1")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-red)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + fontSize / 4)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
    }
    {
      //Second One
      let svg = d3
        .select("#singleStaticContainer2")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-blue)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + fontSize / 4)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
    }
    {
      //Third One
      let svg = d3
        .select("#singleStaticContainer3")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-yellow)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + fontSize / 4)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
    }
  }

  {
    //Dynamic Single Values
    {
      //First Dynamic
      let svg = d3
        .select("#singleDynamicContainer1")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .attr("class", "col")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-red)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + 0.75 * fontSize)
        .text("+2%")
        .style("fill", "white")
        .style("font-size", fontSize / 3);
    }
    {
      //Second Dynamic
      let svg = d3
        .select("#singleDynamicContainer2")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .attr("class", "col")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-blue)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + 0.75 * fontSize)
        .text("+2%")
        .style("fill", "white")
        .style("font-size", fontSize / 3);
    }
    {
      //Third Dynamic
      let svg = d3
        .select("#singleDynamicContainer3")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .attr("class", "col")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2)
        .style("fill", "var(--lw-yellow)");
      svg
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", height / 2 - 20)
        .style("fill", "black");
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2)
        .text("37")
        .style("fill", "white")
        .style("font-size", fontSize);
      svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height / 2 + 0.75 * fontSize)
        .text("+2%")
        .style("fill", "white")
        .style("font-size", fontSize / 3);
    }
  }
  {
    //Progress Bars
    {
      //First Progress
      let svg = d3
        .select("#singleProgressContainer")
        .append("svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin)
        .attr("class", "col")
        .append("g")
        .attr("transform", "translate(" + margin + "," + margin + ")");
    }
  }
}

//4. Area Charts
{
  let svg = d3
    .select("#areaChartContainer")
    .append("svg")
    .attr("width", width + 2 * margin)
    .attr("height", height + 2 * margin)
    .append("g")
    .attr("transform", "translate(" + 2 * margin + "," + margin + ")");
  //data
  let data = [
    { date: "2023-09-01", views: 456 },
    { date: "2023-09-02", views: 586 },
    { date: "2023-09-03", views: 402 },
    { date: "2023-09-04", views: 356 },
    { date: "2023-09-05", views: 652 },
    { date: "2023-09-06", views: 165 },
    { date: "2023-09-07", views: 245 },
    { date: "2023-09-08", views: 365 },
  ];

  //Title
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .text("SAMPLE - Number of Views per Day on Cute Cat Video")
    .style("font-size", 20);

  //X Axis
  const formatTime = d3.timeFormat("%b %d");
  // const x = d3.scaleUtc(d3.extent(data, d => new Date(d.date)), [margin, width - margin]).nice();
  const x = d3
    .scaleTime()
    .domain([new Date("2023-09-01"), new Date("2023-09-08")])
    .range([margin, width - margin]);
  svg
    .append("g")
    .attr("transform", "translate(0," + (height - margin) + ")")
    .call(
      d3.axisBottom(x).ticks(data.length).tickFormat(formatTime).tickPadding(0)
    );
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + 10)
    .text("Date");

  //Number of Views Axis
  const y = d3
    .scaleLinear()
    .domain([0, 1000])
    .range([height - margin, margin]);
  svg
    .append("g")
    .attr("transform", "translate(" + margin + ", 0)")
    .call(d3.axisLeft(y));
  svg
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", -margin - 50)
    .attr("y", -margin + 20)
    .attr("transform", "rotate(-90)")
    .text("Number of Views per Day");

  //Path
  const area = d3
    .area()
    .x((d) => x(new Date(d.date)) + 1)
    .y0(y(0))
    .y1((d) => y(d.views));
  const group = svg.append("g");

  //Gradient Effect
  const grad = group
    .append("defs")
    .append("linearGradient")
    .attr("id", "grad1")
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "100%")
    .attr("y2", "0%");
  grad
    .append("stop")
    .attr("offset", "0%")
    .style("stop-color", "var(--lw-red-light)");
  grad
    .append("stop")
    .attr("offset", "90%")
    .style("stop-color", "var(--lw-red-dark)");

  //Area Fill
  group.append("path").attr("fill", "url(#grad1)").attr("d", area(data));
}

//5. Scatter Plots
{
  let svg = d3
    .select("#scatterPlotContainer")
    .append("svg")
    .attr("width", width + 2 * margin)
    .attr("height", height + 2 * margin)
    .append("g")
    .attr("transform", "translate(" + margin + "," + margin + ")");

  //Title
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .text("SAMPLE - Relationship Between Number of Likes and Subscribers")
    .style("font-size", 20);

  //Likes Axis (X)
  const x = d3
    .scaleLinear()
    .domain([0, 2200000000 / 10000]) //x 10^5
    .range([margin, width - margin]);

  svg
    .append("g")
    .attr("transform", "translate(0," + (height - margin) + ")")
    .call(d3.axisBottom(x));

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + 10)
    .text("Number of Likes (x 10^5)");

  //Subscribers Axis (Y)
  const y = d3
    .scaleLinear()
    .domain([3000, 230000000 / 10000]) //x 10^5
    .range([height - margin, margin]);

  svg
    .append("g")
    .attr("transform", "translate(" + margin + ", 0)")
    .call(d3.axisLeft(y));

  svg
    .append("text")
    .attr("text-anchor", "end")
    .attr("x", -margin - 50)
    .attr("y", -margin + 20)
    .attr("transform", "rotate(-90)")
    .text("Number of Subscribers (x 10^5)");

  //Get the dots
  (function getDots() {
    //Normally would link to CSV file - but it only seems to work in live server mode
    // let data = await d3.csv("../csv/views-subscribers-data.csv");
    let data = [
      {followers: '220000000', Likes: '1602680172'},
      {followers: '138000000', Likes: '220990134.6'},
      {followers: '137000000', Likes: '174875242.6'},
      {followers: '111000000', Likes: '2191405542'},
      {followers: '98100000', Likes: '1731833461'},
      {followers: '97300000', Likes: '280877652.4'},
      {followers: '97200000', Likes: '235190437.5'},
      {followers: '89400000', Likes: '543800874.3'},
      {followers: '85500000', Likes: '210395355.3'},
      {followers: '83500000', Likes: '146245435.4'},
      {followers: '77000000', Likes: '158230212.5'},
      {followers: '75100000', Likes: '617573972'},
      {followers: '72000000', Likes: '63642295.56'},
      {followers: '69400000', Likes: '39350061.94'},
      {followers: '69300000', Likes: '109283010.7'},
      {followers: '69100000', Likes: '1640737553'},
      {followers: '67300000', Likes: '636497162.1'},
      {followers: '65800000', Likes: '116511691.1'},
      {followers: '62100000', Likes: '37475050.79'} ,
      {followers: '60700000', Likes: '12480195.26'},
      {followers: '58700000', Likes: '17219955'},
      {followers: '57800000', Likes: '244293352.9'},
      {followers: '57300000', Likes: '39953044.15'},
      {followers: '57100000', Likes: '31942735'},
      {followers: '55500000', Likes: '51156331.51'},
      {followers: '53400000', Likes: '182929448'},
      {followers: '52800000', Likes: '135816576.6'},
      {followers: '52600000', Likes: '45500762.85'},
      {followers: '52300000', Likes: '204913414.4'},
      {followers: '52100000', Likes: '97976609.8'},
      {followers: '52000000', Likes: '35849829.85'},
      {followers: '51600000', Likes: '406235612.4'},
      {followers: '51500000', Likes: '44484407.8'},
      {followers: '51300000', Likes: '27470145.64'},
      {followers: '50900000', Likes: '11453139.1'},
      {followers: '49400000', Likes: '25323367.15'},
      {followers: '46900000', Likes: '230841570.4'},
      {followers: '46800000', Likes: '22039543.26'},
      {followers: '45900000', Likes: '641782272.8'},
      {followers: '45900000', Likes: '37371320.82'},
      {followers: '45600000', Likes: '288740569.4'},
      {followers: '45100000', Likes: '937427149.9'},
      {followers: '44700000', Likes: '24257065.2'},
      {followers: '44200000', Likes: '763318297'},
      {followers: '43800000', Likes: '196137065.7'},
      {followers: '43700000', Likes: '36932146.78'},
      {followers: '43300000', Likes: '222616795.2'},
      {followers: '43100000', Likes: '449621753.4'},
      {followers: '43000000', Likes: '5322828.259'},
      {followers: '42300000', Likes: '117320899.9'},
      {followers: '42000000', Likes: '55641776.54'},
      {followers: '41600000', Likes: '138038669.5'},
      {followers: '41300000', Likes: '39269151.6'},
      {followers: '40600000', Likes: '766852538'},
      {followers: '40500000', Likes: '16319224.4'},
      {followers: '40500000', Likes: '155670991.2'},
      {followers: '40400000', Likes: '814895443'},
      {followers: '39800000', Likes: '240442177.4'},
      {followers: '39400000', Likes: '1205009.12'},
      {followers: '39200000', Likes: '5749294.194'},
      {followers: '39000000', Likes: '247337977.2'},
      {followers: '38300000', Likes: '23751378.74'},
      {followers: '38300000', Likes: '167231088.8'},
      {followers: '38200000', Likes: '19334895.6'},
      {followers: '38100000', Likes: '46360335.99'},
      {followers: '37500000', Likes: '156622828.8'},
      {followers: '37500000', Likes: '245579644.7'},
      {followers: '37400000', Likes: '33550305.4'},
      {followers: '37400000', Likes: '18094604'},
      {followers: '37200000', Likes: '18852717'},
      {followers: '36900000', Likes: '240742149.4'},
      {followers: '36800000', Likes: '80346776.67'},
      {followers: '36700000', Likes: '16923109.41'},
      {followers: '36600000', Likes: '188506752.5'},
      {followers: '36300000', Likes: '50988592.12'},
      {followers: '89400000', Likes: '543800874.3'},
      {followers: '85500000', Likes: '210395355.3'},
      {followers: '83500000', Likes: '146245435.4'},
      {followers: '77000000', Likes: '158230212.5'},
      {followers: '75100000', Likes: '617573972'},
      {followers: '72000000', Likes: '63642295.56'},
      {followers: '69400000', Likes: '39350061.94'},
      {followers: '69300000', Likes: '109283010.7'},
      {followers: '69100000', Likes: '1640737553'},
      {followers: '67300000', Likes: '636497162.1'}]
    const group = svg
      .append("g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return x(d.Likes / 10000) + 1;
      })
      .attr("cy", function (d) {
        return y(d.followers / 10000);
      })
      .attr("r", 2)
      .style("fill", "var(--lw-red)");
  })();
}

