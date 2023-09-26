import { mainExport } from "./main/export";
import { siteExport } from './site/export';
import { prodExport } from './products/export';
import { courseExport } from './courses/export';
import { userExport } from './users/export';
import { financialExport } from "./financial/export";
import { siteConfigExport } from './siteConfig/export';

export const mainArr = [
  ...mainExport,
  ...siteExport,
  ...prodExport,
  ...courseExport,
  ...userExport,
  ...financialExport,
  ...siteConfigExport,
]

