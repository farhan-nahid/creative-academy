import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  /*  useEffect(() => {
    fetch(fakeData)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); */

  useEffect(() => {
    fetch('./homeServices.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className='App'>
      {data.map((d) => (
        <div>
          <p>{d.title}</p>
          <img src={d.img} alt='' />
        </div>
      ))}
    </div>
  );
}

export default App;
