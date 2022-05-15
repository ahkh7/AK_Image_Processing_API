import express from 'express';
import path from 'path';
import sharp from 'sharp';
import { filFound, newName, dirFunc } from '../utilities/filesFounder';

const resizeToolFunc = (req: express.Request, res: express.Response): void => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ? =============================  const =============================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const filName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  const newImgName = newName(filName, width, height);
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ? ============================= sharp =============================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (filFound('', newImgName)) {
    res.sendFile('thumb/' + newImgName, { root: 'images' });
  } else {
    dirFunc();
    sharp(path.join('images', 'main', filName + '.jpg'))
      .resize(width, height)
      .toFile(path.join('images', 'thumb', newImgName), (err) => {
        console.error(err);
      })
      .toBuffer()
      .then(() => {
        res.sendFile('thumb/' + newImgName, { root: 'images' });
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default resizeToolFunc;
