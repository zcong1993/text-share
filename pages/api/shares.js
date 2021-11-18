// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from '../../db'

const handleCreate = async (shareId, data, res) => {
  const r = await db.createShare({
    shareId,
    ...data,
  })

  res.status(200).json(r)
}

const handleList = async (shareId, res) => {
  const r = await db.listShares(shareId)
  res.status(200).json(r)
}

const handleDelete = async (shareId, id, res) => {
  const r = await db.deleteShare(shareId, id)
  res.status(200).json(r)
}

export default function helloAPI(req, res) {
  if (!req.query.shareId) {
    return res.status(404).json({ message: 'missing query.shareId' })
  }

  if (req.method === 'POST') {
    return handleCreate(req.query.shareId, req.body, res)
  }

  if (req.method === 'GET') {
    return handleList(req.query.shareId, res)
  }

  if (req.method === 'DELETE') {
    if (!req.query.id) {
      return res.status(404).json({ message: 'missing query.id' })
    }

    return handleDelete(req.query.shareId, req.query.id, res)
  }

  res.status(405).json({ message: 'method not allowed' })
}
