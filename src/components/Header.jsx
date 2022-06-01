import React from 'react'

import profileSymbol from '../media/profile-symbol.svg'
import BtnHeader from './BtnHeader'

function Header () {
  return <>
	<header>
		<div id="container-logo"></div>
			<BtnHeader className="header-btn selected" content="Dia" />
			<BtnHeader className="header-btn" content="Semana" />
			<BtnHeader className="header-btn" content="Mês" />
		<img src={profileSymbol} id='profile-pic' />
	</header>
  </>
}

export default Header
