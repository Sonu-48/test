const express = require('express');
const router = express.Router();
const fs = require('fs');
const os = require('os');
const path = require('path');

// GET API
router.get("/", (req, res) => {
    const homedir = os.homedir();
    const desktop = path.join(homedir, 'Desktop');
    console.log("desktop", desktop);
    res.send(`you'r Desktop path is${desktop}`);

    // fs.readdir(desktop, (err, files) => {
    //     if (err) {
    //         console.error("Error reading desktop directory:", err);
    //         return res.status(500).send("Error reading desktop directory");
    //     }

    //     console.log("files", files);
    //     res.send("hi")
    // });
});

module.exports = router;
