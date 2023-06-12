import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import router from "./auth.routes";

const router = Router()

router.get('/calendar', authRequired, )
router.get('/calendar', authRequired, )
router.get('/calendar', authRequired, )
router.get('/calendar', authRequired, )
router.get('/calendar', authRequired, )


export default router