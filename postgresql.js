const { Pool } = require('pg')

class PgSQL {

  constructor (config) {
    this._config = config
  }

  setConfig (config) {
    this._config = config
  }

  exec (sql) {
    return new Promise((resolve, reject) => {
      const pool = new Pool(this._config)
      pool.query(sql, (err, result) => {
        pool.end()
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }

}

module.exports = {
  pgSql: new PgSQL(),
  PgSQL,
}
