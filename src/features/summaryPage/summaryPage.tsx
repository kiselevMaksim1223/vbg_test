import React, { FC } from 'react'

import { cardTitlesType, Data } from '../../app/data/data.type'

import { CardsList } from './cardsList/cardsList'
import { HeadingCard } from './headingCard/headingCard'

type SummaryPageType = {
  fullData: Data
  cardTitles: cardTitlesType[]
}

const SummaryPage: FC<SummaryPageType> = ({ fullData, cardTitles }) => {
  const { total, data } = fullData

  return (
    <section className="container mx-auto">
      <HeadingCard totalCount={total} />
      <CardsList data={data} cardTitles={cardTitles} />
    </section>
  )
}

export default SummaryPage
