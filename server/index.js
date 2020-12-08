var express = require("express");
var app = express();
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', async function(req, res) {
    const { stdout } = await exec('docker image ls --format="{{json .}}"');
    const images = stdout.split('\n');
    console.log(`Docker Images: ${images}`);
    res.json({ images: images});
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});