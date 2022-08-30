import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ourbenefits from './components/Ourbenefits';
import Rentalworks from './components/Rentalworks';
import Rentalfleet from './components/Rentalfleet';

function App() {
  return (
    <main>
      <Ourbenefits />
      <Rentalworks />
      <Rentalfleet />
    </main>
  );
}

export default App;
