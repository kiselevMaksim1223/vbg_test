import React, { FC } from 'react'

import { Button } from '../../../common/components/button/button'

import s from './headingCard.module.scss'

type HeadingCardType = {
  totalCount: number
}

export const HeadingCard: FC<HeadingCardType> = ({ totalCount }) => {
  return (
    <div className={s.headingCard}>
      <div className={s.topContent}>
        <h2 className={s.heading}>Welcome</h2>
        <p>This is the main page of this APP</p>
        <div className={s.buttonContainer}>
          <Button title={'See transaction'} />
        </div>
      </div>
      <div className={s.transactionInfo}>
        <h3>You have {totalCount} transactions in total</h3>
      </div>
    </div>
  )
}
