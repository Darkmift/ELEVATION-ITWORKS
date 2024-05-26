export type ChartData<T> = {
  labels: string[];
  datasets: {
    label: string;
    data: T[];
    backgroundColor: string;
    maxBarThickness: number;
  }[];
};

export type ChartOptions = {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      display: boolean;
    };
    tooltip: {
      enabled: boolean;
    };
    title: {
      display: boolean;
    };
  };
  scales: {
    x: {
      display: boolean;
      grid: {
        display: boolean;
      };
      ticks: {
        color: string;
        font: {
          size: number;
          family: string;
        };
      };
    };
    y: {
      beginAtZero: boolean;
      grid: {
        drawBorder: boolean;
        color: string;
        borderDash: number[];
        drawTicks: boolean;
      };
      ticks: {
        stepSize: number;
        color: string;
        font: {
          size: number;
          family: string;
        };
        padding: number;
      };
      border: {
        color: string;
      };
    };
  };
};