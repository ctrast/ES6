class Atm{
    constructor( type, money=0){
        this.type = type;
        this.money = money;
        this.transaction =[];
        this.backUp = backUp;
    }
    withdraw(withAmt){
        this.money = this.money - withAmt;
        this.transaction.push("WithDraw",withAmt);
    }
    deposit(depAmt){
        this.money = this.money + depAmt;
        this.transaction.push("Deposit", depAmt);
    }
    showBalance(){
        console.log(`The balance is ${this.money}`);
    }
}

const myAtm = new Atm("checking",500 );
myAtm.deposit(200);
myAtm.deposit(100);
myAtm.withdraw(300);
console.log(myAtm);
