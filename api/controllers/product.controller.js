import Product from "../models/product.model.js";

export const createProduct = async (req, res,next) => {
  const { name, price, description, imageUrls } = req.body;
  try {
    const postAdd = new Product({
      name: name,
      price: price,
      description: description,
      imageUrls : imageUrls,
    });
    await postAdd.save().then(() => {
      res.status(201).json({ message: "Product is Created successfully" });
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async(req, res) => {
    const allPosts = await Product.find();
    return res.status(200).json(allPosts);
};

export const deleteProduct = (req, res) => {};
export const updateProduct = (req, res) => {};
