import express from 'express';
import { GetUser , SetCurrentUser ,DeleteCurrentUser,GetCurrentUser,GiveTemp,HasMyAuth,UpdateCurrentUser}  from '../controllers/UsersController.js';


const router = express.Router();

router.get(`/`,GetUser)
router.post(`/CurrentUser`,SetCurrentUser)
router.get(`/CurrentUser`,GetCurrentUser)
router.get(`/HasMyAuth`,HasMyAuth)
router.delete(`/CurrentUser`,DeleteCurrentUser)
router.patch(`/GiveTemp`,GiveTemp)
router.patch(`/UpdateCurrentUser`,UpdateCurrentUser)







export default router