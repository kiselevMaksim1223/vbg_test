import React, { FC, useState } from 'react'

import { Link, useSearchParams } from 'react-router-dom'

import { cardTitlesType, Data } from '../../app/data/data.type'
import { capitalizedFirstLetter } from '../../common/utils/capitalizedFirstLetter'

import { Tab } from './tab/tab'
import { Table } from './table/table'

type ListPageType = {
  fullData: Data
  cardTitles: cardTitlesType[]
}

export const ListPage: FC<ListPageType> = ({ cardTitles, fullData }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const params = Object.fromEntries(searchParams) //get query params as obj
  const [activeTab, setActiveTab] = useState(params.tab)

  const itemType = cardTitles.find(item => item.id == +params.tab) //get the required object for filtering
  const filteredData = fullData.data.filter(item => itemType && item.type === itemType.title)

  const onClickTabHandler = (tab: string) => {
    setActiveTab(tab)
    setSearchParams({ tab })
  }

  return (
    <>
      <Link
        to={'/'}
        className="block w-20 mt-4 mb-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-center"
      >
        <p>Back</p>
      </Link>
      <section className="container mx-auto">
        <div className="flex border-b border-gray-500 mb-4">
          {cardTitles.map(i => {
            return (
              <Tab
                key={i.id}
                label={capitalizedFirstLetter(i.title)}
                isActive={activeTab === i.id.toString()}
                onClick={() => onClickTabHandler(i.id.toString())}
              />
            )
          })}
        </div>
        <Table filteredData={filteredData} />
      </section>
    </>
  )
}
