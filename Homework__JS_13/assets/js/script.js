class BasicUser {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}
let UserPetro = new BasicUser("Petro", "User");
console.log(UserPetro)

class User extends BasicUser {
    constructor(...args) {
        super(...args);
    }
    get getName() {
        return `${this.role}:${this.name} `

    }
    set getName(getName) {
        this.name = nameUser;
        this.role = roleUser;
    }
    get getRole() {
        return `${this.name}: ${this.role}`;
    }
    set getRole(getRole) {
        this.name = nameUser;
        this.role = roleUser;
    }
    login() {

    }
    logout() {

    }
    changeName() {

    }
    changePassword() {

    }
}
let UserAnna = new User("Anna", "User");
console.log(UserAnna.getName)
console.log(UserAnna.getRole)
class Admin extends BasicUser {
    addUser() {

    }
    removeUser() {

    }
    changeUserRole() {

    }
    getAllUsers(allUsers) {
   
    }
    removeAllUsers(allUsers) {
        allUsers = [];
    }
}
let AdminDenis = new Admin('Denis', "admin")
let login = document.querySelector('.input-login'),
    password = document.querySelector('.input-password'),
    btn = document.querySelector('.form-btn');
let selectRole = document.getElementById("role");


window.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('signIn');
    changeForm();
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            checkRole(password);
            if (checkRole.value == 'admin') {
                let x = new Admin(login.value, selectRole.value)
                console.log(x)
            } else {
                let x = new User(login.value, selectRole.value)
                console.log(x)
            }
            login.value = '';
            password.value = '';

        })
    }
    let formReg = document.getElementById('signUp'),
        loginReg = document.querySelector('.input-loginUp'),
        passwordREg = document.querySelector('.input-passwordUp'),

        allUsers = [];
    if (formReg) {
        formReg.addEventListener('submit', (e) => {
            e.preventDefault();

            if (loginReg.value !== ' ' && loginReg.value !== '') {
                let n = new User(loginReg.value, 'user')
                allUsers.push(n);
               alert('You have successfully registered')
                console.log(allUsers)
                loginReg.value = '';
                passwordREg.value = '';
            } else {
                alert('Enter correct login and pasword')
            }
        })
    }
})
function checkRole(password) {
    if (selectRole.value == 'admin' && password.value == 123456) {
        alert('Welcome Admin');
    } else if (selectRole.value == "user" && password.value == 111000) {
        alert('Welcome User');
    } else {
        return alert("Enter correct password")

    }
}

function changeForm() {
    let btnIn = document.querySelector('#in'),
        btnUp = document.querySelector('#up'),
        formAccount = document.getElementById('signIn'),
        formRegistration = document.getElementById('signUp');
    console.log(btnIn)
    console.log(btnUp)
    btnIn.addEventListener('click', (e) => {
        formAccount.style.border = '2px solid green';
        formAccount.style.display = 'flex';
        formAccount.style.background = '#1AAB8A';
        formRegistration.style.display = "none";
    })
    btnUp.addEventListener('click', (e) => {
        formAccount.style.display = 'none';
        formRegistration.style.display = "flex";
        formRegistration.style.background = '#1AAB8A';
        formRegistration.style.border = "2px solid green"
    })
}
