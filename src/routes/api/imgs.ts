import express from 'express';
import resizeToolFunc from '../../utilities/resizeToolFunc';

const resizeTool = express.Router();

resizeTool.use('/', resizeToolFunc);

export default resizeTool;
