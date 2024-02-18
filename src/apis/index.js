
const USERS_KEY = 'users'
const CURRENT_USER = 'user'
export const userSignup = ({ email, password }) => {
    let users = localStorage.getItem(USERS_KEY) || '[]';
    let isExist = false;
    users = JSON.parse(users);
    isExist = users.find(item => item.email == email) ? true : false;

    if(isExist) {
        return false
    }

    users.push({ email, password })
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    localStorage.setItem(CURRENT_USER, email)
    return true;

}

export const userLogin = ({ email, password }) => {
    let users = localStorage.getItem(USERS_KEY);
    if(users) {
        users = JSON.parse(users);
        const user = users.find(item => item.email == email);
        if(user && user.password == password) {
            localStorage.setItem(CURRENT_USER, email)
            return user
        }
        return false
    }

    return false;
}

export const userLogout = () => {
    localStorage.removeItem(CURRENT_USER);
}

export const checkLogin = () => {
    return localStorage.getItem(CURRENT_USER);
}