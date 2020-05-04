import React, {useState} from 'react'
import {Header, Footer} from '../../core/components'
import {zoom} from '../../shared/img'
import axios from 'axios-jsonp-pro'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import style from './CreateLessonPage.module.sass'

export const CreateLessonPage = React.memo(() => {

    const [activeEmail, setEmail] = useState('')
    const [activeTopic, setTopic] = useState('')
    const [activeDate, setDate] = useState('')

    function createLesson() {
        console.log(activeEmail)
        // let userId = "BbERJ4OZS1KDFOSHdZglNw";
        // let token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6InlXQ1Z6YUxSU3JtVlJsQktPTjBqTUEiLCJleHAiOjE1ODkxMjE0OTQsImlhdCI6MTU4ODUxNjY5OH0.iB-wYBxEzDTsNLZBAfcZl8hfccYpZlRffuYbKyQcNVQ";
        let urlUsers = 'https://skynets.space/users'
        let usersId = 'BbERJ4OZS1KDFOSHdZglNw'

        axios.get(urlUsers)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    function changeEmail(e) {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    function changeTopic(e) {
        setTopic(e.target.value)
        console.log(e.target.value)
    }

    function changeDate(e) {
        setDate(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <Header title={'Создаем урок'} background={'cyan'} icon={zoom}/>
            <div className={style.createLesson}>

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
                        top="Тема занятия"/>

                    <Input
                        value={activeDate}
                        onChange={(e) => changeDate(e)}
                        type="date"
                        top="Дата начала урока"/>


                    <Button size="xl" onClick={createLesson}>Создать урок</Button>

                </FormLayout>

            </div>
            <Footer/>
        </>
    )
})

