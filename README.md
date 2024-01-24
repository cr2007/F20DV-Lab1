---
layout: default
---

# F20DV Lab 1

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/cr2007/F20DV-Lab1)

## Introduction to D3

- **Name:** Chandrashekhar Ramaprasad ([cr2007](mailto:cr2007@hw.ac.uk))
- **Course:** Data Visualization and Analytics ([**F20DV**](https://curriculum.hw.ac.uk/coursedetails/F20DV?termcode=202324))

---

#### Progress
![50%](https://progress-bar.dev/50)

- [X] [Project Setup](#exercise-project-setup)
- [X] [Let's Make a Bar Chart](#exercise-lets-make-a-bar-chart)
- [X] [Scalable Charts](#exercise-scalable-charts)
- [ ] [Let's Make a Scatter Plot](#exercise-lets-make-a-scatter-plot)
- [ ] Let's Make a Donut Chart
- [ ] Let's Make a Line Chart

---

## Tutorial 1: Web Languages

#### Exercise: Project Setup

[Lab 1 - Tutorial 1](https://cr2007.github.io/F20DV-Lab1/lab1_tutorial1.html)

Successfully created a GitHub repository and added the starter files:
- HTML file
- CSS file (within a `styles` directory)
- JavaScript file (within a `scripts` directory)


<div align="center">
	<a href="https://github.com/cr2007/F20DV-Lab1"><b>Repository Link</b></a> |
	<a href="https://cr2007.github.io/F20DV-Lab1"><b>Deployed Website Link</b></a>
</div>


---
<div align="right">
	<a href="#progress">Back To Top ↥</a>
</div>

## Tutorial 2: D3 Selections

### Exercise: Let's Make a Bar Chart

[Lab 1 - Tutorial 2](https://cr2007.github.io/F20DV-Lab1/lab1_tutorial2.html)

> Inspect the bar associated with the city Ottawa, is there any problems with it? What could be the reason?

There is a problem with the bar associated with the city Ottawa. The bar is not visible because the height of the bar.<br>
The height for the SVG is set to **500px** and the height of the bar is set to **700px**.<br>
This results in the bar being cut off at the top of the SVG.

### Code

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<script>hljs.highlightAll();</script>

<details>
<summary><code>main.js</code></summary>
<pre><code class="language-javascript">'use strict';

import BarChart from './barChart.js';

console.log(`d3.version: ${d3.version}`);

let cities = [
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70},
]

let bar1 = new BarChart('div#bar1', 800, 500);

// This line transforms the cities dataset in the generic format
// that BarChart expects: [[k,v], ...]
// we will explain it further in the next lab

let citiesElevation = cities.map(d => [d.city, d.alt]);

bar1.render(citiesElevation);
</code></pre>
</details>

<details>
<summary><code>barChart.js</code></summary>
<pre><code class="language-javascript">export default class BarChart {
    // Attributes (you can make those private too)
    width; height;    // size
    svg; chart; bars; // selections
    data;             // internal data

    // Constructor
    constructor(container, width, height) {
        this.width = width;
        this.height = height;

        this.svg = d3.select(container).append('svg')
            .classed('barchart', true)
            .attr('width', width).attr('height', height);
        this.chart = this.svg.append('g');
        this.bars = this.chart.selectAll('rect.bar');
    }

    // Private methods
    // data is in the format [[key, value], ...]
    #updateBars() {
        this.bars = this.bars
            .data(this.data, d => d[0])
            .join('rect')
            .classed('bar', true)
            .attr('x', (d, i) => i*40+5)
            .attr('y', d => this.height - d[1]*10)
            .attr('width', 40)
            .attr('height', d => d[1]*10);
    }

    // Public API

    // The dataset parameter needs to be in a generic format,
    // so that it works for all future data
    // here we assume a [[k, v], ...] format for efficiency
    render(dataset) {
        this.data = dataset;
        this.#updateBars();
        return this; // to allow chaining
    }
}
</code></pre>
</details>

<details>
<summary><code>barchart.css</code></summary>
<pre><code class="language-css">svg.barchart {
    fill: #3F94D3;
    stroke: #003C71;
    stroke-width: 2px;
}
</code></pre>
</details>

---
<div align="right">
	<a href="#progress">Back To Top ↥</a>
</div>

##  Tutorial 3: D3 Scales and Axes

[Lab 1 - Tutorial 3](https://cr2007.github.io/F20DV-Lab1/lab1_tutorial3.html)

### Exercise: Scalable Charts

Includes extra attribute for margins in the Bar Chart constructor.

### Exercise: Let's Make a Scatter Plot

---
<div align="right">
	<a href="#progress">Back To Top ↥</a>
</div>
