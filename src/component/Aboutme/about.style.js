export default  {
    root:{
        height: '80vh',
        marginTop: '0px',
        fontFamily: 'Sansita Swashed, cursive'
    },
    aboutme:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        color: "#064cd5"
    },
    content:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
       
        height: '80vh',
        border: "solid 2px",
        borderColor: "#37474f"
        
    },
    innerText:{
        padding: "2rem",
        // color: '#064cd5',
       
    },
    image:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        width: '50%',
        height: '50%'
    },
    social:{
        textDecoration: 'none',
        marginRight: "1rem",
        color: "#064cd5"
    },
    contact:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    "@media screen and (max-width:700px)": {
        aboutme:{
            gridTemplateColumns: "1fr",
        }
    }
}