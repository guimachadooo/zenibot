import { mainExport } from "./main/export";
import { siteExport } from './site/export';
import { siteConfigExport } from './siteConfig/export';
import { financialExport } from "./financial/export";

export const mainArr = [
  ...mainExport,
  ...siteExport,
  ...financialExport,
  ...siteConfigExport,
]

