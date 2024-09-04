const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const router = require("./ROUTES/loginvalues");
const crypto = require("crypto");
const cors = require("cors");
const multer = require("multer");
const multers3 = require("multer-s3");
const {S3Client} = require("@aws-sdk/client-s3");
const residencyrouter = require("./ROUTES/residencyvalue");

dotenv.config();
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(express.json());

const port = process.env.PORT;
const mongopassword = process.env.MONGO_PASSWORD;
const mongousername = process.env.MONGO_USERNAME;
const access_key = process.env.AWS_ACCESSKEY;
const secret_key = process.env.AWS_SECRETKEY;
const aws_region = process.env.AWS_REGION;
const aws_bucketname = process.env.AWS_BUCKET;


mongoose.connect(`mongodb+srv://${mongousername}:${mongopassword}@cluster0.jzerybf.mongodb.net/EASY_ESTATE`)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

 
const s3 = new S3Client({ region: aws_region ,
    credentials: {
      accessKeyId: access_key,
      secretAccessKey: secret_key,
    }
  });;

  const upload = multer({
    storage: multers3({
      s3: s3,
      bucket: aws_bucketname,
      acl: "public-read",
      contentType: multers3.AUTO_CONTENT_TYPE,
      key: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
      },
    }),
  });


  app.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      console.error("No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }
  
    try {
      const imageUrl = req.file.location;
      res.json({ imageUrl });
    } catch (error) {
      console.error("Error uploading file:", error);
      return res.status(500).json({ error: "Error uploading file" });
    }
  }); 
     

app.use("/userdetails", router);
app.use("/Properties",residencyrouter);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
 