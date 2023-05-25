import React, { FC } from 'react'

import { DataItem } from '../../../app/data/data.type'

type TableType = {
  filteredData: DataItem[]
}

export const Table: FC<TableType> = ({ filteredData }) => (
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b-2 border-gray-500">Name</th>
        <th className="py-2 px-4 border-b-2 border-gray-500">Amount</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.map((item, index) => (
        <tr key={index} className="bg-gray-100 text-center">
          <td className="py-2 border-b border-gray-500 ">{`${item.name.first} ${item.name.last}`}</td>
          <td className="py-2 px-4 border-b border-gray-500">{item.amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
