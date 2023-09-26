import { MAIN } from '../constants';
import { FINANCIAL_OPTIONS } from './options';
import { 
  anticipation, 
  calculator, 
  chargeback, 
  charges, 
  checkoutTaxes, 
  rateComparison, 
  receivers, 
  refund, 
  sales, 
  settings, 
  signatures, 
  transactions
} from '../components/financial';


export const financialExport = [
  
  {
    id: MAIN.FINAN_OPTIONS,
    options: FINANCIAL_OPTIONS,
  },
  {
    id: MAIN.FINAN_TAXES,
    component: checkoutTaxes(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_COMPARISON,
    component: rateComparison(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_REFUND,
    component: refund(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_ANTICIPATION,
    component: anticipation(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_CHARGEBACK,
    component: chargeback(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_CHARGES,
    component: charges(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_TRANSACTIONS,
    component: transactions(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_SALES,
    component: sales(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_SIGNATURES,
    component: signatures(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_RECEIVERS,
    component: receivers(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_CALC,
    component: calculator(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.FINAN_SETTINGS,
    component: settings(),
    trigger: MAIN.RESET
  },
]