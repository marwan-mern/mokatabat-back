import express from 'express';
import { SetIncome ,CheckIncomeNo,GetIncomes,SetAssignedIncome,GetAssignedIncome,GetConsumerIncome,UpdateConsumerIncome,GetPdf}  from '../controllers/IncomesController.js';


const router = express.Router();

router.post(`/SetIncome`,SetIncome)
router.post(`/SetAssignedIncome`,SetAssignedIncome)
router.get(`/CheckIncomeNo?:Income_NO`,CheckIncomeNo)
router.get(`/GetIncomes`,GetIncomes)
router.get(`/GetPdf`,GetPdf)
router.get(`/GetAssignedIncome`,GetAssignedIncome)
router.get(`/GetConsumerIncome`,GetConsumerIncome)
router.patch(`/UpdateConsumerIncome`,UpdateConsumerIncome)









export default router