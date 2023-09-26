import { MAIN } from '../constants';
import { USER_OPTIONS, USER_SETTINGS_OPTIONS } from './options';
import { 
  allUsers, 
  userDetails, 
  userFields, 
  userGeneralSettings, 
  userGroups, 
  userNews,
  userTemplates, 
} from '../components/users';


export const userExport = [
  
  {
    id: MAIN.USER_OPTIONS,
    options: USER_OPTIONS,
  },
  {
    id: MAIN.USER_ALL,
    component: allUsers(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_DETAILS,
    component: userDetails(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_GROUPS,
    component: userGroups(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_NEWS,
    component: userNews(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_SETTINGS,
    options: USER_SETTINGS_OPTIONS
  },
  {
    id: MAIN.USER_GENERAL_SETTINGS,
    component: userGeneralSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_TEMPLATES,
    component: userTemplates(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.USER_FIELDS,
    component: userFields(),
    trigger: MAIN.RESET
  },
]