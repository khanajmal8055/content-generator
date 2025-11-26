import { Router } from "express";
import {contentGeneration } from "../Controllers/generator.controllers.js"

const router = Router()

router.route('/content').post(contentGeneration)

export default router