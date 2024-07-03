import { CardData } from './interfaces/interfaces';
import './App.css'
import ListCards from './components/ListCards';

function App() {

  const cardsData: CardData[] = [
    { 
        id: 21843, 
        route: "YARDA PAM - BASE NOE", 
        date: "2024-05-27 23:55:00", 
        payment: 0, 
        container: 210763, 
        truck: 82, 
        amount: 240, 
        status: 1
    },
    { 
        id: 22872, 
        route: "YARDA PAM - BASE NOE", 
        date: "2024-05-30 22:30:00", 
        payment: 0, 
        container: 170231, 
        truck: 82, 
        amount: 0, 
        status: 4
    },
    { 
        id: 23192, 
        route: "YARDA PAM - BASE NOE", 
        date: "2024-05-31 23:21:00", 
        payment: 0, 
        container: 161010, 
        truck: 82, 
        amount: 100, 
        status: 1
    },
    { 
        id: 22130, 
        route: "YARDA PAM - ADIENT 4", 
        date: "2024-05-28 23:27:00", 
        payment: 0, 
        container: 130698, 
        truck: 82, 
        amount: 100, 
        status: 1 
    },
    { 
        id: 22548, 
        route: "YARDA PAM - ADIENT 4", 
        date: "2024-05-29 23:14:00", 
        payment: 0, 
        container: 150373, 
        truck: 82, 
        amount: 100, 
        status: 1 
    },
    { 
        id: 21517, 
        route: "BASE NOE - ADIENT 4", 
        date: "2024-05-27 09:00:00", 
        payment: 0, 
        container: 210763, 
        truck: 82, 
        amount: 120, 
        status: 1 
    },
    { 
        id: 21853, 
        route: "BASE NOE - ADIENT 4", 
        date: "2024-05-28 09:00:00", 
        payment: 0, 
        container: 130698, 
        truck: 82, 
        amount: 120, 
        status: 1 
    },
    { 
        id: 22183, 
        route: "BASE NOE - ADIENT 4", 
        date: "2024-05-29 09:00:00", 
        payment: 0, 
        container: 150373, 
        truck: 82, 
        amount: 120, 
        status: 1
    },
    { 
        id: 22556, 
        route: "BASE NOE - ADIENT 4", 
        date: "2024-05-30 09:00:00", 
        payment: 0, 
        container: 170231, 
        truck: 82, 
        amount: 120, 
        status: 1
    },
    { 
        id: 22881, 
        route: "BASE NOE - ADIENT 4", 
        date: "2024-05-31 09:00:00", 
        payment: 0, 
        container: 161010, 
        truck: 82, 
        amount: 120, 
        status: 1
    },
    { 
        id: 21774, 
        route: "ADIENT 4 - YARDA PAM", 
        date: "2024-05-27 20:44:00", 
        payment: 0, 
        container: 210763, 
        truck: 82, 
        amount: 200, 
        status: 1
    },
    { 
        id: 22099, 
        route: "ADIENT 4 - YARDA PAM", 
        date: "2024-05-28 20:21:00", 
        payment: 0, 
        container: 130698, 
        truck: 82, 
        amount: 200, 
        status: 4 
    },
    { 
        id: 22463, 
        route: "ADIENT 4 - YARDA PAM", 
        date: "2024-05-29 20:44:00", 
        payment: 0, 
        container: 150373, 
        truck: 82, 
        amount: 200, 
        status: 1
    },
    { 
        id: 22727, 
        route: "ADIENT 4 - YARDA PAM", 
        date: "2024-05-30 15:07:00", 
        payment: 0, 
        container: 170231, 
        truck: 82, 
        amount: 0, 
        status: 4
    },
    { 
        id: 23098, 
        route: "ADIENT 4 - YARDA PAM", 
        date: "2024-05-31 18:17:00", 
        payment: 0, 
        container: 161010, 
        truck: 82, 
        amount: 80, 
        status: 4 
    },
    { 
        id: 22167, 
        route: "ADIENT 4 - BASE NOE", 
        date: "2024-05-28 23:27:00", 
        payment: 0, 
        container: 130698, 
        truck: 82, 
        amount: 240, 
        status: 4 
    },
    { 
        id: 22549, 
        route: "ADIENT 4 - BASE NOE", 
        date: "2024-05-29 23:21:00", 
        payment: 0, 
        container: 150373, 
        truck: 82, 
        amount: 240, 
        status: 4 
    }
  ];
  return (
    <>
      <ListCards cards={cardsData} />
    </>
  )
}

export default App
