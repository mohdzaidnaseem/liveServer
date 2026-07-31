const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    const text =
`Name : ${name}
Email : ${email}
----------------------
`;

    fs.appendFile("data.txt", text, (err) => {
        if (err) {
            return res.send("Error Saving Data");
        }

        res.sendFile(path.join(__dirname, "public", "success.html"));
    });

});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running`);
});