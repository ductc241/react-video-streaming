import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        width: { xs: "60%", md: "45%" },
        backgroundColor: "white",

        "& .MuiOutlinedInput-root": {
          pl: 4,
          borderRadius: "45px",
        },

        "& .MuiInputBase-input": {
          padding: "13px 10px",
        },
      }}
      placeholder="Search everything..."
      hiddenLabel
    />
  );
};

export default SearchBar;
