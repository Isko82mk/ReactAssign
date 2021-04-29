
import React, { useState } from 'react';
import Expences from './components/Expences/Expences';
import NewExpence from './components/NewExpence/NewExpence'

const DUMMY_EXPENCES = [
  { title: 'Car Insurance', amount: 298.55, date: new Date(2021, 4, 27) },
  { title: 'TV purchase', amount: 1000, date: new Date(2021, 6, 30) },
  { title: 'Pc parts', amount: 500, date: new Date(2020, 10, 8) },
  { title: 'Toilet Paper', amount: 0.65, date: new Date(2020, 4, 27) },
  { title: 'Brush', amount: 500, date: new Date(2019, 2, 27) },
  { title: 'Monitor', amount: 16500, date: new Date(2019, 1, 27) },
]



function App() {


  const [expences, setExpences] = useState(DUMMY_EXPENCES)

  const AddExpenceHandler = (expense) => {
    setExpences((prevExpences) => {
      return [expense, ...prevExpences]
    })
  }

  return (
    <div>

      <NewExpence
        onAddExpence={AddExpenceHandler} />


      <Expences
        expences={expences}
      />

    </div>

  );
}

export default App;
