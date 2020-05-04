import React from 'react'
import {piggy_bank, hint_icon} from './img'
import style from './PiggyBank.module.sass'
import {Text14, Text18} from '../../../../shared/components'

export const PiggyBank = React.memo(() => {

    return (
        <div className={style.piggyBank}>
            <div className={style.piggyBank__text}>
                <Text14 text={'В вашей копилке:'}/>
                <div>
                    <Text18 text={`${'0'} монет`}/>
                    <Text18 text={'(чеканных)'}/>
                </div>
            </div>
            <img src={piggy_bank} alt={'Копилка'} className={style.piggyBank__piggy}/>
            <img src={hint_icon} alt={'Подсказка'} className={style.piggyBank__hint}/>
        </div>
    )
})

