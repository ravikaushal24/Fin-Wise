var ctx = document.getElementById("chart").getContext("2d");

var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Expense",
        data: [
          34500, 33000, 38000, 36000, 28500, 30000, 29000, 29950, 31000, 32000,
          35000, 37899,
        ],
        borderWidth: 2,
        borderColor: "red",
      },
      {
        label: "Revenue",
        data: [
          35000, 35000, 36000, 40000, 45000, 35000, 38000, 39000, 40000, 42000,
          45000, 36000,
        ],
        borderWidth: 2,
        borderColor: "purple",
      },
      {
        label: "Savings",
        data: [
          2000, 1500, 800, 750, 1200, 1500, 1700, 1680, 1790, 1500, 1450, 2000,
        ],
        borderWidth: 2,
        borderColor: "green",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
  },
});
