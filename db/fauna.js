import { Client, query } from 'faunadb'
import { config } from '../config'

const { Map, Paginate, Match, Lambda, Get, Var, Index, Delete, Create, Ref, Collection } = query

const toShareData = (faunaData) => {
  return {
    id: faunaData.ref.id,
    ...faunaData.data
  }
}

export const client = new Client({
  secret: config.FAUNADB_SECRET,
  keepAlive: false,
})

export const createShare = async (data) => {
  const r = await client.query(
    Create(
      Collection('shares'), { data }
    )
  )

  return toShareData(r)
}

export const listShares = async (shareId) => {
  const { data } = await client.query(Map(
    Paginate(
      Match(Index("shareId"), shareId)
    ),
    Lambda("X", Get(Var("X")))
  ))

  return data.reverse().map(toShareData)
}

export const deleteShare = async (shareId, id) => {
  return client.query(
    Delete(
      Ref(Collection('shares'), id)
    )
  )
}
