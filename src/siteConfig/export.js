import { MAIN } from '../constants';
import { configBanners, configSections } from '../components/siteConfig';
import { CONFIG_OPTIONS } from './options';

//passar o options se quiser exibir 
//um botao seguido de uma resposta

export const siteConfigExport = [
  
  {
    id: MAIN.SITE_CONFIG_OPTIONS,
    options: CONFIG_OPTIONS,
  },
  {
    id: MAIN.SITE_CONFIG_BANNERS,
    component: configBanners(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_SECTION,
    component: configSections(),
    trigger: MAIN.RESET
  },
]