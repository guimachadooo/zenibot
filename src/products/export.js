import { MAIN } from '../constants';
import { PROD_OPTIONS, PROD_DETAIL_OPTIONS } from './options';
import { 
  allProducts, 
  allCoupons, 
  orderBump, 
  prodDetails,
  prodCourses,
  prodOffers,
  prodPages,
  prodMarketing,
  prodComissioned,
  prodFaq,
  prodLists,
  prodContract,
} from '../components/products';

export const prodExport = [

  {
    id: MAIN.PROD_OPTIONS,
    options: PROD_OPTIONS,
  },
  { 
    id: MAIN.PROD_DETAIL_OPTIONS, 
    options: PROD_DETAIL_OPTIONS 
  },
  {
    id: MAIN.PROD_ALL,
    component: allProducts(),
    trigger: MAIN.RESET,
  },
  {
    id: MAIN.PROD_COUPONS,
    component: allCoupons(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_ORDER_BUMP,
    component: orderBump(),
    trigger: MAIN.RESET,
  },
  {
    id: MAIN.PROD_DETAILS,
    component: prodDetails(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_COURSES,
    component: prodCourses(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_OFFERS,
    component: prodOffers(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_PAGES,
    component: prodPages(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_MKT,
    component: prodMarketing(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_COMMISIONED,
    component: prodComissioned(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_FAQ,
    component: prodFaq(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_LISTS,
    component: prodLists(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.PROD_CONTRACT,
    component: prodContract(),
    trigger: MAIN.RESET
  },
]