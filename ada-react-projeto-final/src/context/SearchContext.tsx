import { createContext, useState } from 'react';
import { IProduct } from '../components/ProductsCard';

interface ISearchContext {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  findFilteredProductIndexById: (id: number) => number;
}

interface IChildren {
  children: React.ReactNode;
}

export const SearchContext = createContext<ISearchContext>(
  {} as ISearchContext,
);

export const SearchProvider = ({ children }: IChildren) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const findFilteredProductIndexById = (id: number) => {
    const productIndex = filteredProducts.findIndex(
      (product) => product.id === id,
    );
    return productIndex;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        setFilteredProducts,
        findFilteredProductIndexById,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
