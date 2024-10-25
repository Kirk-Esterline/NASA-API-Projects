import express, { Router } from 'express';
import serverless from "serverless-http";

const api = express();

const router = Router();

api.use('../server/', router)

export const handler = serverless(api)