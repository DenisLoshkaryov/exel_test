import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export default function Charts({ exelObject }) {
  const {
    totalProfit, totalSales, month, profit, sales,
  } = exelObject;

  if (!totalProfit || !sales) return null;

  const data = {
    datasets: [{
      data: [totalProfit, totalSales],
      backgroundColor: ['#6b94d9', '#f4e76b'],
    }],
    labels: [
      'profit',
      'sales',
    ],
  };

  const densityData = {
    label: 'Profit',
    data: profit,
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderWidth: 0,
  };

  const gravityData = {
    label: 'Sales',
    data: sales,
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderWidth: 0,
  };

  const planetData = {
    labels: month,
    datasets: [densityData, gravityData],
  };

  const options = {
    responsive: true,
  };

  return (
    <div className="charts-container">
      <div className="chart-block chart-block-pie">
        <Pie
          data={data}
          options={options}
        />
      </div>
      <div className="chart-block chart-block-bar">
        <Bar
          data={planetData}
          options={options}
        />
      </div>
    </div>
  );
}


Charts.propTypes = {
  exelObject: PropTypes.object,
  totalProfit: PropTypes.string,
  totalSales: PropTypes.string,
  month: PropTypes.array,
  profit: PropTypes.array,
  sales: PropTypes.array,
};