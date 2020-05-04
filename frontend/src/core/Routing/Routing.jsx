import React, {useContext} from 'react'
import {Panel, Root, View} from '@vkontakte/vkui'
import {ZoomPage, ProfilePage, MainPage, UsefulPage, RatingPage, StorePage, ProspectsPage, SettingsPage,CreateLessonPage,CreateClassPage, InfoClassPage, InfoLessonPage} from '../../pages'
import {PageContext} from '../context/Page'


export const Routing = React.memo(() => {
    const {pageName, panelName} = useContext(PageContext)

    return (
        <Root activeView={pageName}>

            {/** Основной сценарий */}
            <View id={'home'} activePanel={panelName}>

                {/** Основная страница */}
                <Panel id={'home'}>
                    <MainPage/>
                </Panel>
            </View>

            {/** Сценарий интересного */}
            <View id={'useful'} activePanel={panelName}>

                {/** Страница интересного */}
                <Panel id={'useful'}>
                    <UsefulPage/>
                </Panel>
            </View>

            {/** Сценарий профиля */}
            <View id={'profile'} activePanel={panelName}>

                {/** Страница профиля */}
                <Panel id={'profile'}>
                    <ProfilePage/>
                </Panel>

                {/** Страница настроек */}
                <Panel id={'settings'}>
                    <SettingsPage/>
                </Panel>
            </View>

            {/** Сценарий рейтинга */}
            <View id={'rating'} activePanel={panelName}>

                {/** Страница рейтинга */}
                <Panel id={'rating'}>
                    <RatingPage/>
                </Panel>
            </View>

            {/** Сценарий магазина */}
            <View id={'store'} activePanel={panelName}>

                {/** Страница магазина */}
                <Panel id={'store'}>
                    <StorePage/>
                </Panel>
            </View>

            {/** Сценарий zoom-zoom */}
            <View id={'zoom'} activePanel={panelName}>

                {/** Страница zoom */}
                <Panel id={'zoom'}>
                    <ZoomPage/>
                </Panel>

                <Panel id={'zoom-lesson'}>
                    <CreateLessonPage/>
                </Panel>

                <Panel id={'zoom-class'}>
                    <CreateClassPage/>
                </Panel>

                <Panel id={'zoom-info-lesson'}>
                    <InfoLessonPage/>
                </Panel>

                <Panel id={'zoom-info-class'}>
                    <InfoClassPage/>
                </Panel>
      
            </View>

            {/** Сценарий перспектив */}
            <View id={'prospects'} activePanel={panelName}>

                {/** Страница перспектив */}
                <Panel id={'prospects'}>
                    <ProspectsPage/>
                </Panel>
            </View>
        </Root>
    )
})
