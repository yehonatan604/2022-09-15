var BreadMachine = /** @class */ (function () {
    function BreadMachine(breadWeight, waterWeight) {
        this.breadWeight = breadWeight;
        this.waterWeight = waterWeight;
    }
    BreadMachine.prototype.MakeBread = function () {
        this.totalWeight = (this.breadWeight || this.waterWeight) == null ? 0 : this.breadWeight * this.waterWeight;
    };
    BreadMachine.prototype.getTotalWeight = function () {
        return this.totalWeight;
    };
    return BreadMachine;
}());
var machine = new BreadMachine(1.2, 5.7);
machine.MakeBread();
console.log(machine.getTotalWeight());
//# sourceMappingURL=index.js.map