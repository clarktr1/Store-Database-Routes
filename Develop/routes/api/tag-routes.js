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

router.post('/', async (req, res) => {
  try{
    const postTag = await Tag.create({tag_name: req.body.tag_name})
    res.status(200).send(postTag)
  } catch(err){
    console.log(err)
    res.status(500).send(err)
  }
});

router.put('/:id', async (req, res) => {
 try{ 
    const updateTag = await Tag.update({tag_name: req.body.tag_name},
      {where: {
        id: req.params.id
      }
  })
    res.status(200).send(updateTag)
} catch(err){
    console.log(err)
    res.status(500).send(err)
}
});

router.delete('/:id', async (req, res) => {
try{ 
    const deleteTag = await Tag.destroy({where: {id: req.params.id}})
    res.sendStatus(200)
} catch(err){
    console.log(err)
    res.status(500).send(err)
}
});

module.exports = router;
