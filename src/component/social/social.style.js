export default  {
    root:{
        height: '80vh',
        marginTop: '0px',
        fontFamily: 'Akaya Telivigala, cursive'
    },
    aboutme:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        // color: "#37474f"
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
       color: "#37474f",
        height: '80vh',
        // border: "solid 2px",
        // borderColor: "#37474f"
        
    },
    innerText:{
        padding: "2rem",
        fontSize: "1.2rem",
        marginLeft: "1rem"
        // color: '#064cd5',
       
    },
    image:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        // width: '50%',
        height: '70%'
    },
    social:{
        textDecoration: 'none',
        marginRight: "1rem",
        // color: "#064cd5",
        // "&:hover":{
        //     transform: "scale(1.2)",
        //     transition: "all .2s ease-in-out"
        // }
    },
    socialIcon:{
       
        "&:hover":{
            transform: "scale(1.2)",
           
            transition: "all .2s ease-in-out"
        }
    },
    contact:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    "@media screen and (max-width:700px)": {
        aboutme:{
            gridTemplateColumns: "1fr",
        },
        image:{
            paddingBottom: "1rem"
        },
        contact:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center"
        },
        socialIcon:{
            marginBottom: "1rem"
        }
    }
}