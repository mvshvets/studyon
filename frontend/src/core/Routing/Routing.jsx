import React, {useContext} from 'react'
import {Panel, Root, View} from '@vkontakte/vkui'
import {ZoomPage, ProfilePage, MainPage} from '../../pages'
import {PageContext} from '../context/Page'

export const Routing = React.memo(() => {
    const {pageName} = useContext(PageContext)

    return (
        <Root activeView={pageName}>

            {/** Основной сценарий */}
            <View id={'home'} activePanel={pageName}>

                {/** Основная страница */}
                <Panel id={'home'}>
                    <MainPage/>
                </Panel>
            </View>

            {/** Сценарий профиля */}
            <View id={'profile'} activePanel={pageName}>

                {/** Страница профиля */}
                <Panel id={'profile'}>
                    <ProfilePage/>
                </Panel>
            </View>

            {/** Сценарий zoom-zoom */}
            <View id={'zoom'} activePanel={pageName}>

                {/** Страница zoom */}
                <Panel id={'zoom'}>
                    <ZoomPage/>
                </Panel>

                <Panel id={'zoom-lesson'}>
                    <ZoomPage/>
                </Panel>

            </View>
        </Root>
    )
})
