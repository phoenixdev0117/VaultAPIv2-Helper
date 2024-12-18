import express from "express";
import bankController from "../controllers/bank/bankController.mjs";
const router = express.Router();

// not working at all
// 403 ERROR
router.get("/", bankController.getUserBankAccount);
router.post("/create", bankController.createUserBankAccount);
router.get("/uuid/:uuid", bankController.getBankAccountByUuid);
router.delete("/delete/:uuid", bankController.deleteBankAccountByUuid);

export default router;
