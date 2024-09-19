<template>
  <div>
    {{ time }} : {{ ip }}
    <canvas id="chartRam"></canvas> 
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "chartRam",
  props: [
			'time',
      'ip',
		],
  mounted() {
    const ctx = document.getElementById("chartRam");

    const myChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Còn lại", "Đã sử dụng"],
        datasets: [
          {
            label: "Thông tin sử dụng",
            data: [40, 60],
            backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
            hoverOffset: 3,
          },
        ],
      },
      plugins: [
        {
          id: "text",
          beforeDraw: function (chart, a, b) {
            var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = "75%",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
    });
  },
};
</script>