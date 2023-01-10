import { styled, TextField } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: (theme) => theme.palette.primary.dark,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: (theme) => theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#5c5ec9',
    },
    '&:hover fieldset': {
      borderColor: '#6d6fe9',
    },
    '&.Mui-focused fieldset': {
      borderColor: (theme) => theme.palette.primary.main,
    },
  },
});
