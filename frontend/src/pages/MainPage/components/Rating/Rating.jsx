import React, {useContext} from 'react'
import style from './Rating.module.sass'
import {rating} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'
import {PageContext} from '../../../../core/context/Page'

export const Rating = React.memo(() => {
	const { setPageName } = useContext(PageContext)

	return (
		<div className={style.rating}>
			<img src={rating} alt={'Рейтинг'}/>
			<div className={style.rating__text}>
				<H3 text={'Быстрее. Выше. Умнее.'}/>
			</div>
			<Button text={<H1 text={'РЕЙТИНГ'}/>} className={style.rating__button} onClick={setPageName} view={'rating'}/>
		</div>)
})