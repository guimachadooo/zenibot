import { MAIN } from '../constants';

export const FINANCIAL_OPTIONS = [
  { value: 1, label: 'Taxas', trigger: MAIN.FINAN_TAXES },
  { value: 2, label: 'Comparativo', trigger: MAIN.FINAN_COMPARISON },
  { value: 3, label: 'Reembolsos', trigger: MAIN.FINAN_REFUND },
  { value: 4, label: 'Antecipação', trigger: MAIN.FINAN_ANTICIPATION },
  { value: 5, label: 'Chargeback', trigger: MAIN.FINAN_CHARGEBACK },
  { value: 6, label: 'Cobranças', trigger: MAIN.FINAN_CHARGES },
  { value: 7, label: 'Transações', trigger: MAIN.FINAN_TRANSACTIONS },
  { value: 8, label: 'Vendas', trigger: MAIN.FINAN_SALES },
  { value: 9, label: 'Assinaturas', trigger: MAIN.FINAN_SIGNATURES },
  { value: 10, label: 'Recebedores', trigger: MAIN.FINAN_RECEIVERS },
  { value: 11, label: 'Calculadora', trigger: MAIN.FINAN_CALC },
  { value: 12, label: 'Configurações', trigger: MAIN.FINAN_SETTINGS },
];

