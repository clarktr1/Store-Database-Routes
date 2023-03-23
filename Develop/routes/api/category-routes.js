const router = require('express').Router();
const { Category } = require('../../models/');

router.get('/', async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll();
    res.status(200).json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const getCategoryID = await Category.findAll(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json(getCategoryID);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const setCategoryData = Category.create({
      category_name: req.body.category_name,
    })
    res.status(200).send(setCategoryData);
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try{
    const putCategoryData = Category.update(
      {category_name: req.body.category_name},
      {where: {
          id: req.params.id
        }
      });
    res.status(200).json(putCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const destroyCategory = Category.destroy(
      {where: {
          id: req.params.id
        }
  })
    res.status(200).send(destroyCategory)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
