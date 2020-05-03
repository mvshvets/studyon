import React, {useState} from 'react'
import {Panel, Root, View} from '@vkontakte/vkui'
import {Useful, Profile, Rating, Store, Zoom, Prospects} from './panels'

const App = () => {
    const [activeView] = useState('home')
    const [activePanel, setActivePanel] = useState('useful')
    return (
        <Root activeView={activeView}>

            {/** Основной сценарий */}
            <View id="home" activePanel={activePanel}>

                {/** 'Полезное' */}
                <Panel id={'useful'}>
                    <Useful id={activePanel}/>
                </Panel>

                {/** 'Профиль' */}
                <Panel id={'profile'}>
                    <Profile id={activePanel}/>
                </Panel>

                {/** 'Рейтинг' */}
                <Panel id={'rating'}>
                    <Rating/>
                </Panel>

                {/** 'Магазин' */}
                <Panel id={'store'}>
                    <Store/>
                </Panel>

                {/** 'Zoom-zoom' */}
                <Panel id={'zoom'}>
                    <Zoom/>
                </Panel>

                {/** 'Перспективы' */}
                <Panel id={'prospects'}>
                    <Prospects/>
                </Panel>

            </View>
        </Root>
    )
}

export default App

