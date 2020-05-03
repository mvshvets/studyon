import React, {useState} from 'react'
import {Panel, Root, View} from '@vkontakte/vkui'
import {MainPage} from './panels'

const App = () => {
    const [activeView] = useState('home')
    const [activePanel] = useState('home')
    return (
        <Root activeView={activeView}>
            {/** Основной сценарий */}
            <View id="home" activePanel={activePanel}>
                {/** Основная страница */}
                <Panel id={'home'}>
                    <MainPage/>
                </Panel>
            </View>
        </Root>
    )
}

export default App

