import { CardData } from './interfaces/interfaces';
import './App.css'
import ListCards from './components/ListCards';
import { useState, useEffect } from 'react';
import { getNomina } from './network/lib/nomina';
function App() {
    const [cardsData, setData] = useState<CardData[]>([]);
    useEffect(() => {
        getNomina('2024-06-01', 5).then(function (response) {
          setData(response.data);
        });
    }, []);
  
  return (
    <>
      <ListCards cards={cardsData} />
    </>
  )
}

export default App
