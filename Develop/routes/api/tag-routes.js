const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const getTag = await Tag.findAll({
      include: {
        model: Product,
      }
    });
    res.status(200).send(getTag)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const getSingleTag = await Tag.findByPk(req.params.id, {
      include: {
        model: Product,
      }
    });
    res.status(200).send(getSingleTag)
  } catch (err){
    console.log(err)
    res.status(500).send(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  try{
    const postTag = Tag.create({tag_name: req.params.tag_name})
    res.status(200).send(postTag)
  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }
});

router.put('/:id', (req, res) => {
 try{ 
    const updateTag = Tag.update({tag_name: req.params.id})
    res.status(200).send(updateTag)
} catch(err){
    console.log(err)
    res.status(500).send(err)
}
});

router.delete('/:id', (req, res) => {
try{ const deleteTag = Tag.destroy({id: req.params.id})
    res.status(200).send(deleteTag);
} catch(err){
    console.log(err)
    res.status(500).send(err)
}
});

module.exports = router;
