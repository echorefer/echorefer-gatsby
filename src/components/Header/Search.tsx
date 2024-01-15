import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#e2e8f0',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: '1',
    width: 'auto',
  },
  flexGrow: 1,
  flexBasis: 0,
  margin: theme.spacing(0, 2),
  padding: theme.spacing(0, 2),
  color: '#718096',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: 'inherit',
  padding: theme.spacing(1),
}));
