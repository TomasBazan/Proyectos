const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.get("/api/quotes", async (req, res) => {
  try {
    const response = await axios.get("https://api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": "pnupXQC0zxdmzi/YCRr5cA==UBB93mARs00EnNAA", // Replace with your actual API key
      },
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
