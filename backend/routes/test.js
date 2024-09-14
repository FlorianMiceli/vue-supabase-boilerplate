const express = require('express');
const router = express.Router();
const { supabase } = require('../supabase.js');

/**
 * @swagger
 * /dev/test:
 *  get:
 *    tags:
 *     - Development routes
 *    description: Test routeeeeeeeeeeee
 *    responses:
 *      200:
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Hello, world!
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: Bad request
 */
router.get('/test', (req, res) => {
    res.send('Hello, world!')
});

module.exports = router;