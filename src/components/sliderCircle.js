const d3 =require('d3');

export default function () {
    let width = 420;
    let height = 200;

    const r = d3.scaleSqrt()
        .domain([0, 5000])
        .range([0, 100]);

    const c = d3.scaleSequential(d3.interpolateYlOrRd)
        .domain([0,5000])
        ;

    function me(selection) {
        const myData = selection.datum();
        selection.selectAll('circle')
            .data(myData)
            .join('circle')
            .attr('cx', width / 2)
            .attr('cy', height / 2)
            .attr('r', d => r(d))
            .attr('fill', d => c(d));
            // .attr('fill-opacity', 0.5);
    }

    me.width = function (value) {
        if (!arguments.length) return width;
        width = value;
        return me;
    };

    me.height = function (value) {
        if (!arguments.length) return height;
        height = value;
        return me;
    };

    return me;
}