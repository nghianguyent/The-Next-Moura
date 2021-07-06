import { useState, useEffect } from 'react'

import LocalStorageUtils from './LocalStorageUtils'

export const usePersistedState = (key, defaultvalue) => {
    const [state, setState] = useState(() => LocalStorageUtils.getUser(key) || defaultvalue)
    useEffect(() => {
        LocalStorageUtils.setItem(key, state)
    }, [key, state])
    return [state, setState]
}
