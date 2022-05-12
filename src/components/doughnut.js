import React from 'react';
// https://react-chartjs-2.netlify.app/examples/doughnut-chart
// modified the function to like piechart.js to get it to work
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Common', 'Rare', 'Ultra Rare'],
  datasets: [
    {
      label: '# of Votes',
      data: [52, 33, 15],
      backgroundColor: [
        '#130D6F',
        '#130D6F',
        '#130D6F',
        
      ],
      borderColor: [
        '#fff',
        '#fff',
        '#fff',
        
      ],
      borderWidth: 10,
    },
  ],
};

const DoughnutChart = () => (
    <>
      <div className="header">
        <h1 className="title">Doughnut Charts</h1>
        <div className="links">
          <a
            className="btn btn-gh"
            href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Pie.js"
          >
            Github Source
          </a>
        </div>
      </div>
      <Doughnut data={data} />
    </>
  )
  
  export default DoughnutChart