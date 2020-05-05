import React, {useState} from 'react'
import {piggy_bank_yellow} from './img'
import style from './HintModal.module.sass'
import {Text14, H3} from '../../../../../../shared/components'

export const HintModal = React.memo(() => {
    const [activeModal, setActiveModal] = useState(null)

    return (
        <div className={style.piggyBank}>
            <div className={style.piggyBank__text}>
                <H3 text={'МОНЕТЫ...'}/>
                <Text14
                    text={'...можно получить за активности на образовательных площадках: 1. Три дня активности подряд - 15 монет 2. Решить больше 30 задач за день - 25 монет 3. Начать новый курс - 1 монета 4. Завершить курс - 50 монет можно потратить на разные приятности'}/>
                <Text14 text={'в магазине'}/>
            </div>
            <img src={piggy_bank_yellow} alt={'Копилка'} className={style.piggyBank__piggy}/>
        </div>
    )
})

