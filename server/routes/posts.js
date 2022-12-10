const { Router } = require("express");

const { createPost, getPosts } = require("../controllers/posts");

const router = new Router();

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;