import {TextField, withStyles} from "@material-ui/core";

const CssTextField = withStyles({
    root: {
      // color of label when selected
      "& label.Mui-focused": {
        color: "green",
        fontSize: "large",
      },
      // unselected / unhovered
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
        },
        // hovered
        "&:hover fieldset": {
          borderColor: "blue",
        },
        // selected
        "&.Mui-focused fieldset": {
          borderColor: "green",
        },
      },
    },
  })(TextField);
  
  const txtFieldStyle = {
    width: "50%",
    marginTop: "1%",
    marginLeft: "25%",
  };

  export {CssTextField, txtFieldStyle};