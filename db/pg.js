import { PrismaClient } from '@prisma/client'

export class Pg {
  constructor() {
    this.client = new PrismaClient()
  }

  async createShare(data) {
    return this.client.share.create({ data })
  }

  async listShares(shareId) {
    const res = await this.client.share.findMany({
      where: {
        shareId,
        deletedAt: null
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // todo: remove json convert will cause getServerSideProps error
    return JSON.parse(JSON.stringify(res))
  }

  async deleteShare(shareId, id) {
    await this.client.share.update({
      where: {
        id: parseInt(id, 10)
      },
      data: {
        deletedAt: new Date()
      }
    })
  }
}
