import TextField from "@mui/material/TextField";

const TextField101 = (props) => {
  const { label, value, setValue, style, variant } = props || "";

  return (
    <TextField
      label={label}
      value={value}
      setValue={setValue}
      variant={variant}
      sx={
        style
          ? style
          : {
              borderColor: "white",
              borderWidth: "2px",
              borderRadius: "5px",
              "& .MuiInputBase-input": { color: "white" },
              "& .MuiInputLabel-root": { color: "white" },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              },
              "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#9cbb80",
                  color: "white",
                },
              "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#9cbb80",
                  color: "white",
                },
            }
      }
    />
  );
};

export default TextField101;
