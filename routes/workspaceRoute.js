const express = require('express')
const router = express.Router()
const {createWorkspace} = require('../controllers/workspaceController')



// post workspace 
router.post('/workspace', createWorkspace)


module.exports = router;