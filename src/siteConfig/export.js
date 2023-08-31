import { MAIN } from '../constants';
import { configBanners } from '../components/siteConfig';
import { 
  CONFIG_OPTIONS, 
  CONFIG_OPTIONS_BANNER 
} from './options';

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
    id: MAIN.CONFIG_OPTIONS_BANNER,
    options: CONFIG_OPTIONS_BANNER,
  },
]