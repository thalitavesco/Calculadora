import { Box } from "@mui/material";
import { useState } from "react";
import { useStyles } from "./style";

function Calculadora(props: { title: String }) {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [res, setRes] = useState(0);

  const handleSubmit = () => {
    setRes(+n1 + +n2)
  }

  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <span>{props.title}</span>
      <div>
        <input className={styles.input} type="number" value={n1} onChange={(e) => setN1(e.target.value)}/>
        <input className={styles.input} type="number" value={n2} onChange={(e) => setN2(e.target.value)}/>
      </div>
      <button className={styles.button} onClick={handleSubmit} >+</button>
      <span>{res}</span>
    </Box>
  );
}

export default Calculadora;