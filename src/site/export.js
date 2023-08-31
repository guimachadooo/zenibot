import { MAIN } from '../constants';
import { SITE_OPTIONS } from './options';
import { myCourses } from '../components/courses';

export const siteExport = [
  
  {
    id: MAIN.SITE_OPTIONS,
    options: SITE_OPTIONS,
  },
  {
    id: MAIN.SITE_MY_COURSES,
    component: myCourses(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_FORUM,
    component: forum(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_PROFILE,
    component: myProfile(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_BANNERS,
    component: banners(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_SECTIONS,
    component: sections(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_SOCIAL,
    component: social(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.SITE_CERTIFICATE,
    component: searchCertificate(),
    trigger: MAIN.RESET
  },
]