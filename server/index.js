const express = require('express')
const path = require('path')
var cors = require('cors')

const app = express();
const port = 5000;

app.use(cors({
    origin: ["http://localhost:3000"]
}))


app.get('/test', (req, res) => {
    res.json({ message: "App is running!" })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`)
})