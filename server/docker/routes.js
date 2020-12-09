var router = require("express").Router();
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

router.get('/images', async function(req, res) {
    const { stdout } = await exec('docker image ls --format="{{json .}}"');
    const images = stdout.split('\n');
    res.json({ images });
});

module.exports = router;