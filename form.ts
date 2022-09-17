class form{
    private maxUserNameLength:number = 20;
    private minUserNameLength:number = 4;
    private minYear:number = 1900;
    private maxYear:number = 2022;
    private maxPasswordLength:number = 20;
    private minPasswordLength:number = 4;

    private logErrors:string[];

    private displaybox:HTMLDivElement = document.getElementById("displayBox") as HTMLDivElement;
    private userName:HTMLInputElement = document.getElementById("userName") as HTMLInputElement;
    private password:HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    private dob:HTMLInputElement = document.getElementById("dob") as HTMLInputElement;
    private submit:HTMLInputElement = document.getElementById("submit") as HTMLInputElement;

    public activateValidation() {
        this.submit.addEventListener('click', (e) => {
            e.preventDefault();
            this.displaybox.innerHTML += !this.validateForm() ? this.displayOk() : this.displayErrors();
        });
    }

    public validateForm() {
        return !(this.userName.value != "" && this.userName.value.length > this.minUserNameLength && this.userName.value.length < this.maxUserNameLength)
                &&
                !(this.password.value != "" && this.password.value.length > this.minPasswordLength && this.password.value.length < this.maxPasswordLength)
                &&
                !(parseInt(this.dob.value) > this.minYear && parseInt(this.dob.value) < this.maxYear);
    }

    public displayErrors() {
        return "Error";
    }

    public displayOk() {
        return "Ok";
    }
}

let myForm = new form();
myForm.activateValidation();