import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from  "next/link";
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtdeDoors, setQtdeDoors]  = useState(3);
  const [withPresent, setWithPresent]  = useState(1);
  return (
      <div className={styles.form}>
        <div>
          <Card bgcolor="#c0392c">
            <h1>Monty Hall</h1>
          </Card>
          <Card>
            <NumberInput text="Qtde Doors" 
            value={qtdeDoors} 
            onChange={newQtde => setQtdeDoors(newQtde)}/>
          </Card>
        </div>
        <div>
          <Card>
          <NumberInput text="Door with Present?" 
            value={withPresent} 
            onChange={newDoorWithPresent => setWithPresent(newDoorWithPresent)}/>
          </Card>
          <Card bgcolor="#28a085">
            <Link href={`/game/${qtdeDoors}/${withPresent}`}>
              <h2 className={styles.link}>Start</h2>
            </Link>
          </Card>
        </div>
      </div>
  )
}
