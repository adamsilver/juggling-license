const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/new/email-address', (req, res) => {
  res.redirect('/new/code')
})

router.post('/new/code', (req, res) => {
  res.redirect('/new/name')
})

router.post('/new/name', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/country')
  }
})

router.post('/new/country', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/juggling-balls')
  }
})

router.post('/new/juggling-balls', (req, res) => {
  if(req.body.new.numberOfBalls == 'None - I cannot juggle') {
    res.redirect('/new/not-eligible')
  } else {
    if(req.query.returnUrl) {
      res.redirect(`${req.query.returnUrl}`)
    } else {
      res.redirect('/new/juggling-trick')
    }
  }
})

router.post('/new/juggling-trick', (req, res) => {
  if(req.query.returnUrl) {
    res.redirect(`${req.query.returnUrl}`)
  } else {
    res.redirect('/new/juggling-objects')
  }
})

router.post('/new/juggling-objects', (req, res) => {
  res.redirect('/new/check')
})

router.post('/new/check', (req, res) => {
  req.session.data.new = {};
  res.redirect('/new/confirmation')
})