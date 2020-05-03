import React, {useState} from 'react'
import {Panel, Root, View} from '@vkontakte/vkui'
import {ProfilePage, MainPage} from '../../pages'

export const Routing = React.memo(() => {
    const [activeView, setActiveView] = useState('home')
    const [activePanel] = useState('home')
    return (
            <Root activeView={activeView}>

                {/** Основной сценарий */}
                <View id={'home'} activePanel={activePanel}>

                    {/** Основная страница */}
                    <Panel id={'home'}>
                        <MainPage handleView={setActiveView}/>
                    </Panel>
                </View>

                {/** Страница профиля */}
                <View id={'profile'} activePanel={activePanel}>
                    {/** Страница профиля */}
                    <Panel id={'profile'}>
                        <ProfilePage/>
                    </Panel>
                </View>
            </Root>
    )
})
