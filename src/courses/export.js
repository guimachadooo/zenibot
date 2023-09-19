import { MAIN } from '../constants';
import { COURSE_OPTIONS, COURSE_DETAIL_OPTIONS, COURSE_SETTINGS_OPTIONS } from './options';
import { 
  allCourses,
  allEnrollments,
  library,
  drmSettings,
  certificates,
  allExams,
  testimonials,
  support,
  certificateSettings,
  periodSettings,
  courseProd,
  collaborators,
  modules,
  lessons,
  questionBank,
  finalExam,
  courseEnrolls,
} from '../components/courses';

export const courseExport = [

  {
    id: MAIN.COURSE_OPTIONS,
    options: COURSE_OPTIONS,
  },
  { 
    id: MAIN.COURSE_DETAIL_OPTIONS, 
    options: COURSE_DETAIL_OPTIONS 
  },
  {
    id: MAIN.COURSE_ALL,
    component: allCourses(),
    trigger: MAIN.RESET,
  },
  {
    id: MAIN.COURSE_ENROLLMENTS,
    component: allEnrollments(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_LIBRARY,
    component: library(),
    trigger: MAIN.RESET,
  },
  {
    id: MAIN.COURSE_DRM,
    component: drmSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_CERTIFICATES,
    component: certificates(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_EXAM,
    component: allExams(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_TESTIMONIAL,
    component: testimonials(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_SUPPORT,
    component: support(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_SETTINGS,
    options: COURSE_SETTINGS_OPTIONS
  },
  {
    id: MAIN.COURSE_CERT_SETTINGS,
    component: certificateSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_PERIOD_SETTINGS,
    component: periodSettings(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_PROD,
    component: courseProd(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_COLLABORATOR,
    component: collaborators(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_MODULE,
    component: modules(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_LESSON,
    component: lessons(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_QUESTION,
    component: questionBank(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_FINAL_EXAM,
    component: finalExam(),
    trigger: MAIN.RESET
  },
  {
    id: MAIN.COURSE_ENROLL,
    component: courseEnrolls(),
    trigger: MAIN.RESET
  },
]