export const config = {
  FAUNADB_SECRET: process.env.FAUNADB_SECRET,
  FAUNADB_COLLECTION: process.env.FAUNADB_COLLECTION,
  FAUNADB_SHARE_ID_INDEX: process.env.FAUNADB_SHARE_ID_INDEX,
  SHARES_WHITELIST: process.env.SHARES_WHITELIST ? process.env.SHARES_WHITELIST.split(',').map(s => s.trim()) : [],
  DATABASE_URL: process.env.DATABASE_URL,
  DB_TYPE: process.env.DB_TYPE === 'pg' ? 'pg' : 'fauna'
}
