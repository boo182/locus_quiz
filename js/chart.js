class ChartDataGenerator {
  _graph = {
    type: "doughnut",
    data: {
      labels: ["Locus intérieur", "Locus Extérieur"],
      datasets: [
        {
          label: " ",
          data: [5, 1],
          backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          hoverOffset: 4,
        },
      ],
    },
  };

  buildGraph(datas) {
    this._datas = datas;
    this._graph.data.datasets[0].data = [datas.in, datas.out];
    return this.graph;
  }

  get graph() {
    return this._graph;
  }
}

const chartDataGenerator = new ChartDataGenerator();
