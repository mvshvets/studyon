import React from 'react'
import {piggy_bank, hint_icon} from './img'
import style from './PiggyBank.module.sass'
import {ButtonIcon, Text14, Text18} from '../../../../shared/components'

export const PiggyBank = React.memo(props => {

    return (
        <div className={style.piggyBank}>
            <div className={style.piggyBank__text}>
                <Text14 text={'В вашей копилке:'}/>
                <div>
                    <Text18 text={`${'0'} монет`}/>
                    <Text18 text={'(чеканных)'}/>
                </div>
            </div>
            <img src={piggy_bank} alt={'Копилка'} className={style.piggy}/>
            <ButtonIcon icon={hint_icon} onClick={props.setActiveModal} alt={'Подсказка'} className={style.piggyBank__hint} view={'MODAL_CARD_MONEY_SEND'} size={23}/>
        </div>
    )
})

