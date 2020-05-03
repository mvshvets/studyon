import React from 'react';
import style from './Zoom.module.sass'
import {zoom} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'

export const Zoom = React.memo(() => {

	return (
		<div className={style.zoom}>
			<img src={zoom} alt={'Zoom'}/>
			<div className={style.zoom__text}>
				<H3 text={'Будь всегда на связи.'}/>
			</div>
			<Button text={<H1 text={'ZOOM-ZOOM'}/>} className={style.zoom__button}/>
		</div>)
})