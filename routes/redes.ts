import { Router } from 'express';
import { actualizarRedes, obtenerRedes } from '../controllers/redes';


const router = Router();


router.get('/', obtenerRedes );
router.put('/:id', actualizarRedes );



export default router;