const express = require('express')

const host = require('./data/host.json')
const booking = require('./data/booking.json')
const shopping = require('./data/shopping.json')
const dashboard = require('./data/dashboard.json')

const app = express()
const port = normalizePort(process.env.PORT || '3000');

app.use('/bundles',express.static(path.join(__dirname, 'public')));
app.get('/host', (req, res) => {
    const platform = req.query.platform
    const appVersion = req.query.appVersion

    res.json(host[platform][appVersion])
})
app.get('/booking', (req, res) => {
    const platform = req.query.platform
    const appVersion = req.query.appVersion

    res.json(booking[platform][appVersion])
})
app.get('/shopping', (req, res) => {
    const platform = req.query.platform
    const appVersion = req.query.appVersion

    res.json(shopping[platform][appVersion])
})
app.get('/dashboard', (req, res) => {
    const platform = req.query.platform
    const appVersion = req.query.appVersion

    res.json(dashboard[platform][appVersion])
})
app.set('port', port);
app.listen(port, () => {
    console.log(`[CatalogServer] Server listening at port ${port} `)
})
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }