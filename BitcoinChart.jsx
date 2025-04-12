
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BitcoinChart = () => {
  const [chartData, setChartData] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  const fetchBitcoinData = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly'
      );
      const data = await res.json();
      const prices = data.prices.map(item => ({
        x: new Date(item[0]),
        y: item[1]
      }));
      setChartData({
        labels: prices.map(p => p.x.toLocaleTimeString()),
        datasets: [
          {
            label: 'Bitcoin Price (USD)',
            data: prices.map(p => p.y),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            fill: true,
            tension: 0.4
          }
        ]
      });

      // Get current price
      const priceRes = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const priceData = await priceRes.json();
      setCurrentPrice(priceData.bitcoin.usd);
    } catch (err) {
      console.error('Error fetching Bitcoin data:', err);
    }
  };

  useEffect(() => {
    fetchBitcoinData();
    const interval = setInterval(fetchBitcoinData, 60000); // update every 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Bitcoin Live Chart</h2>
      {currentPrice && <p className="text-lg text-green-500 mb-4">Current Price: ${currentPrice}</p>}
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <p className="text-gray-600 dark:text-gray-300">Loading chart...</p>
      )}
    </div>
  );
};

export default BitcoinChart;
