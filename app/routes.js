const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/', (req, res) => {
  res.redirect('/new')
})

router.post('/new/email-address', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/name')
  }
})

router.post('/new/name', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/juggling-balls')
  }
})

router.post('/new/juggling-balls', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/juggling-trick')
  }
})

router.post('/new/juggling-trick', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/check')
  }
})

router.post('/new/check', (req, res) => {
  req.session.data.new = {};
  res.redirect('/new/confirmation')
})