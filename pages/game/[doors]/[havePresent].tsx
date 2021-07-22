import styles from  "../../../styles/Game.module.css";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { createDoors, updateDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router"

export default function game() {
    const router = useRouter();
    const [valid, setvalid] = useState(false);
    const [doors, setDoors] = useState([]);

    useEffect(() => {
        const doors = +router.query.doors
        const havePresent = +router.query.havePresent;
        setDoors(createDoors(doors, havePresent));
    }, [router?.query])

    useEffect(() => {
        const doors = +router.query.doors
        const havePresent = +router.query.havePresent;

        const qtdeDoorsValid = doors >= 3 && doors <= 100;
        const havePresentValid = havePresent >= 1 && havePresent <= doors; 

        setvalid(qtdeDoorsValid && havePresentValid)
    }, [doors])

    /* +router.query.doors;
    +router.query.havePresent */

    function renderDoors() {
     return valid && doors.map(door => {
       return <Door key={door.number} value={door}
            onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />
        })
    }
    return (
        <div id={styles.game}>
            <div className={styles.doors}>
                {renderDoors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Restart game</button>
                </Link>
            </div>
        </div>
    )
}