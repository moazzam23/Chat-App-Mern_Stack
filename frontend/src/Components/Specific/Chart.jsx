import {
  ArcElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { Last7days } from "../../Lib/Feature";
import { Orange } from "../Constant/Colors";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

const LineOption={
    responsive: true,
    plugins:{
      legend:{
        display:false,
      },
      title:{
        display:false,
      },
    },
    scales:{
      x:{
        grid:{
          display:false,
        },
      },
      y:{
        beginAtZero:true,
        grid:{
          display:false,
        },
      },
    }
}

const labels = Last7days();

const LineChart = ({value=[]}) => {
  const data = {
  
      labels,
    datasets: [{
        data:value,
        backgroundColor:"rgba(255,0,0,0.3)",
        fill:false,
        border:"rgba(255,0,0,0.3)"
    }],
  };

  return <Line data={data} options={LineOption} />;
};


const DoughnutOption={
    responsive:true,
    plugins:{
        legend:{
          display:false,
        },
        title:{
          display:false,
        },
      },
      cutout:90,
      offset:40,
}

const DoughnutChart = ({value=[], labels=[]}) => {
    const data = {
  
        labels,
      datasets: [{
          data:value,
          backgroundColor:["rgba(255,0,0,0.3)","rgba(255,0,0,0.1)"],
          fill:false,
          border:["rgba(255,0,0,0.3)", Orange]
      }],
    };
  
    return<Doughnut style={{zIndex:10}} data={data} options={DoughnutOption} />;
};

export { LineChart, DoughnutChart };
