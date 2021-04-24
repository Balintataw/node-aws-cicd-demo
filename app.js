// Load the AWS SDK
const AWS = require('aws-sdk')
const path = require('path')
const express = require('express')
const ejs = require('ejs');

// Set region for AWS SDKs
AWS.config.region = process.env.REGION

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'Jossendal Development & Elastic Beanstalk on AWS'
  })
  res.status(200).end()
})

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`)
})
