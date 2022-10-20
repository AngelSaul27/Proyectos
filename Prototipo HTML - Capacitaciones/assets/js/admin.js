const ctx = document.getElementById("empresa_grafica_admin");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Empresas Registradas", 
      "Empresas Validadas", 
      "Empresas Sin Validar", 
      "Empresas Activas", 
      "Empresas Con Cursos Activos", 
      "Empresas Con Cursos Finalizados"],
    datasets: [
      {
        label: "Grafica Estadistica de Empresas",
        data: [398, 290, 108, 129, 89, 120],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false
      }
    }
  },
});
const ctx2 = document.getElementById("instructor_grafica_admin");
const myChart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: [
      "Instructores registrados",
      "Instructores con cursos asignados",
      "Instructores sin cursos asignados",
      "Instructores con doble rol",
    ],
    datasets: [
      {
        data: [67,57,10,15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    }
  },
});
