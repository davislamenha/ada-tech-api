import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ProductModal } from "../ProductModal";
import { useState } from "react";

interface ProductsCardProps {
  product: IProduct;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export default function ProductsCard({ product }: ProductsCardProps) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 345,
          padding: "1rem",
          height: "360px",
          boxShadow: "none",
          border: "1px solid #222",
        }}
      >
        <CardMedia
          component="img"
          alt={product.title}
          height="140"
          image={product.image}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title.substring(0, 20) + "..."}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description.substring(0, 30) + "..."}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Button size="small" onClick={handleOpen}>
            Ver detalhes
          </Button>
        </CardActions>
      </Card>
      <ProductModal product={product} isOpen={open} onClose={handleClose} />
    </>
  );
}
