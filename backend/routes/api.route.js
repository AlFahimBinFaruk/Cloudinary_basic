const router = require('express').Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()
const cloudinary = require('../cloudinary/config');

//get all file list
router.get('/', async (req, res, next) => {
  const fileList = await prisma.FileInfo.findMany({});
  res.json(fileList)
});

//add new file
router.post('/add', async (req, res, next) => {
  const newFile = await prisma.FileInfo.create({
    data: req.body
  })
  res.json(newFile);
})

//delete file using public id
router.delete('/delete/:id',async (req, res, next) => {
  const id = Number(req.params.id);
  const file = await prisma.FileInfo.findUnique({
    where: {
      id: id,
    }
  });

  if (file) {
    cloudinary.uploader.destroy(file.public_id).then(async () => {
      const deletedFile = await prisma.FileInfo.delete({
        where: {
          id:id
        }
      })
      res.json(deletedFile)
    }).catch((err) => {
      res.json(err)
    });
  } else {
    res.json({ msg: "provide valid id" })
  }

})

module.exports = router;
