import { MAIN } from '../constants';

export const PROD_OPTIONS = [
  { value: 1, label: 'Lista de produtos', trigger: MAIN.PROD_ALL },
  { value: 2, label: 'Cupons', trigger: MAIN.PROD_COUPONS },
  { value: 3, label: 'Order Bump', trigger: MAIN.PROD_ORDER_BUMP },
  { value: 4, label: 'Detalhes', trigger: MAIN.PROD_DETAIL_OPTIONS },
];

export const PROD_DETAIL_OPTIONS = [
  { value: 1, label: 'Cursos', trigger: MAIN.PROD_COURSES },
  { value: 2, label: 'Ofertas', trigger: MAIN.PROD_OFFERS },
  { value: 3, label: 'Páginas', trigger: MAIN.PROD_PAGES },
  { value: 4, label: 'Marketing', trigger: MAIN.PROD_MKT },
  { value: 5, label: 'Comissionados', trigger: MAIN.PROD_COMMISIONED },
  { value: 6, label: 'FAQ', trigger: MAIN.PROD_FAQ },
  { value: 7, label: 'Listas', trigger: MAIN.PROD_LISTS },
  { value: 8, label: 'Contrato', trigger: MAIN.PROD_CONTRACT },
];
