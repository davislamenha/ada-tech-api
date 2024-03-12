import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import { ChangeEvent, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export default function SearchBar() {
  const { setSearchTerm } = useContext(SearchContext);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        width: 'min(100%, 400px)',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Busque por nome ou categoria"
        inputProps={{ 'aria-label': 'Busque por nome ou categoria' }}
        onChange={handleSearch}
      />
    </Paper>
  );
}
