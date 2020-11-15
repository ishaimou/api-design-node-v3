import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

const port = 3000

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/', (req, res) => {
  res.json({ data: 'api' })
})

router.get('/test', (req, res) => {
  res.json({ data: 'test' })
})

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({ data: 1 })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

export const start = () => {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })
}
