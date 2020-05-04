import React, { useContext, useCallback } from 'react'
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Icon28DocumentOutline from '@vkontakte/icons/dist/28/document_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import {zoom} from '../../shared/img'
import {Header} from '../../core/components'
import {PageContext} from '../../core/context'




export const ZoomPage = React.memo(() => {

    
    const { setPageName, setPanelName } = useContext(PageContext)
    

    const setLessons = useCallback(id => {
        setPanelName('zoom-lesson')
        console.log(id);
    }, [setPanelName])

    const setClass = useCallback(id => {
        setPanelName('zoom-class')
    }, [setPanelName])

    const setInfoLessons = useCallback(id => {
        setPanelName('zoom-info-lesson')
    }, [setPanelName])

    const setInfoClass = useCallback(id => {
        setPanelName('zoom-info-class')

    }, [setPanelName])



   


    return (
        <div>
            <Header title={'ZOOM-ZOOM'} background={'cyan'} icon={zoom}/>
            <Group>
                <Cell expandable before={<Icon28AddOutline />} onClick={setLessons} >
                    Создать урок
                </Cell>

                <Cell expandable before={<Icon28AddOutline />} onClick={setClass}>
                    Создать класс
                </Cell>

                <Cell expandable before={<Icon28DocumentOutline />} onClick={setInfoLessons} >
                    Информация по урокам
                </Cell>

                <Cell expandable before={<Icon28Users />} onClick={setInfoClass} >
                    Информация по классам
                </Cell>

            </Group>

          

        </div>

    )
})

