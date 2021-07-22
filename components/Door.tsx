import styles from "../styles/Door.module.css";
import Present from './Present'
import DoorModel from '../model/door'

interface DoorProps {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void;
}


export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.openned ? styles.select : ''

    const changeSelect = e => props.onChange(door.changeSelect());
    const open = e => {
        e.stopPropagation();
        props.onChange(door.open());
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.knob}
                         onClick={open}></div>
                </div>
        )
    }
    
    return (
        <div className={styles.area} onClick={changeSelect}>
            <div className={`${styles.frame} ${selected}`}>
            {door.closed ? 
                renderDoor() : 
                door.havePresent ? <Present/> : false
            }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}