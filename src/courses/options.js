import { MAIN } from '../constants';

export const COURSE_OPTIONS = [
  { value: 1, label: 'Lista de cursos', trigger: MAIN.COURSE_ALL },
  { value: 2, label: 'Matrículas', trigger: MAIN.COURSE_ENROLLMENTS },
  { value: 3, label: 'Biblioteca', trigger: MAIN.COURSE_LIBRARY },
  { value: 4, label: 'DRM', trigger: MAIN.COURSE_DRM },
  { value: 5, label: 'Certificados', trigger: MAIN.COURSE_CERTIFICATES },
  { value: 6, label: 'Provas', trigger: MAIN.COURSE_EXAM },
  { value: 7, label: 'Depoimentos', trigger: MAIN.COURSE_TESTIMONIAL },
  { value: 8, label: 'Suporte', trigger: MAIN.COURSE_SUPPORT },
  { value: 9, label: 'Configurações', trigger: MAIN.COURSE_SETTINGS },
  { value: 10, label: 'Detalhes', trigger: MAIN.COURSE_DETAIL_OPTIONS },
];

export const COURSE_DETAIL_OPTIONS = [
  { value: 1, label: 'Produtos', trigger: MAIN.COURSE_PROD },
  { value: 2, label: 'Colaboradores', trigger: MAIN.COURSE_COLLABORATOR },
  { value: 3, label: 'Módulos', trigger: MAIN.COURSE_MODULE },
  { value: 4, label: 'Aulas', trigger: MAIN.COURSE_LESSON },
  { value: 5, label: 'Banco de Questões', trigger: MAIN.COURSE_QUESTION },
  { value: 6, label: 'Prova Final', trigger: MAIN.COURSE_FINAL_EXAM },
  { value: 7, label: 'Matrículas', trigger: MAIN.COURSE_ENROLL },
];

export const COURSE_SETTINGS_OPTIONS = [
  { value: 1, label: 'Certificados', trigger: MAIN.COURSE_CERT_SETTINGS },
  { value: 2, label: 'Períodos', trigger: MAIN.COURSE_PERIOD_SETTINGS },
];