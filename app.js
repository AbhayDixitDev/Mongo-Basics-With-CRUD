const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/create", async (req, res) => {
    const newUser = await userModel.create({
        name: "Lokesh Verma",
        username: "lokeshverma",
        email: "lokeshverma@me.com"
    })
    res.send(newUser);

});


app.get("/read", async (req, res) => {
    let users = await userModel.find();
    res.send(users);
});


app.get("/update", async (req, res) => {
    const updatedUser = await userModel.findOneAndUpdate({ username: "abhaydixit" }, { name: "Abhay Dixit Ji" }, { new: true })
    res.send(updatedUser);
});

app.get("/delete", async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "lokeshverma"});
    res.send(users);
});

app.listen(3000)