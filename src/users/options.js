import { MAIN } from '../constants';

export const USER_OPTIONS = [
  { value: 1, label: 'Lista de Usuários', trigger: MAIN.USER_ALL },
  { value: 2, label: 'Detalhes', trigger: MAIN.USER_DETAILS },
  { value: 3, label: 'Grupos', trigger: MAIN.USER_GROUPS },
  { value: 4, label: 'Newsletter', trigger: MAIN.USER_NEWS },
  { value: 5, label: 'Configurações', trigger: MAIN.USER_SETTINGS },
];

export const USER_SETTINGS_OPTIONS = [
  { value: 1, label: 'Geral', trigger: MAIN.USER_GENERAL_SETTINGS },
  { value: 2, label: 'Permissões', trigger: MAIN.USER_TEMPLATES },
  { value: 3, label: 'Campos Personalizados', trigger: MAIN.USER_FIELDS },
];

