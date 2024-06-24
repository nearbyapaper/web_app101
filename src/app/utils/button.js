import { Button } from "@mui/material";

const Button101 = (props) => {
  const { label, style, variant, onClick, callback } = props || "";
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={
        style
          ? style
          : variant === "contained"
          ? {
              backgroundColor: "#9cbb80",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#9cbb80",
                color: "white",
                fontWeight: "bold",
              },
            }
          : {
              borderColor: "#9cbb80",
              color: "#9cbb80",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "#9cbb80",
                color: "#white",
                fontWeight: "bold",
              },
            }
      }
    >
      {label}
    </Button>
  );
};

export default Button101;
