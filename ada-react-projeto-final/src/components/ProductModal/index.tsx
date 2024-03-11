import { Box, Modal, Typography } from "@mui/material";
import "./ProductModal.module.css";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  price: number;
  category: string;
  description: string;
  picture: string;
}

export const ProductModal = ({
  isOpen,
  onClose,
  title,
  price,
  category,
  description,
  picture,
}: IModal) => {
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
  return (
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
          <Typography variant="h6">{category}</Typography>
        </Box>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          {title.substring(0, title.indexOf(" ") + 1)}
        </Typography>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          {title.substring(title.indexOf(" ") + 1)}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {price}
        </Typography>
        <img src={picture} alt="" style={{ width: "100px" }} />
      </Box>
    </Modal>
  );
};
