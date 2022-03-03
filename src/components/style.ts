import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  button: {
    backgroundColor: '#0001d6',
    border: 'none',
    padding: '8px 35px',
    color: 'white',
    margin: '15px',
    fontSize: '25px',
    borderRadius: '5px 15px',
  },
  input:{
    backgroundColor: '#b2bdfb',
    padding: '23px 0px',
    border: '10px',
    margin: '5px',
    textAlign: 'center',
    color: '#ffffff',
  },
  container: {
    fontSize: '40px',
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    background: "#152266",
    color: '#fff',
    display: "flex",
    alignItems: "center",
  },
});