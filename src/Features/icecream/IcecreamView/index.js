import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../icecreamSlice";
import { Button } from "@mui/material";
import Icart from "../../../Component/Icart";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import icecream1 from "../../../Asset/icecream/icecream1.jpg";
import icecream2 from "../../../Asset/icecream/icecream2.jpg";
import icecream3 from "../../../Asset/icecream/icecream3.jpg";
import icecream4 from "../../../Asset/icecream/icecream4.jpg";
import icecream5 from "../../../Asset/icecream/icecream5.jpg";
import icecream6 from "../../../Asset/icecream/icecream6.jpg";
import icecream7 from "../../../Asset/icecream/icecream7.jpg";
import icecream8 from "../../../Asset/icecream/icecream8.jpg";
import icecream9 from "../../../Asset/icecream/icecream9.jpg";
import icecream10 from "../../../Asset/icecream/icecream10.jpg";
import icecream11 from "../../../Asset/icecream/icecream11.jpg";
import icecream12 from "../../../Asset/icecream/icecream12.jpg";
import Flowercard from "../../../Component/Flowercard";

export default function IcecreamView(props) {
  let label = props.label;
  let act = props.act;
  const dispatch = useDispatch();
  let icecreams = useSelector((state) => state.icecream.numOficecreams);
  const orderedIcecreams = useSelector(
    (state) => state.icecream.orderedIcecreams
  );

  const IcecreamList = [
    { title: "icecream1", photo: icecream1, price: 345, label: "Best seller", act: "success" },
    { title: "icecream2", photo: icecream2, price: 213, label: "Best seller", act: "success" },
    { title: "icecream3", photo: icecream3, price: 456, label: "Few left", act: "secondary" },
    { title: "icecream4", photo: icecream4, price: 112, label: "Best seller", act: "success" },
    { title: "icecream5", photo: icecream5, price: 786, label: "Few left", act: "secondary" },
    { title: "icecream6", photo: icecream6, price: 321, label: "Best seller", act: "success" },
    { title: "icecream7", photo: icecream7, price: 578, label: "Few left", act: "secondary" },
    { title: "icecream8", photo: icecream8, price: 341, label: "Best seller", act: "success" },
    { title: "icecream9", photo: icecream9, price: 876, label: "Best seller", act: "success" },
    { title: "icecream10", photo: icecream10, price: 234, label: "Few left", act: "secondary" },
    { title: "icecream11", photo: icecream11, price: 110, label: "Best seller", act: "success" },
    { title: "icecream12", photo: icecream12, price: 75, label: "Best seller", act: "success" },
  ];

  // Snackbar Alert Component
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // Snackbar State
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 4, sm: 8, md: 12 }}
        sx={{ backgroundColor: "black" }}
      >
        {IcecreamList.map((item, index) => {
          return (
            <Grid item xs={2} sm={6} md={4} key={index} sx={{ backgroundColor: "#3CB371" }}>
              <Flowercard
                title={item.title}
                photo={item.photo}
                price={item.price}
                order={ordered}
                label={item.label}
                act={item.act}
              />
            </Grid>
          );
        })}
      </Grid>

      {/* Snackbar Button */}
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          mt: 3,
          ml: 2,
          borderColor: "#3CB371",
          color: "#3CB371",
          "&:hover": { backgroundColor: "#3CB371", color: "white" },
        }}
      >
        Order Ice Cream 
      </Button>

      {/* Snackbar Alert */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
      Ordering is temporarily unavailable. We will be back soon

        </Alert>
      </Snackbar>
    </>
  );
}
