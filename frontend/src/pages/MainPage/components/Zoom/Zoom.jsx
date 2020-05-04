import React, {useCallback, useContext} from 'react'
import style from './Zoom.module.sass'
import {zoom} from '../../../../shared/img'
import {H1, H3, Button} from '../../../../shared/components'
import {PageContext} from '../../../../core/context'

export const Zoom = React.memo(() => {
	const { setPageName, setPanelName } = useContext(PageContext)

	const setNavigation = useCallback(id => {
		setPageName(id)
		setPanelName(id)
	}, [setPageName, setPanelName])

	return (
		<div className={style.zoom}>
			<img src={zoom} alt={'Zoom'}/>
			<div className={style.zoom__text}>
				<H3 text={'Будь всегда на связи.'}/>
			</div>
			<Button text={<H1 text={'ZOOM-ZOOM'}/>} className={style.zoom__button} onClick={setNavigation} view={'zoom'}/>
		</div>)
})