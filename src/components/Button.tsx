import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { styled, keyframes } from "@mui/material/styles";
import LoadingIcon from "../icons/LoadingIcon";

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled(MuiButton, {
  shouldForwardProp: prop => prop !== "loading",
})<ButtonProps>(({ theme, loading }) => ({
  ...(loading && {
    cursor: "not-allowed",
    backgroundColor: theme.palette.action.disabled,

    "& svg": {
      animation: `${spin} 1s infinite`,
    },

    "&:hover": {
      backgroundColor: theme.palette.action.disabled,
    },
  }),
}));

const CustomButton = (props: ButtonProps) => {
  return (
    <Button {...props}>
      {props.loading ? <LoadingIcon fill="white" width={20} /> : props.children}
    </Button>
  );
};

export default CustomButton;
