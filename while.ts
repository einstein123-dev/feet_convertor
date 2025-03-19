interface User{
    email: string;
    password: string;
}

function greetUser(user: User) {
    console.log(user.email);
}

