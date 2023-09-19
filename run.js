
const fs = require('fs');

const data = fs.readFileSync('./invoices.csv', 'utf8');

console.log(data);
