import React from 'react'
import {Header} from '../../core/components'
import {setting} from '../../shared/img'
import {StubPage} from '..'

export const SettingsPage = React.memo(() => {
    return (
        <div>
            <Header title={'НАСТРОЙКИ'} background={'red'} icon={setting}/>
            <StubPage/>
        </div>
    )
})

