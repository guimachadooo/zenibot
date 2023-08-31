import { MAIN } from '../constants';
import { btnDocs } from '../components/general';

export const CONFIG_OPTIONS = [
  /* { value: 1, label: 'Escola', trigger: MAIN.SITE_CONFIG_SCHOOL }, */
 /*  { value: 2, label: 'Tema', trigger: MAIN.SITE_CONFIG_THEME },*/
  { value: 3, label: 'Banners', trigger: MAIN.SITE_CONFIG_BANNERS },
  /* { value: 4, label: 'Páginas', trigger: MAIN.SITE_CONFIG_PAGES },
  { value: 5, label: 'Categorias', trigger: MAIN.SITE_CONFIG_CATEGORIES }, */
  /* { value: 6, label: 'Fórum', trigger: MAIN.FORUM }, */
  /* { value: 7, label: 'FAQ', trigger: MAIN.SITE_CONFIG_FAQ },
  { value: 8, label: 'EAD Terminologia', trigger: MAIN.SITE_CONFIG_TERMINOLOGY }, */
  /* { value: 9, label: 'Snippets', trigger: MAIN.SITE_CONFIG_SNIPPETS }, 
  { value: 10, label: 'Domínio', trigger: MAIN.SITE_CONFIG_DOMAIN },
  { value: 11, label: 'IP', trigger: MAIN.SITE_CONFIG_IP },
  { value: 12, label: 'Configurações', trigger: MAIN.SITE_CONFIG_SETTINGS }, */
];

export const CONFIG_OPTIONS_BANNER = [
  { value: 1, label: 'Banners 333', component: btnDocs('banners') },
  { value: 2, label: 'Voltar ao início', trigger: MAIN.START_QUESTION },
];