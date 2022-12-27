import { Router } from 'express';
import { getRedes } from '../controllers/redes';


const router = Router();


router.get('/', getRedes );




export default router;