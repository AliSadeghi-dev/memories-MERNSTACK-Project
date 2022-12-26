const { Router } = require("express");

const {
    createPost,
    getPosts,
    updatePost,
    deletePost,
    likePost,
} = require("../controllers/posts");

const router = new Router();

// router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;