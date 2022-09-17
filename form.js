var form = /** @class */ (function () {
    function form() {
        this.maxUserNameLength = 20;
        this.minUserNameLength = 4;
        this.minYear = 1900;
        this.maxYear = 2022;
        this.maxPasswordLength = 20;
        this.minPasswordLength = 4;
        this.displaybox = document.getElementById("displayBox");
        this.userName = document.getElementById("userName");
        this.password = document.getElementById("password");
        this.dob = document.getElementById("dob");
        this.submit = document.getElementById("submit");
    }
    form.prototype.activateValidation = function () {
        var _this = this;
        this.submit.addEventListener('click', function (e) {
            e.preventDefault();
            _this.displaybox.innerHTML += !_this.validateForm() ? _this.displayOk() : _this.displayErrors();
        });
    };
    form.prototype.validateForm = function () {
        return !(this.userName.value != "" && this.userName.value.length > this.minUserNameLength && this.userName.value.length < this.maxUserNameLength)
            &&
                !(this.password.value != "" && this.password.value.length > this.minPasswordLength && this.password.value.length < this.maxPasswordLength)
            &&
                !(parseInt(this.dob.value) > this.minYear && parseInt(this.dob.value) < this.maxYear);
    };
    form.prototype.displayErrors = function () {
        return "Error";
    };
    form.prototype.displayOk = function () {
        return "Ok";
    };
    return form;
}());
var myForm = new form();
myForm.activateValidation();
//# sourceMappingURL=form.js.map