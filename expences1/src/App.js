
import Expences from './components/Expences/Expences'

function App() {

  const expences = [
    { title: 'Car Insurance', amount: 298.55, date: new Date(2021, 4, 27) },
    { title: 'TV purchase', amount: 1000, date: new Date(2021, 6, 30) },
    { title: 'Pc parts', amount: 500, date: new Date(2021, 10, 8) },
    { title: 'Toilet Paper', amount: 0.55, date: new Date(2021, 4, 27) },
  ]

  return (
    <div>

      <Expences
        expences={expences}
      />

    </div>

  );
}

export default App;
