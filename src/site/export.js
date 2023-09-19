import { MAIN } from '../constants';
import { SITE_OPTIONS } from './options';
import { 
  myCourses, 
  forum, 
  myProfile, 
  banners, 
  sections, 
  social,
  searchCertificate 
} from '../components/site';

import { triggerReset } from '../components/general';

export const siteExport = [
  
  {
    id: MAIN.SITE_OPTIONS,
    options: SITE_OPTIONS,
  },
  {
    id: MAIN.SITE_MY_COURSES,
    component: myCourses(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_FORUM,
    component: forum(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_PROFILE,
    component: myProfile(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_BANNERS,
    component: banners(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_SECTIONS,
    component: sections(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_SOCIAL,
    component: social(),
    ...triggerReset
  },
  {
    id: MAIN.SITE_CERTIFICATE,
    component: searchCertificate(),
    ...triggerReset
  },
]