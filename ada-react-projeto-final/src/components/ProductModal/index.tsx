import { Box, Modal, Typography, Grid, Paper } from "@mui/material";

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
    width: "50em",
    borderRadius: "8px",
    bgcolor: "#fff",
    boxShadow: 6,
    p: 4,
    padding: "51px 32px;",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Paper
          sx={{
            margin: "auto",
            flexGrow: 1,
            ...style,
            "&.MuiPaper-root": {
              border: "none",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item>seta</Grid>
            <Grid item>
              <img
                src={picture}
                alt=""
                style={{ width: "150px", height: "100%", objectFit: "contain" }}
              />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="subtitle1" component="div" color="#94b053">
                    {category}
                  </Typography>
                  <Typography variant="h5">
                    {title.substring(0, title.indexOf(" ") + 1)}
                  </Typography>
                  <Typography variant="h6">
                    {title.substring(title.indexOf(" ") + 1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Price: {price}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>seta 2</Grid>
          </Grid>
        </Paper>
      </Box>
    </Modal>
  );
};
