import { createTheme } from '@mui/material/styles';
const theme=createTheme();

const classes=
    {
        appBarSearch: {
          borderRadius: 4,
          marginBottom: '1rem',
          display: 'flex',
          padding: '16px',
        },
        pagination: {
          borderRadius: 4,
          marginTop: '1rem',
          padding: '16px',
        },
        gridContainer: {
          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
          },
        },
      }


export default classes;