import { CardData } from './interfaces/interfaces';
import './App.css'
import ListCards from './components/ListCards';

function App() {

  const cardsData: CardData[] = [
    {
        order: 1,
        origin: 'New York, USA',
        destination: 'Los Angeles, USA',
        date: '2023-07-01',
        container: 12345,
        status: 1,
        amount: 5000
    },
    {
        order: 2,
        origin: 'London, UK',
        destination: 'Paris, France',
        date: '2023-07-02',
        container: 67890,
        status: 2,
        amount: 10000
    },
    {
        order: 3,
        origin: 'Tokyo, Japan',
        destination: 'Shanghai, China',
        date: '2023-07-03',
        container: 11121,
        status: 2,
        amount: 7500
    },
    {
        order: 4,
        origin: 'Sydney, Australia',
        destination: 'Melbourne, Australia',
        date: '2023-07-04',
        container: 13141,
        status: 0,
        amount: 8500
    },
    {
        order: 5,
        origin: 'Berlin, Germany',
        destination: 'Munich, Germany',
        date: '2023-07-05',
        container: 15161,
        status: 0,
        amount: 6000
    }
  ];
  return (
    <>
      <ListCards cards={cardsData} />
    </>
  )
}

export default App
