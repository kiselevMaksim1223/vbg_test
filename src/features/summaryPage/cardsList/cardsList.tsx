import React, { FC } from 'react'

import { cardTitlesType, DataItem } from '../../../app/data/data.type'
import { Card } from '../card/card'

type CardsListType = {
  data: DataItem[]
  cardTitles: cardTitlesType[]
}

export const CardsList: FC<CardsListType> = ({ data, cardTitles }) => {
  return (
    <div className="flex flex-wrap justify-between gap-5">
      {cardTitles.map((cardTitle, index) => {
        return <Card key={index} cardsData={data} cardTitle={cardTitle} />
      })}
    </div>
  )
}
