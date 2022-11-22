import express from 'express';
import { GetDeparts }  from '../controllers/DepartsController.js';
import { GetAPS } from '../controllers/APSController.js';


const router = express.Router();

router.get(`/`,GetDeparts)
router.get(`/ActionPrioritySecret`,GetAPS)







export default router