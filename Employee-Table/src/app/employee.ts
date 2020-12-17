export class Employee {
    public EmployeeID : any;
    public FirstName : string;
    public LastName : string;
    public Dept : any;
    public City : any;
    public Email: any;

    constructor(EmployeeID: any, FirstName: string, LastName: string, Dept: any, City: any, Email: any) {
        this.EmployeeID = EmployeeID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Dept = Dept;
        this.City = City;
        this.Email = Email;
    }
}
