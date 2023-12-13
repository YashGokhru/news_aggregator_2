const express = require("express");
const router = express.Router();
const{
    replytocomment,
    showreplies,
    vote,
    showsinglecomment
} = require("../controllers/CommentController");
const validateToken = require("../middleware/validateToken");
const upload = require("../../utils/multer")


router.post('/replytocomment/:_id',validateToken, replytocomment);
router.get('/showreplies/:_id', showreplies);
router.get('/:_id', showsinglecomment);
router.post('/vote/:_id', validateToken, vote);

module.exports = router;