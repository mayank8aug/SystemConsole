var express = require("express");
var app = express();

var port = process.env.PORT || 3001;

var dockerRoutes = require('./docker/routes');
var kubernetesRoutes = require('./kubernetes/routes');

app.use('/api/docker', dockerRoutes);
app.use('/api/k8s', kubernetesRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});