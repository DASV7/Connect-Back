const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
const { firebaseConfig } = require("../configuration/firebaseConfig");
const User = require("../../models/users.model");
const { userprojection } = require("../../services/projects/users");
const config = require("../../config/index");
const jwt = require("jsonwebtoken");

initializeApp(firebaseConfig);

const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

const uploadHistories = async (req, res) => {
  try {
    const dateTime = giveCurrentDateTime();

    const storageRef = ref(storage, `histories/${req.file.originalname + "       " + dateTime}`);

    const metadata = {
      contentType: req.file.mimetype,
    };
    const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);

    const userPictures = await User.findOneAndUpdate(
      { _id: req.token._id },
      {
        haveHistories: true,
        $push: {
          histories: {
            date: new Date(),
            url: downloadURL,
            index: +req.body?.index || 0,
            status: req.body.status,
            description: req.body.description,
            views: 0,
            likes: 0,
          },
        },
      },
      { new: true }
    ).lean();
    const userProject = {};
    userprojection.split(" ").forEach((key) => {
      if (userPictures[key]) userProject[key] = userPictures[key];
    });

    const token = jwt.sign(userProject, config.tokenSecret);

    return { token };
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
};

module.exports = { uploadHistories };
