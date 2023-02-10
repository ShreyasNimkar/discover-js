import Product from '../models/productModel.js';
import connectToDB from '../managers/DB.js';
import Category from '../models/categoryModel.js';

connectToDB();

const deleteData = async (Model) => {
  try {
    await Model.deleteMany();
    console.log('All data deleted Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

if (process.argv[2] === '--products') deleteData(Product);
else if (process.argv[2] === '--categories') deleteData(Category);
