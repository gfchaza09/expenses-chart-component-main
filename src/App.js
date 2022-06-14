import { useEffect, useState } from 'react';

// Components
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';

export const App = () => {
  
  const [data, setData] = useState([]);
  const [higher, setHigher] = useState({});

  const getData = () => {
    fetch('./data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        higherAmount(data);
      })
  };

  const higherAmount = (data) => {
    let aux = 0;
    for (let i = 0; i < data.length; i++) {
      if (aux < data[i].amount) {
        setHigher(data[i]);
        aux = data[i].amount;
      }
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Main data={data} higher={higher}/>
      <Footer />
    </>
  )
};