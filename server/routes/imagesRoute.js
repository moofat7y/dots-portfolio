const router = require("express").Router();
const imagesCtrl = require("../controller/imageCtrl");
const { isAuth, isAdmin } = require("../middlewares/isAuth");
const { body } = require("express-validator");

router.get("/populer", imagesCtrl.getAllPopImages);

router.get("/logo", imagesCtrl.getAllLogoImages);

router.get("/social", imagesCtrl.getAllSocialImages);

router.get("/brand", imagesCtrl.getAllBrandImages);

router.patch(
  "/brand/link/:imgId",
  body("link", "Please enter a valid link").exists().notEmpty().isString(),
  isAuth,
  isAdmin,
  imagesCtrl.updateImageLink
);

router.delete("/populer", isAuth, isAdmin, imagesCtrl.deletePopImage);

router.delete("/logo", isAuth, isAdmin, imagesCtrl.deleteLogoImage);

router.delete("/social", isAuth, isAdmin, imagesCtrl.deleteSocialImage);

router.delete("/brand", isAuth, isAdmin, imagesCtrl.deleteBrandImage);

module.exports = router;
