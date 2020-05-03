import React from 'react'
import { NotImplementedError } from '../../errors'

export const PageContext = React.createContext({
    pageName: null,
    setPageName: (pageName) => {
        throw new NotImplementedError()
    },
})
