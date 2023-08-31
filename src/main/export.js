import { MAIN } from '../constants';
import { MAIN_OPTIONS } from './options';

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
    id: MAIN.RESET,
    options: [{ value: 1, label: 'Voltar ao início', trigger: MAIN.START_QUESTION }],
  },
]