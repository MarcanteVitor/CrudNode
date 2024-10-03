const router = require("express").Router();

const personController = require("../controllers/personController");

router.route("/person/create").post((req, res) => personController.create(req, res));


router.route("/person").get((req, res) => personController.getAll(req, res));

router
  .route("/person/:id")
  .get((req, res) => personController.findByPk(req, res));

router
  .route("/person/:id")
  .delete((req, res) => personController.deleteById(req, res));

router
  .route("/person/:id")
  .put((req, res) => personController.updateById(req, res));

module.exports = router;