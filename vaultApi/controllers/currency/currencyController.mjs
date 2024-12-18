// controllers/currency/currencyController.mjs
import currencyService from "../../services/currency/currencyService.mjs";

const currencyController = {
    getAllCurrencies: async (req, res) => {
        try {
            const currencies = await currencyService.getAllCurrencies();
            res.status(200).json({data: currencies});
        } catch (error) {
            console.log(error)
            res.status(500).json({result: "failed"});
        }
    },
    
    getCurrencyBySlug: async (req, res) => {
        const slug = req.params.currency_slug;
        try {
            const currency = await currencyService.getCurrencyBySlug(slug);
            res.status(200).json({data: currency});
        } catch (error) {
            console.log(error)
            res.status(500).json({result: "failed"});
        }
    },
    
    getShortCurrencyList: async (req, res) => {
        try {
            const currencyList = await currencyService.getShortCurrencyList();
            res.status(200).json({data: currencyList});
        } catch (error) {
            console.log(error)
            res.status(500).json({result: "failed"});
        }
    },

    
    getCurrencyByName: async (req, res) => {
        const currencyName = req.params.currency_name;
        try {
            const currency = await currencyService.getCurrencyByName(currencyName);
            res.status(200).json({data: currency});
        } catch (error) {
            console.log(error)
            res.status(500).json({result: "failed"});
        }
    },
};

export default currencyController;
