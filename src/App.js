import Swal from 'sweetalert2';
import './App.css';
import Container from './components/Container';
import Navbar from './components/navbar/Navbar';

function App() {

  const checkStatus = () => {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

  if (!navigator.onLine) {
    checkStatus();
  }

  return (
    <div className="App">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
