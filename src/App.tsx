import React from 'react';
import './App.css';

function App() {
  const date1 = new Date('2019-08-29T07:00:00');
	const date2 = new Date();
  date2.setHours(0, 30, 0, 0); // Set time to 00:30 AM 
	const diff = Math.abs(date1.getTime() - date2.getTime());
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return (
    <div className="App">
      <h2 id="title">It has been {diffDays} days since Utah beat BYU</h2>
			{(() => {
				const images = [
					"https://dburtdevtest.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_vNuxA9VSAxTQ7dK",
					"https://dburtdevtest.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_whtBf9Qhe3a66gB"
				];
				const randomIndex = Math.floor(Math.random() * images.length);
				return <img id="main-img" alt="" src={images[randomIndex]} />;
			})()}
    </div>
  );
}

export default App;
