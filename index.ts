class BreadMachine {
    private breadWeight: number;
    private waterWeight: number;
    private totalWeight: number;

    constructor(breadWeight: number, waterWeight: number) {
        this.breadWeight = breadWeight;
        this.waterWeight = waterWeight; 
    }

    public MakeBread(){
        this.totalWeight = (this.breadWeight || this.waterWeight) == null ? 0 : this.breadWeight * this.waterWeight;
    }

    public getTotalWeight(){
        return this.totalWeight;
    }
}

let machine = new BreadMachine(1.2, 5.7);
machine.MakeBread();
console.log(machine.getTotalWeight());