import React from 'react'

import { useHistory } from 'react-router-dom'

import LocalStorageUtils from '../../utils/LocalStorageUtils'

const Home = () => {
    const history = useHistory()
    const user = LocalStorageUtils.getUser('token')
    const logout = () => {
        LocalStorageUtils.deleteUser()
        history.push('/')
    }
    return (
        <div>
            Logined
            <div>{JSON.stringify(user)}</div>
            <button onClick={logout}> log out</button>
        </div>
    )
}
export default Home
