import jwt_decode from 'jwt-decode'

import { LOCALSTORAGE_TOKEN_NAME } from './../config'

class LocalStorageUtils {
    // get item
    getItem(key, defaultValue = '""') {
        if (typeof localStorage === 'undefined') {
            return undefined
        }
        let item = LocalStorageUtils.getItem(key)
        if (item && item === 'undefined') {
            item = defaultValue
        }
        return JSON.parse(item)
    }
    // set item
    setItem(key, value = '') {
        if (typeof localStorage !== undefined) {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }
    // delete Item
    removeItem(key) {
        if (typeof localstorage !== 'undefined') {
            localStorage.removeItem(key)
        }
    }
    //function on user change
    getUser() {
        if (typeof localStorage !== 'undefined') {
            const token = this.getItem(LOCALSTORAGE_TOKEN_NAME)
            if (token) {
                try {
                    // jwt_decode(token)
                    return jwt_decode(token)
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        this.deleteUser()
                    }
                }
            }
        }
    }
    deleteUser() {}
    clearUser() {}
}

export default new LocalStorageUtils()
