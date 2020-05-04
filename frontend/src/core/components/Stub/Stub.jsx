import React from 'react'
import style from './Stub.module.sass'

export const Stub = React.memo(() => {
    return (
        <div className={style.stub}>
            <h1>Раздел в разработке</h1>
        </div>
    )
})

