const mongoose = require("mongoose");

const PostMessage = require("../models/postMessage");

exports.getPosts = async(req, res) => {
    try {
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.createPost = async(req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

exports.updatePost = async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json("('No Post with that id.");

    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
        new: true,
    });

    res.json(updatePost);
};

exports.deletePost = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json("('No Post with that id.");
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted succsessfully" });
};

exports.likePost = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json("('No Post with that id.");

    const Post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
        id, { likeCount: Post.likeCount + 1 }, { new: true }
    );
    res.json(updatedPost);
};