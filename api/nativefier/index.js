'use strict';

var express = require('express');

var router = express.Router();

// Gets a list of Things
function nativefier(req, res) {
    var nativefier = require('nativefier').default;
    var options = req.body;
    options.out = './outputs';

    nativefier(options, function(error, appPath) {
    if (error) {
        return res.json({'error': error});
    }
        return res.json({'success': 'App has been nativefied to ' + appPath});
    });
}

router.post('/', nativefier);

module.exports = router;
