// 3h make middleware (including middleware folder)
import { Router } from 'express';

export default({ config, db }) => {
  let api = Router();

  // add middleware here

  return api;
}
