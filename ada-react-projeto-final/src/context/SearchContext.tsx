import { createContext, useState } from 'react';

interface ISearchContext {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

interface IChildren {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext,
);

export const SearchProvider = ({ children }: IChildren) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
