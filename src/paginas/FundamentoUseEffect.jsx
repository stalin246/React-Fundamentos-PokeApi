import React from 'react'
import FetchPoke from '../components/effect/FetchPoke'
import FetchUsers from '../components/effect/FetchUsers'
import IntroUseEffect from '../components/effect/IntroUseEffect'
import Time from '../components/effect/Time'


const FundamentoUseEffect = () => {
  return (
    <>
    {/*   <IntroUseEffect/>
      <Time/>
      <FetchUsers/> */}
      <FetchPoke/>
    </>
  )
}

export default FundamentoUseEffect