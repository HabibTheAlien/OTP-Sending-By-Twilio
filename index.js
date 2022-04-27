const express = require("express");
const app = express();
const PORT = 3000;
const client = require("twilio")(
	"AC4bf7336db986a9cd799e4e9d64feff3f",
	"fd831ef40b604130d7a3db2eb5a93eb9"
);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/home.html");
});
app.get("/sms", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});
app.post("/sms", (req, res) => {
	send();
	res.sendFile(__dirname + "/views/success.html");
});

app.listen(PORT, () => {
	console.log(`Server is running successfully at http://localhost:${PORT}`);
});

function send() {
	passwordBlocks = [
		0,
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];
	var otp = "";
	for (var i = 1; i <= 6; i++) {
		indexOfBlocks =
			Math.floor(Math.random() * (passwordBlocks.length - 1 - 0 + 1)) + 0;
		otp = otp + passwordBlocks[indexOfBlocks];
	}
	client.messages
		.create({
			body: `Your OTP:${otp}`,
			to: "+8801941659179",
			from: "+14325294419",
		})
		.then((message) => console.log(message))
		// here you can implement your fallback code
		.catch((error) => console.log(error));
}
