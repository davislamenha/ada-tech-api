import { Box, Modal, Typography } from "@mui/material";
import "./ProductModal.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { IProduct } from "../ProductsCard";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductsContext";

interface IModal {
  product: IProduct;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: IModal) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "8px",
    bgcolor: "#fff",
    boxShadow: 4,
    p: 4,
  };

  const [prod, setProd] = useState<IProduct>(product);
  const { products, findProductIndexById } = useContext(ProductContext);
  const [productIndex, setProductIndex] = useState<number>(
    findProductIndexById(product.id)
  );

  useEffect(() => {
    setProd(product);
  }, []);

  const handleNext = () => {
    if (productIndex !== products.length - 1) {
      setProd(products[productIndex + 1]);
      setProductIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (productIndex !== 0) {
      setProd(products[productIndex - 1]);
      setProductIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display="flex" alignItems="center" padding="30px 40px">
            <Box
              display="flex"
              flexGrow={1}
              flexShrink={0}
              flexBasis="10px"
              p={2}
              bgcolor={"#115dd8"}
              color={"#fff"}
            >
              {" "}
            </Box>
            <Typography variant="h6">{prod.category}</Typography>
          </Box>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {prod.title.substring(0, prod.title.indexOf(" ") + 1)}
          </Typography>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {prod.title.substring(prod.title.indexOf(" ") + 1)}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {prod.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {prod.price}
          </Typography>
          <img src={prod.image} alt="" style={{ width: "100px" }} />
          <button onClick={handlePrev}>
            <ChevronLeft />
          </button>
          <button onClick={handleNext}>
            <ChevronRight />
          </button>
        </Box>
      </Modal>
    </>
  );
};
