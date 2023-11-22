const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;
    console.log("Token:", token); 

    if (!token) {
        console.error("Token not found");
        res.status(400);
        throw new Error("Token not found");
    }
    const keyy = process.env.ACCESS_TOKEN_SECRET || "newsagr21";
    jwt.verify(token, keyy, (err, decoded) => {
        if (err) {
            console.error("Token verification failed:", err.message);
            res.status(401);
            throw new Error("User unauthorized");
        }
        req.user = decoded.user;
        next();
    });
});

module.exports = validateToken;
