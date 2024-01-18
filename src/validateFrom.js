export const IsCheckPass = (text) => {
    let myError = ''
    if (text === '') {
        myError = 'Please do not leave it blank'
    } else if (text.length < 3) {
        myError = 'PassWord is not true. Try Again!'
    } else {
        myError = ''
    }
    return myError
}
export const IsCheckEmail = (text) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]$/;
    if (text === '') {
        myError = 'Please do not leave it blank'
    } else if (!regexEmail.test(text)) {
        myError = 'PassWord is not true. Try Again!'
    } else {
        myError = ''
    }
    return myError
}
export const IsFullName = (text) => {
    let myError = ''
    if (text === '') {
        myError = 'Please do not leave it blank'
    }
    return myError
}
export const IsRePassWord = (text, passWord) => {
    let myError = ''
    if (text === '') {
        myError = 'Please do not leave it blank'
    } else if (text !== passWord) {
        myError = 'Re-enter the wrong password'
    } else {
        myError = ''
    }
    return myError
}
