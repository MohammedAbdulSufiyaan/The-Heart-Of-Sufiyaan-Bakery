import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Icart from "../Icart";
import { useSelector } from "react-redux";
import Imsautocomplete from "../Imsautocomplete";
import { textTransform } from "@mui/system";
import { useNavigate } from "react-router-dom";
const pages = ["Cake", "Flowers", "Icecream", "Birthday", "Chocolates"];
const settings = ["About Website"];
function Sna(props) {
  const cakes = useSelector((state) => state.cake.orderedCakes);
  const flowers = useSelector((state) => state.flower.orderedFlowers);
  const icecream = useSelector((state) => state.icecream.orderedIcecreams);
  const chocolates = useSelector((state) => state.chocolate.orderedChocolates);
  const sum = cakes + chocolates + icecream + flowers;
  let pages = props.pages;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navLinkStyles = ({isActive}) => {
    return{
       fontWeight: isActive ? 'bold' : 'normal',
       //fontColor: isActive ? 'red' : 'white',
        textDecoration:'none',
        textTransform:'none',
        my:2,
        fontSize:isActive?'18px': '16px',
        display:'block',
        color:isActive?'Pink':'white',
        fontWeight: isActive ? 'bold':'normal',
        marginRight:'10px',marginLeft:'10px'
    }
  }
  const navigate=useNavigate()
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF6347" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/" style={{ textDecoration: "none" }}></Link>
         <Typography
  variant="h6"
  component="a"
  href="/"
  sx={{
    mr: 2,
    display: { xs: "none", md: "flex" },
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".15rem",
    color: "inherit",
    textDecoration: "none",
    fontSize: { xs: "0.8rem", sm: "1rem", md: "1.1rem" },
    whiteSpace: "normal",      // 👈 allow wrapping
    wordBreak: "break-word",   // 👈 break long text if needed
    lineHeight: 1.3,           // 👈 better spacing for two lines
    maxWidth: "400px",         // 👈 limit width so it wraps nicely
  }}
>
The Heart of Sufiyaan Bakery —For Testing & Demo Purpose Only - Not For Sale
</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page} style={{ textDecoration: "none" }}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink to={page} style={navLinkStyles} onClick={handleCloseNavMenu}
              >
                {/* <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" , textTransform:'capitalize'}}
                >
                  {page}
                </Button> */}
                {page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ bgcolor: "white" }}>
            {/* <Imsautocomplete /> */}
          </Box>
          <Link to="/cart">
            {/* <IconButton aria-label="ViewCart">
              <Icart badgeContent={sum} />
            </IconButton> */}
          </Link>
          <Button variant="contained"onClick={()=>navigate("/Signup")}>
            Signup
            </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Sufiyaan"
              // src="https://www.filmibeat.com/ph-big/2019/02/mahesh-babu_155056989980.jpg"
/>
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Sna;
