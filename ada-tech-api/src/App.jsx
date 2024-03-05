import './App.css';
import CharacterList from './components/CharacterList';
import api from './api/api';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  useEffect(() => {
    const interval = setInterval(getCharacters, 6000);

    return () => clearInterval(interval);
  }, []);

  const getCharacters = async () => {
    const randomPage = 1 + Math.floor(Math.random() * 40);
    try {
      const { data } = await api.get(`/character/?page=${randomPage}`);
      setCharacters(data.results);
      toast.success('Operação realizada com sucesso!', {
        position: 'top-right',
        autoClose: 1000,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      <h1>Api Rick and Morty</h1>
      <ToastContainer />
      {characters.length > 0 && <CharacterList characters={characters} />}
    </>
  );
}

export default App;
