const Clothes = require("../models/ClothModel");

exports.getAllClothes = async (req, res) => {
  try {
    const allClothes = await Clothes.find();
    res.status(200).json(allClothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClothById = async (req, res) => {
  try {
    const cloth = await Clothes.findById(req.params.id);
    if (!cloth) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(cloth);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNewCloth = async (req, res) => {
  try {
    const requiredFields = ["title", "price", "description", "category"];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ message: `${field} is required` });
      }
    }
    const cloth = await Clothes.findOne({ title: req.body.title });
    if (cloth) {
      return res.status(400).json({ message: "Cloth is already available" });
    }
    const newClothes = await new Clothes({
      title: req.body.title,
      price: req.body.price,
      inStock: req.body.inStock,
      description: req.body.description,
      rate: req.body.rate,
      numOfTimesAddedToCart: req.body.numOfTimesAddedTo,
      category: req.body.category,
      availableSizes: req.body.availableSizes,
    });
    await newClothes.save();
    res.status(201).json(newClothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCloth = async (req, res) => {
  try {
    const cloth = await Clothes.findById(req.params.id);

    if (!cloth) {
      return res.status(404).json({ message: "Cloth not found" });
    }

    if (req.body.title) {
      cloth.title = req.body.title;
    }
    if (req.body.price) {
      cloth.price = req.body.price;
    }
    if (req.body.inStock !== undefined) {
      cloth.inStock = req.body.inStock;
    }
    if (req.body.description) {
      cloth.description = req.body.description;
    }
    if (req.body.rate) {
      cloth.rate = req.body.rate;
    }
    if (req.body.numOfTimesAddedToCart !== undefined) {
      cloth.numOfTimesAddedToCart = req.body.numOfTimesAddedToCart;
    }
    if (req.body.category) {
      cloth.category = req.body.category;
    }
    if (req.body.availableSizes) {
      cloth.availableSizes = req.body.availableSizes;
    }

    // Save the updated document
    const updatedCloth = await cloth.save();

    res.status(200).json(updatedCloth);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeCloth = async (req, res) => {
  try {
    await Clothes.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Cloth removed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.findByCategory = async (req, res) => {
  try {
    const clothes = await Clothes.find({ category: req.params.category });
    res.status(200).json(clothes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
