import { styled, alpha } from "@mui/material/styles";
import { Box, AppBar, Toolbar, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate, Link } from "react-router-dom";
import AppRouter from "./AppRouter";

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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
  
  const navigate = useNavigate(); 

  function onSearch(searchString) {
    fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchString
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Website no gib me wecipes :(");
        }
        return res; 
      })
      .then((response) => { 
        return response.json(); 
      })
      .then((data) => {
        console.log('navbar',data);
        navigate("/SearchPage", { state: { searchTerm: searchString, searchResult: data.meals } }); 
      })
      .catch((err) => {
        console.log("error: " + err);
      });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          width: "100%",
          top: 0,
        }}
      >
        <Toolbar>
          <Link
            to="/"
            color="secondary"
            underline="none"
            style={{
              width: "fit-content",
              flexGrow: 1,
              fontSize: "20px",
              display: { xs: "none", sm: "block" },
              marginRight: 0,
            }}
          >
            Recipe fetcher :3
          </Link>
          <NavLink
            to="./Categories"
            color="secondary"
            underline="none"
            sx={{ mx: 2 }}
          >
            List by category
          </NavLink>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  onSearch(e.target.value);
                }
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <AppRouter />
    </Box>
  );
}
