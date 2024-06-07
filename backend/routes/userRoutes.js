import express from 'express';
import { authUser ,logUser,regUser,updateUser,getUser} from '../controller/userController.js'; 
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', authUser);
router.post('/register', regUser);
router.post('/logout', logUser);
router.route('/profile' )
.get(authenticateToken ,getUser)
.put(authenticateToken ,updateUser);


export default router;
