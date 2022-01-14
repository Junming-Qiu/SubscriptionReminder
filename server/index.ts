// import express from 'express';


// const express = require('express');
import express from 'express';
import { Request, Response } from 'express'

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

// import path from "path";

// const port = 3002;

// const app = express()

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World')
})

// app.listen(port)