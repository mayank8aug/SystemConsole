var router = require("express").Router();
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

router.get('/pods', async function(req, res) {
    const { stdout } = await exec("kubectl get pods -o=jsonpath=\"{.items[*]['metadata.name']}\"");
    const pods = stdout.split(' ');
    res.json({ pods });
});

module.exports = router;