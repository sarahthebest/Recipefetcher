import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// const MuiAppBar = createTheme ({

// });

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  // const [searchResult, setSearchResult] = useState(null);

  // useEffect(() => {
  //   fetch('www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  //     .then(res => {
  //       if(!res.ok){
  //         throw Error('Website no gib me wecipes :(')
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //         setSearchResult(data.message)
  //     })
  //     .catch(err => {
  //       console.log('error: ' + err);
  //     });
  // });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            href="./"
            color="secondary"
            underline="none"
            sx={{
              flexGrow: 1,
              fontSize: '20px',
              display: { xs: "none", sm: "block" },
              marginRight: 0,
            }}
          >
            Recipe fetcher :3
          </Link>
          <NavLink
            to="./Recipes.jsx"
            color="secondary"
            underline="none"
            sx={{ mx: 2 }}
          >
            View all recipes
          </NavLink>
          <NavLink href="#" color="secondary" underline="none" sx={{ mx: 2 }}>
            List by category
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
