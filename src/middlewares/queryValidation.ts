import express from 'express';
import { filFound } from '../utilities/filesFounder';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================   query check =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const positiveNumFun = (positiveNum: any): any => {
  return parseInt(positiveNum) > 0;
};
const queryValid = (
  req: express.Request,
  res: express.Response,
  next: any
): void => {
  const filName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);
  if (
    positiveNumFun(width) &&
    positiveNumFun(height) &&
    filFound('main', filName + '.jpg')
  ) {
    next();
  } else {
    res.redirect('/api/error');
  }
};

export { queryValid, positiveNumFun };
