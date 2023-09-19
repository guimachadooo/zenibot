import { MAIN } from '../constants';
import { MAIN_OPTIONS } from './options';
import { myDashboard } from '../components/general';

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
    id: MAIN.RESET,
    options: [{ value: 1, label: 'Voltar ao início', trigger: MAIN.START_QUESTION }],
  },
]