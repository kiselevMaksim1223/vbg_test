import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Header } from '../features/header/header'
import { ListPage } from '../features/listPage/listPage'
import SummaryPage from '../features/summaryPage/summaryPage'

import { fullData, titles } from './data/data'

export const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <div className="m-4">
          <Routes>
            <Route path={'/'} element={<SummaryPage fullData={fullData} cardTitles={titles} />} />
            <Route
              path={'/navigator'}
              element={<ListPage fullData={fullData} cardTitles={titles} />}
            />
          </Routes>
        </div>
      </main>
    </>
  )
}
