export default class BubbleChart {

    // Attributes (you can make those private too)
    width; height;       // Size
    svg; chart; bubbles; // Selections
    data;                // Internal Data

    // Constructor
    constructor(container, width, height) {
        this.width = width;
        this.height = height;

        this.svg = d3.select(container).append('svg')
            .classed('bubblechart', true)
            .attr('width', width).attr('height', height);
        this.chart = this.svg.append('g')
        this.bubbles = this.chart.selectAll('circle.bubble')
    }

    // Private methods
    // data is in the format [[key, value], ...]
    #updateBubbles() {
        this.bubbles = this.bubbles
            .data(this.data, d => d[0])
            .join('circle')
            .classed('bubble', true)
            .attr('cx', (d, i) => (i*40) + 70)
            .attr('cy', d => this.height - d[1] * 10)
            .attr('r', d => Math.max(0, d[1]));
    }

    // Public API

    // The dataset parameter needs to be in a generic format,
    // so that it works for all future data
    // here we assume a [[k, v], ...] format for efficiency
    render(dataset) {
        this.data = dataset;
        this.#updateBubbles();
        return this; // to allow chaining
    }
}
