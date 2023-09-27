import { MAIN } from '../constants';
import { MAIN_OPTIONS } from './options';
import { 
  about,
  apiDetails, 
  docs, 
  eadStore, 
  images, 
  myDashboard, 
  trash, 
  webhooks 
} from '../components/general';

export const mainExport = [
  
  {
    id: MAIN.START_QUESTION,
    message: 'Qual módulo deseja acessar?',
    trigger: MAIN.INITIAL_OPTIONS,
  },
  {
    id: MAIN.INITIAL_OPTIONS,
    options: MAIN_OPTIONS,
  },
  {
    id: MAIN.DASHBOARD,
    component: myDashboard(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.EAD_STORE,
    component: eadStore(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.API,
    component: apiDetails(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.WEBHOOKS,
    component: webhooks(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.TRASH,
    component: trash(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.IMAGES,
    component: images(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.DOCS,
    component: docs(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.ABOUT,
    component: about(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.RESET,
    options: [{ value: 1, label: 'Voltar ao início', trigger: MAIN.START_QUESTION }],
  },
]