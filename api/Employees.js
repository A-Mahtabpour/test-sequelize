const express = require("express");
const router = express.Router();

const Employees = require("../module/Employees");

router.get("/findAll", (req, res, next) => {
  Employees.findAll()
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
  Employees.findOne({
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
  Employees.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyId: req.body.companyId,
    email: req.body.email,
    phone: req.body.phone
  });
  res
    .status(200)
    .json({
      msg: "insert success",
    })
    .catch((err) => {
      res.status(404).send(err);
      console.log(err);
    });
});

router.put("/update/:id", (req, res, next) => {
  const id = req.params.id;
  Employees.update({ name: `${req.body.name}` }, { where: { id: id } })
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
  Employees.destroy({ where: { id: id } })
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
