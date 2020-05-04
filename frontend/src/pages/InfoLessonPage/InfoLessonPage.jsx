import React, {useEffect,useState} from 'react'
import {Header, Footer, Stub} from '../../core/components'
import {zoom} from '../../shared/img'
import axios from 'axios-jsonp-pro'
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner'
import List from '@vkontakte/vkui/dist/components/List/List'
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell'
import Icon24DoneOutline from '@vkontakte/icons/dist/24/done_outline';
import style from './InfoLessonPage.module.sass'

export const InfoLessonPage = React.memo(() => {

    const [activeConferens, setConference] = useState([])

	useEffect(() => {
        
        axios.get("https://skynets.space/list")
            .then(res => { // then print response status
                console.log(res.data.meetings);
                setConference(res.data.meetings);
            })

	}, []);

    return (
        <>
            <Header title={'Список уроков'} background={'cyan'} icon={zoom}/>
            <div className={style.infoLesson}>
            {activeConferens.length == 0 &&
				<ScreenSpinner />	
			}
             {activeConferens.length != 0 &&
                <List>    
                {activeConferens.map((item, i) => (
                    <Cell before={<Icon24DoneOutline />}description={item.start_time.split('T')[0]}>{item.topic}</Cell>
                ))}
                </List>
			}
            </div>
            <Footer/>
        </>
    )
})

