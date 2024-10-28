const express = require('express')
const serverless = require("serverless-http")
const router = express.Router();
const api = express();


api.use('../server/', router)

export const handler = serverless(api)