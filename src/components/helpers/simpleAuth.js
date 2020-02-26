import Settings from './Settings'

const isAuthenticated = () => {
    return sessionStorage.getItem(Settings.token_name) !== null
}

const login = credentials => {
    return fetch(`${Settings.remote_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(response => {
        // console.log('login', response)
        if ('valid' in response && response.valid && 'token' in response) {
            sessionStorage.setItem(Settings.token_name, response.token)
            return true
        }
    })
}

const register = userInfo => {
    return fetch(`${Settings.remote_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => {
        if (response.status === 500){
            window.alert('Username taken. Please use a different one.')
        }
        // console.log(response)
        return response.json()
    })
    .then(response => {
        // console.log('register', response)
        if ('token' in response){
            sessionStorage.setItem(Settings.token_name, response.token)
            return true
        }
    })
}

const logout = () => {
    sessionStorage.removeItem(Settings.token_name)
}

export { isAuthenticated, login, logout, register }