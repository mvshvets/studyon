import React, { useState } from 'react'
import { Header, Footer } from '../../core/components'
import { zoom } from '../../shared/img'
import axios from 'axios-jsonp-pro'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Link from '@vkontakte/vkui/dist/components/Link/Link'
import style from './CreateLessonPage.module.sass'

export const CreateLessonPage = React.memo(() => {

    const [activeEmail, setEmail] = useState('')
    const [activeTopic, setTopic] = useState('')
    const [activeDate, setDate] = useState('')
    const [activeConference, setConference] = useState(null)

    function createLesson() {
       
        let urlMeting = 'https://skynets.space/meetings';

        const data = new FormData()
        data.append('topic', activeTopic)
        data.append('start_time', activeDate + "T00:00:00Z")

        axios.post(urlMeting, data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                setConference(res.data.join_url);
                console.log(res.data.join_url);
            })

    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    function changeTopic(e) {
        setTopic(e.target.value)
    }

    function changeDate(e) {
        setDate(e.target.value)

    }

    return (
        <>
            <Header title={'Создаем урок'} background={'cyan'} icon={zoom} />
            <div className={style.createLesson}>
                
                {activeConference == null &&
                <FormLayout>

                    <Input
                        type="email"
                        top="E-mail"
                        name="email"
                        value={activeEmail}
                        onChange={(e) => changeEmail(e)}
                        status={activeEmail ? 'valid' : 'error'}
                        bottom={activeEmail ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'}
                    />

                    <Input
                        value={activeTopic}
                        onChange={(e) => changeTopic(e)}
                        top="Тема занятия" />

                    <Input
                        value={activeDate}
                        onChange={(e) => changeDate(e)}
                        type="date"
                        top="Дата начала урока" />


                    <Button size="xl" onClick={createLesson}>Создать урок</Button>

                </FormLayout>
                }
                
                {activeConference != null &&
                    <Div>
                        <h1>Ссылка на конференцию: {activeConference}</h1>
                        <Link href={activeConference} target="_blank">Перейти в конференцию</Link>
                    </Div>
                }
            </div>
            <Footer />
        </>
    )
})

