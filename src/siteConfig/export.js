import { MAIN } from '../constants';
import { CONFIG_OPTIONS, CONFIG_SETTNGS_OPTIONS } from './options';
import { 
  school,
  theme,
  configBanners,
  pages,
  categories,
  forumSettings,
  faqSettings,
  snippets,
  domain,
  ipSettings,
  siteGeneralSettings,
  configModules,
  configSections,
  pageSections,
  terminology,
} from '../components/siteConfig';

//passar o options se quiser exibir 
//um botao seguido de uma resposta

export const siteConfigExport = [
  
  {
    id: MAIN.SITE_CONFIG_OPTIONS,
    options: CONFIG_OPTIONS,
  },
  {
    id: MAIN.SITE_CONFIG_SCHOOL,
    component: school(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_THEME,
    component: theme(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_BANNERS,
    component: configBanners(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_PAGES,
    component: pages(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_CATEGORIES,
    component: categories(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_FORUM,
    component: forumSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_FAQ,
    component: faqSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_TERMINOLOGY,
    component: terminology(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_SNIPPETS,
    component: snippets(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_DOMAIN,
    component: domain(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_IP,
    component: ipSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_SETTINGS,
    options: CONFIG_SETTNGS_OPTIONS,
  },
  {
    id: MAIN.SITE_CONFIG_GENERAL,
    component: siteGeneralSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_MODULES,
    component: configModules(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_SECTION,
    component: configSections(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CONFIG_PAGE_SECTION,
    component: pageSections(),
    trigger: MAIN.RESET
  },
]