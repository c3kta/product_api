const mongoose = require("mongoose");
const createError = require("http-errors");
const Product = require("../Models/Product.model");

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const result = await Product.find({}, { __v: 0 });
            req.log.info();
            res.send(result);
        } catch (e) {
            console.log(e.message);
            next(e);
        }
    },
    getProductById: async (req, res, next) => {
        try {
            const result = await Product.findById(req.params.id, { __v: 0 });
            req.log.info();
            res.send(result);
        } catch (e) {
            req.log.info(e.message);
            if (e instanceof mongoose.CastError) {
                next(createError(400, "Invalid product ID"));
                return;
            }
            next(e);
        }
    },
    pushProduct: async (req, res, next) => {
        try {
            const result = await Product.create(req.query);
            req.log.info();
            res.send(result);
        } catch (e) {
            req.log.info(e.message);
            if (e.name === 'ValidationError') {
                next(createError(422, "Invalid product params"));
                return;
            }
            next(e);
        }
    },
    updateProduct: async (req, res, next) => {
        try {
            const result = await Product.findByIdAndUpdate(req.query.id, req.query, { new: true });
            req.log.info();
            res.send(result);
        } catch (e) {
            req.log.info(e.message);
            if (e instanceof mongoose.CastError) {
                next(createError(400, "Invalid product ID"));
                return;
            }
            next(e);
        }
    },
    deleteProduct: async (req, res, next) => {
        try {
            const result = await Product.findByIdAndDelete(req.params.id);
            req.log.info();
            res.send(result);
        } catch (e) {
            req.log.info(e.message);
            if (e instanceof mongoose.CastError) {
                next(createError(400, "Invalid product ID"));
                return;
            }
            next(e);
        }
    }
}