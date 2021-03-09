import { fade } from '@material-ui/core/styles';

const NavStyles = (theme, palette) => {
  
  return (
    {
    root: {
      flexGrow: 1,
      backgroundColor: "#064cd5",
     
    
    },
    
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      letterSpacing: "2px",
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      
    },
    link : {
      color: 'white',
      textDecoration: 'none',
      fontFamily: 'Akaya Telivigala, cursive',

    },
    switchColor : {
      color: theme.palette.primary.main
    },
    modeText: {
      fontFamily: 'Akaya Telivigala, cursive',
    },
    aboutme:{
      marginBottom: '.3rem',
      marginRight: '1rem'
    }
    

  })};

  export default NavStyles;