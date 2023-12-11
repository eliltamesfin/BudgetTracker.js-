export class Expense{
    constructor(name,date,amount,type){
        this.name=name,
        this.date=date,
        this.amount=amount,
        this.type=type

        
    }
}
export class RecurringExpense extends Expense{
    constructor(name,date,amount,type,stopDate,frequency){
        super(name,date,amount,type);
        this.stopDate=stopDate;
        this.frequency=frequency;
    }
}