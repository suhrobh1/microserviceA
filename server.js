const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Import the axios library for making HTTP requests
const app = express();

app.use(express.json());
app.use(cors());


app.post("/bmi_fetch", async (req, res) => {
    const { age, gender, height, weight } = req.body;
    console.log("Received:", "AGE: ", age, "GENDER: ", gender, "HEIGHT: ",height, "WEIGHT: ",weight);

  if (age && height && gender && weight){
    if(gender == "male"){
        let bmi = (weight / ( height ** 2)) * 703
         console.log("Returning BMI of", bmi)
        res.json(`Male BMI was requested: ${bmi}` )
    }else{
        let bmi = (weight / ( height ** 2)) * 703
        console.log("Returning BMI of", bmi)
        res.json(`Female BMI was requested: ${bmi}`)
    }
  }else{
    res.status(400).json({ error: "Age, gender, weight, and height are all required!" });
  }
});



app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`BMI microservice running on port ${PORT}`);
});
