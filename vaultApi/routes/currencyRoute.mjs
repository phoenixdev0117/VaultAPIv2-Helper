import express from "express";
import tokenController from "../controllers/currency/tokenController.mjs"
import accountController from "../controllers/currency/accountController.mjs"
import blockchainListController from "../controllers/currency/blockchainListController.mjs"
import rateController from "../controllers/currency/rateController.mjs"
import currencyController from "../controllers/currency/currencyController.mjs";
const router = express.Router();


router.get("/all-tokens", tokenController.getAllTokens);
router.get("/short-all-tokens", tokenController.getAllTokensShort);
// not found 
router.get("/preferred-currencies", accountController.getPreferredCurrencies);
router.post("/preferred-currencies", accountController.setPreferredCurrencies);
///////////////////////////
router.get("/blockchain-list", blockchainListController.getBlockchainList);
router.get("/rate", rateController.getRate);
router.get("/all-instruments", rateController.getAllInstruments);
router.get("/instrument/:instrument_id", rateController.getInstrumentDetail);
router.get("/all-currencies", currencyController.getAllCurrencies);
router.get("/currency/:currency_slug", currencyController.getCurrencyBySlug);
router.get("/currencies/short", currencyController.getShortCurrencyList);
router.get("/currency/name/:currency_name", currencyController.getCurrencyByName)

export default router;
