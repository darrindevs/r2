import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
 labels: ['Taxation', 'Materials', 'Profit', 'Expenses', 'Wages'],
 datasets: [
   {
     label: 'Tax bill',
     data: [25, 20, 8, 12, 34],
   },
 ],
};

const PieChart = () => {
 return (
   <div style={{ width: '750px' }}>
     <Pie data={data} />
   </div>
 );
};

export default PieChart;