import db from "../models/index.js";
const { Blog } = db;

export const createBlog = async (req, res) => {
  const blog = await Blog.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file?.filename
  });
  res.json(blog);
};

export const getBlogs = async (req, res) => {
  res.json(await Blog.findAll());
};
