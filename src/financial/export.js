import { MAIN } from '../constants';
import { FINANCIAL_OPTIONS } from './options';
import { checkoutTaxes } from '../components/financial';


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
]