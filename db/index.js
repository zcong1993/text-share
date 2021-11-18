import { config } from '../config'
import { Fauna } from './fauna'
import { Pg } from './pg'

let _db;

const getDb = () => {
  console.log(111)
  if (config.DB_TYPE === 'fauna') {
    return new Fauna(config)
  }

  return new Pg()
}

if (process.env.NODE_ENV === 'production') {
  _db = getDb()
} else {
  if (!global.db) {
    global.db = getDb()
  }

  _db = global.db;
}

export const db = _db

