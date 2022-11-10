import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	try {
		res.status(200).json(await PostMessage.find());
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = (req, res) => {
	const newPost = new PostMessage(req.body);
	try {
		newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
