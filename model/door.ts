export default class DoorModel {
    #number: number;
    #havePresent: boolean;
    #selected: boolean;
    #openned: boolean;

    constructor(number: number, havePresent = false, selected = false, openned = false){
        this.#number = number;
        this.#havePresent = havePresent;
        this.#selected = selected;
        this.#openned = openned;
    }

    get number() {
        return this.#number;
    }
    
    get havePresent() {
        return this.#havePresent;
    }

    get selected() {
        return this.#selected;
    }

    get openned() {
        return this.#openned;
    }

    get closed() {
        return !this.openned;
    }

    markoff() {
        const selected = false
        return new DoorModel(this.number, this.havePresent, selected, this.openned)
    }

    changeSelect() {
        const selected = !this.selected
        return new DoorModel(this.number, this.havePresent, selected, this.openned)
    }

    open() {
        const openned = true
        return new DoorModel(this.number, this.havePresent, this.selected, openned)
    }
}