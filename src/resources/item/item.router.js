<<<<<<< Updated upstream
import { Router } from 'express'

const router = Router()

export default router
=======
import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

// /api/item
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
>>>>>>> Stashed changes
