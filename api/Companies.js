const express = require("express");
const router = express.Router();

const Companies = require("../module/Companies");

router.get("/findAll", (req, res, next) => {
  Companies.findAll()
    .then((companie) => {
      res.status(200).json(companie);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});
router.get("/findOne/:id", (req, res, next) => {
  const id = req.params.id;
  Companies.findOne({
    where: { id: id },
  })
    .then((companie) => {
      res.status(200).json(companie);
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});

router.post("/", (req, res, next) => {
  Companies.create({
    name: req.body.name,
    email: req.body.email,
    logo: req.body.logo,
    wesite: req.body.wesite
  });
  res.status(200).json({
    msg: "insert success",
  }).catch((err) => {
    res.status(404).send(err);
    console.log(err);
  })
});

router.put("/update/:id", (req, res, next) => {
    debugger;
  const id = req.params.id;
  Companies.update({ name: `${req.body.name}` }, { where: { id: id } })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          msg: "update faild",
        })
        .send(err);
    });
});

router.delete("/remove/:id", (req, res, next) => {
  const id = req.params.id;
  Companies.destroy({ where: { id: id } })
    .then((data) => {
      res.status(200).json({
        msg: "remove success",
      });
    })
    .catch((err) => {
      res
        .status(404)
        .json({
          msg: "remove faild",
        })
        .send(err);
    });
});

module.exports = router;
