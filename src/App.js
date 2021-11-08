import './App.css';
import FFProvider from './context/FFProvider';
import Home from './pages/Home';

function App() {
  return (
    <FFProvider>
     <Home />
    </FFProvider>
  );
}

export default App;
