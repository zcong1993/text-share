export const config = {
  FAUNADB_SECRET: process.env.FAUNADB_SECRET,
  SHARES_WHITELIST: process.env.SHARES_WHITELIST ? process.env.SHARES_WHITELIST.split(',').map(s => s.trim()) : []
}
