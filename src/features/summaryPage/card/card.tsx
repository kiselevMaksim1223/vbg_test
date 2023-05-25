import React, { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { cardTitlesType, DataItem } from '../../../app/data/data.type'
import { Button } from '../../../common/components/button/button'
import { capitalizedFirstLetter } from '../../../common/utils/capitalizedFirstLetter'

import s from './card.module.scss'

export type CardsDataType = {
  cardsData: DataItem[]
  cardTitle: cardTitlesType
}

export const Card: FC<CardsDataType> = ({ cardsData, cardTitle }) => {
  const filteredData = cardsData.filter(item => item.type === cardTitle.title)
  const navigate = useNavigate()
  const upperTitle = capitalizedFirstLetter(cardTitle.title)

  const onClickNavigate = () => {
    navigate(`navigator?tab=${cardTitle.id}`)
  }

  return (
    <div className={s.card}>
      <h2 className={s.heading}>{filteredData.length}</h2>
      <p className={s.subtitle}>{upperTitle}</p>
      <div className={s.buttonContainer}>
        <Button title={'See all'} callback={onClickNavigate} />
      </div>
    </div>
  )
}
