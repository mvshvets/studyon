import React, {useContext} from 'react'
import style from './Store.module.sass'
import {store} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'
import {PageContext} from '../../../../core/context/Page'

export const Store = React.memo(() => {
	const { setPageName } = useContext(PageContext)

	return (
		<div className={style.store}>
			<img src={store} alt={'Магазин'}/>
			<div className={style.store__text}>
				<H3 text={'Покупать легко. Трудно только платить.'}/>
			</div>
			<Button text={<H1 text={'МАГАЗИН'}/>} className={style.store__button} onClick={setPageName} id={'store'}/>
		</div>)
})