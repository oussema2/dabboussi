import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (props.propMethod) {
      props.propMethod();
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={{
          marginLeft: 50,
          color: "black",
          fontWeight: "600",
          fontFamily: "sans-serif",
          fontSize: 18,
          textDecoration: "underline",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.menutitle}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {props.menuItems.map((el, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {el.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
