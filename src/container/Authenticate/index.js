import React from 'react'

import { LOCALSTORAGE_TOKEN_NAME } from './../../config'
import LocalStorageUtils from './../../utils/LocalStorageUtils'
import Home from './../Home'
import Authentication from './../auth'

const Authenticate = () => {
    const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME)
    return !user ? <Authentication /> : <Home />
}
export default Authenticate
