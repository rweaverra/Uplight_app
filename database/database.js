const savings = require('./functions.js')
const { Pool } = require('pg')

const pool = new Pool({
    database: 'uplight',
    port: 5432,
});


async function queryPeakUsage(accountNumber) {
try {
  const text = `
  SELECT account_number, accounts.building_id, hour, kwh_usage
    FROM accounts
    INNER JOIN homes_data
    ON homes_data.building_id = accounts.building_id
    WHERE account_number = '${accountNumber}'
    ORDER BY kwh_usage DESC;`

  const res = await pool.query(text)
  let usage = Math.round(res.rows[0].kwh_usage * 10) / 10;
  console.log(`results of querfyPeakUsage: \n Account Number: ${res.rows[0].account_number}\n Peak Usage: ${usage}kWh at ${res.rows[0].hour}:00 \n`);

} catch (err) {
  console.log('error', err)
}
}

// queryPeakUsage(42754);



async function expectedSavingsQuery(accountNumber) {
  try {
    const text = `SELECT account_number, accounts.building_id, hour, kwh_usage
    FROM accounts
    INNER JOIN homes_data
    ON homes_data.building_id = accounts.building_id
    WHERE account_number = '${accountNumber}'
      AND hour > 12 AND hour < 19;`

    const res = await pool.query(text)

    var results = res.rows
    var totalSavings = savings.calculateSavings(results);
    console.log(`Expected daily energy savings for account(${accountNumber}): ${totalSavings} kWh \n`)


  } catch(err) {
    console.log('error', err)
  }
}

expectedSavingsQuery(42754);



module.exports = {
  queryPeakUsage,
  expectedSavingsQuery
};

