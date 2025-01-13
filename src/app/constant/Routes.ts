import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const visitor = {
  news: BASEURL + 'news',
  send_message: BASEURL + 'send_message',
  projects: BASEURL + 'projects',
  services: BASEURL + 'services',
  employees: BASEURL + 'employees',
  contact: BASEURL + 'contact',
  home: BASEURL + 'home',
  jobs: BASEURL + 'jobs'
}
