import { mainExport } from "./main/export";
import { siteExport } from './site/export';
import { financialExport } from "./financial/export";

export const mainArr = [
  ...mainExport,
  ...siteExport,
  ...financialExport,
]

