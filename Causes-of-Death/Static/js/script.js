// var svgWidth = 960;
// var svgHeight = 500;
// // Define the chart's margins as an object
// var margin = {
//     top: 60,
//     right: 60,
//     bottom: 60,
//     left: 60
// };
// var chartWidth = svgWidth - margin.left - margin.right;
// var chartHeight = svgHeight - margin.top - margin.bottom;
// // Select body, append SVG area to it, and set its dimensions
// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);
// var chartGroup = svg.append("g")
//     .attr("transform", `translate(${margin.left}, ${margin.top})`);
// var parseTime = d3.timeParse("%Y");
// let request = new XMLHttpRequest;
// request.open('GET', 'https://data.cityofnewyork.us/resource/jb7j-dtam.json', true)
// request.onload = function () {
//     let data = JSON.parse(this.response);
//     if (this.status === 200) {
//         data.forEach(function (d) {
//             year = parseTime(d.year);
//             race = d.race_ethnicity;
//             console.log(year);
//             //return server response as an object with JSON.parse
//         });
//     };
// };
//     request.send();

// var request = new XMLHttpRequest()

// request.open('POST','(https://wonder.cdc.gov/controller/datarequest ', true)

// request.onload = function() {

//     if (this.status === 200) 
//                 {
//                     //return server response as an object with JSON.parse
//                     console.log(JSON.parse(this.responseText));
//         }
                
//     // Begin accessing JSON data here
//   }

//   request.send()



