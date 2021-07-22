import DoorModel from "../model/door";

export function createDoors(qtde: number, doorWithPresent: number): DoorModel[]{
    return Array.from({ length: qtde}, (_, i) => {
        const number = i + 1;
        const havePresent = number === doorWithPresent;
        return new DoorModel(number, havePresent);
    })
}

export function updateDoors(doors: DoorModel[], doorModified: DoorModel): DoorModel[]{
    return doors.map(doorAtual => {
        const equalModified = doorAtual.number === doorModified.number;

        if(equalModified){
            return doorModified;
        } else {
            return doorModified.open ? doorAtual : doorAtual.markoff();
        }
    })
}