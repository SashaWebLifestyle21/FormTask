export const formatPhoneNumber = (value: string) => {
    if(!value) return value
    const phoneNumber = value.replace(/\D/g, '')
    if (phoneNumber.length < 4) return phoneNumber
    if(phoneNumber.length < 7) {
        return `(${phoneNumber.slice(0,3) }) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
}

export const validEmail = (email: string) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const validBirthday = (str: string) => {
    const parts = str.split('-')
    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10)
    const day = parseInt(parts[2], 10)

    return (year <= new Date().getFullYear() && month <= new Date().getMonth()+1 && day <= new Date().getDate())
}

export const validOnlyLetter = (str: string) => {
    return str.match(/^[A-Za-z]+$/)
}

export const validFirstLastName = (str: string) => {
    return str.match(/^[A-Za-zА-Яа-я]{3,30}\s[A-Za-zА-Яа-я]{3,30}$/gi)
}

export const validMessage = (str: string) => {
    return str.length >= 10 && str.length <=300
}