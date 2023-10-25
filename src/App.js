import './App.css';
import { Container } from '@mui/material';
import { Header } from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
        <Container
          maxWidth="xl"
          sx={{
            background: '#FFF4E4' 
          }}
        >
          <Header />
          <Banner />


        </Container>

    
    </div>
  );
}

export default App;
