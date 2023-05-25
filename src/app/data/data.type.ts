type Person = {
  first: string
  last: string
}

export type DataTypes = 'income' | 'outcome' | 'loan' | 'investment'

export type DataItem = {
  _id: string
  amount: number
  type: DataTypes
  name: Person
  company: string
  email: string
  phone: string
  address: string
}

export type Data = {
  total: number
  data: DataItem[]
}

export type cardTitlesType = {
  id: number
  title: DataTypes
}
