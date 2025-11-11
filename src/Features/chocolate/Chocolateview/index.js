import * as React from 'react';
import { useDispatch,useSelector } from "react-redux";
import{ordered,restocked} from '../chocolateSlice';
import { Button, Grid } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import chocolate1 from"../../../Asset/Chocolates/chocolate1.jpg";
import chocolate2 from "../../../Asset/Chocolates/chocolate2.jpg";
import chocolate3 from "../../../Asset/Chocolates/chocolate3.jpg";
import chocolate4 from "../../../Asset/Chocolates/chocolate4.jpg";
import chocolate5 from "../../../Asset/Chocolates/chocolate5.jpg";
import chocolate6 from "../../../Asset/Chocolates/chocolate6.jpg";
import chocolate7 from "../../../Asset/Chocolates/chocolate7.jpg";
import chocolate8 from "../../../Asset/Chocolates/chocolate8.jpg";
import chocolate9 from "../../../Asset/Chocolates/chocolate9.jpg";
import chocolate10 from "../../../Asset/Chocolates/chocolate10.jpg";
import chocolate11 from "../../../Asset/Chocolates/chocolate11.jpg";
import chocolate12 from "../../../Asset/Chocolates/chocolate12.jpg";
import Icart from '../../../Component/Icart';
import Irating from '../../../Component/Irating';
import Flowercard from '../../../Component/Flowercard';


 export default function Chocolateview(props){
    let title=props.title
    let price=props.price
    let photo=props.photo
    let label=props.label
    let act=props.act
   const dispatch=useDispatch();
   const num1=useSelector((state)=>state.chocolate.numOfChocolates);
    //console.log('chocolate',numOfChocolates);
    const orderedChocolates=useSelector((state)=>state.chocolate.orderedChocolates)

    const chocolateList=[
      {
        title:'chocolate1',
        photo:chocolate1,
        price:324,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate2",
        photo:chocolate2,
        price:110,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate3",
        photo:chocolate3,
        price:234,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate4",
        photo:chocolate4,
        price:125,
        label:"Few left",
        act:"secondary"
      },
      {
        title:"chocolate5",
        photo:chocolate5,
        price:134,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate6",
        photo:chocolate6,
        price:245,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate7",
        photo:chocolate7,
        price:567,
        label:"Few left",
        act:"secondary"
      },
      {
        title:"chocolate8",
        photo:chocolate10,
        price:789,
        label:"Best seller",
        act:"success"
      },
      {
        title:"chocolate9",
        photo:chocolate11,
        price:432,
        label:"Few left",
        act:"secondary"
      },
      {
        title:"chocolate10",
        photo:chocolate12,
        price:124,
        label:"Best seller",
        act:"success"
      }
      
      
      

]




const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      

 const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    dispatch(ordered(5));
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return(
        <>
        <br/>

      <Grid container spacing={{xs:2,md:3}} columnSpacing={{xs:4,sm:8,md:12}} sx={{backgroundColor:"#BC8F8F"}}>
        {
          chocolateList.map((item,index)=>{
            return(
              <Grid item xs={2}  sm={6} md={4} key={index}>

              <Flowercard  title={item.title}
                      photo={item.photo}
                      price={item.price}
                      order={ordered}
                      label={item.label}
                      act={item.act}

              ></Flowercard>
              </Grid>
            )
          })
        }
      </Grid>





        {/* <h2>numOfChocolates{num1}</h2>
        <Icart badgeContent={orderedChocolates}></Icart> */}
        <Button variant="outlined" onClick={handleClick }>
        Order Chocolates
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
             Ordering is temporarily unavailable. We will be back soon

        </Alert>
      </Snackbar>
        {/* <Button
             onClick={()=>{
                  dispatch(restocked(10))
        }}>
            restock chocolates
        </Button> */}
        </>
    )
}