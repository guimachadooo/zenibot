import { mainExport } from "./main/export";
import { siteExport } from './site/export';
import { prodExport } from './products/export';
import { courseExport } from './courses/export';
import { siteConfigExport } from './siteConfig/export';
import { financialExport } from "./financial/export";

export const mainArr = [
  ...mainExport,
  ...siteExport,
  ...prodExport,
  ...courseExport,
  ...financialExport,
  ...siteConfigExport,
]

