import React, { useCallback, useContext, useEffect, useState } from 'react'

import { LoaderContext } from '..'
import { UserContext } from './UserContext'

export const UserContextProvider = React.memo(({ children }) => {
    const { setLoaderState } = useContext(LoaderContext)
    const [userData, setUserData] = useState(null)

    const onSetUserData = useCallback(
        (userData) => {
            setUserData(userData)
        },
        [setUserData]
    )

    /*const checkAuth = useCallback(async () => {
        if (userData) {
            return
        }

        try {
            setLoaderState(true)
            const user = await UsersService.getCurrent()
            setUserData(user)
        } catch (e) {
            console.log(e)
        } finally {
            setLoaderState(false)
        }
    }, [userData, setLoaderState, setUserData])

    useEffect(() => {
        checkAuth()
    }, [checkAuth])*/

    return (
        <UserContext.Provider value={{ userData, setUserData: onSetUserData }}>
            {userData && children}
        </UserContext.Provider>
    )
})
