import React from 'react'

import { LOCALSTORAGE_TOKEN_NAME } from '../../config'
import LocalStorageUtils from '../../utils/LocalStorageUtils'
import Home from '../Home'
import Auth from '../auth'

const Authentication = () => {
    const user = LocalStorageUtils.getUser(LOCALSTORAGE_TOKEN_NAME)
    return user === '' ? <Auth /> : <Home />
}
export default Authentication
