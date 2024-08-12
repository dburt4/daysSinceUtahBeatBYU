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
			<img id="main-img" alt="" src="https://dburtdevtest.yul1.qualtrics.com/ControlPanel/Graphic.php?IM=IM_vNuxA9VSAxTQ7dK"/>
    </div>
  );
}

export default App;
