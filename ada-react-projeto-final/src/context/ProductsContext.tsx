import { createContext, useState } from "react";
import { IProduct } from "../components/ProductsCard";

interface IProductContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  findProductIndexById: (id: number) => number;
}

interface IChildren {
  children: React.ReactNode;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

export const ProductProvider = ({ children }: IChildren) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const findProductIndexById = (id: number) => {
    const productIndex = products.findIndex((product) => product.id === id);
    return productIndex;
  };

  return (
    <ProductContext.Provider
      value={{ products, setProducts, findProductIndexById }}
    >
      {children}
    </ProductContext.Provider>
  );
};
