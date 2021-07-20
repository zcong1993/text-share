import { Share } from '../../components/share'
import { listShares } from '../../db/fauna'
import { config } from '../../config'

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

  const data = await listShares(shareId)

  return {
    props: {
      shareId,
      data
    }
  }
}
