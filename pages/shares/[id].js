import { Share } from '../../components/share'
import { config } from '../../config'
import { db } from '../../db'

const SharePage = ({ shareId, data }) => {
  return (
    <Share shareId={shareId} data={data}/>
  )
}

export default SharePage

export async function getServerSideProps(ctx) {
  const shareId = ctx.query.id

  if (!config.SHARES_WHITELIST.includes(shareId)) {
    return {
      notFound: true
    }
  }

  const data = await db.listShares(shareId)

  return {
    props: {
      shareId,
      data
    }
  }
}
