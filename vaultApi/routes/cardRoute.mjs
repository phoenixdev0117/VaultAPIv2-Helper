import express from "express";
import cardController from "../controllers/card/cardController.mjs";
const router = express.Router();


router.get('/card-offer', cardController.getCardOfferList);
router.get('/card-request', cardController.getCardRequestList);
// need CardOfferId but not sure how to obtain
router.post("/create-card", cardController.createCardRequest);
router.get("/transactions", cardController.getTransactions);
router.get("/card-offers", cardController.getCardOffersList);
router.post("/reset-card-pin", cardController.resetCardPIN);
router.get("/card-limits/:card_id", cardController.getCardLimits);
router.post("/update-limits", cardController.updateCardLimits);
router.post("/update-card-type", cardController.updateCardType);
router.post("/update-card-status", cardController.updateCardStatus);
router.post("/activate-card", cardController.activateCard);
router.get("/card/:card_id", cardController.getCardInformation);
router.get("/top-up/:card_id", cardController.getTopUpInformation);
router.get("/sensitive-details/:card_id", cardController.getCardSensitiveDetails);
router.get("/pin/:card_id", cardController.getCardPin);
router.get("/detail/:card_id", cardController.getCardDetail);
router.get("/balance/:card_id", cardController.getCardBalance);
router.get("/transactions/:card_id", cardController.getCardTransactions);

export default router;
