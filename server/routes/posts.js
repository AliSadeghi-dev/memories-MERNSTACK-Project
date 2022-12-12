const { Router } = require("express");

const { createPost, getPosts, updatePost } = require("../controllers/posts");

const router = new Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

module.exports = router;