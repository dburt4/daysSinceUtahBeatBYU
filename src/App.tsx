import React from 'react';
import './App.css';

function App() {
  const date1 = new Date('2019-08-29T22:00:00');
	const date2 = new Date();
	const diff = Math.abs(date1.getTime() - date2.getTime());
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return (
    <div className="App">
      <h2 id="title">It has been {diffDays} days since Utah beat BYU</h2>
			<img id="main-img" alt="" src="https://universe.byu.edu/wp-content/uploads/2022/08/21FTB-vs-Utah-01958-1920x1280.jpg"/>
    </div>
  );
}

export default App;
