import React from 'react'
import {Header} from '../../core/components'
import {student} from '../../shared/img'
import {StubPage} from '..'

export const ProfilePage = React.memo(() => {
    return (
        <div>
            <Header title={'ПРОФИЛЬ'} background={'purple'} icon={student} isSettings/>
            <StubPage/>
        </div>
    )
})

