import React from 'react'
import { NotImplementedError } from '../../errors'

export const DocumentTitleContext = React.createContext({
    updateTitle: (newTitle) => {
        throw new NotImplementedError()
    },
})
