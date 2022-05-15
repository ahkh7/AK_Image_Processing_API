import { existsSync, promises } from 'fs';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  is file found ? =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const filFound = (folName: string, filName: string): boolean => {
  try {
    const filPath = `images/${folName}/${filName}`;
    return existsSync(filPath);
  } catch (err) {
    console.log(err);
    return false;
  }
};

const dirFunc = async () => {
  try {
    if (!existsSync('images/thumb'))
      await promises.mkdir('images/thumb').then(() => {
        return existsSync('images/thumb');
      });
  } catch (err) {
    console.error(err);
    return existsSync('images/thumb');
  }
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================  Rename =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const newName = (filName: string, width: number, height: number): string => {
  return filName + '-' + width + '-' + height + '.jpg';
};

export { filFound, newName, dirFunc };
