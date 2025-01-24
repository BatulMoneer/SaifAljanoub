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
  jobs: BASEURL + 'jobs',
  partners: BASEURL + 'partner',
  aboutus: BASEURL + 'about_us'
}

export const admin = {
  login: BASEURL + 'admin/login',
  verify: BASEURL + 'admin/verify',
  addAdmin: BASEURL + 'admin/add_admin',
  deleteAdmin: BASEURL + 'admin/delete_admin/',
  showAdmins: BASEURL + 'admin/show_admins',
  showAccount: BASEURL + 'admin/show_account/',
  updateAccountWithPass: BASEURL + 'admin/edit_account_/',
  updateAccountWithoutPass: BASEURL + 'admin/edit_account__/',

  addEmployee: BASEURL + 'admin/employee/add',
  updateEmployee: BASEURL + 'admin/employee/edit/',
  deleteEmployee: BASEURL + 'admin/employee/delete/',
  viewEmployee: BASEURL + 'admin/employee/show',

  addJob: BASEURL + 'admin/job/add',
  updateJob: BASEURL + 'admin/job/edit/',
  deleteJob: BASEURL + 'admin/job/delete/',
  viewJob: BASEURL + 'admin/job/show',

  showMessages: BASEURL + 'admin/contact/show_messages',
  deleteMessages: BASEURL + 'admin/contact/delete/',

  addService: BASEURL + 'admin/services/add',
  updateService: BASEURL + 'admin/services/edit/',
  deleteService: BASEURL + 'admin/services/delete/',
  viewService: BASEURL + 'admin/services/show',

  addNews: BASEURL + 'admin/news/add',
  updateNews: BASEURL + 'admin/news/edit/',
  deleteNews: BASEURL + 'admin/news/delete/',
  viewNews: BASEURL + 'admin/news/show',

  addProject: BASEURL + 'admin/projects/add',
  updateProject: BASEURL + 'admin/projects/edit/',
  deleteProject: BASEURL + 'admin/projects/delete/',
  viewProject: BASEURL + 'admin/projects/show',

  addPartner: BASEURL + 'admin/partners/add',
  updatePartner: BASEURL + 'admin/partners/edit/',
  deletePartner: BASEURL + 'admin/partners/delete/',
  viewPartner: BASEURL + 'admin/partners/show',

  updateAboutus: BASEURL + 'admin/company_info/about_us/edit',
  viewAboutus: BASEURL + 'admin/company_info/about_us/show',
  updateOverview: BASEURL + 'admin/company_info/overview/edit',
  viewOverview: BASEURL + 'admin/company_info/overview/show',
  updateVision: BASEURL + 'admin/company_info/vision/edit',
  viewVision: BASEURL + 'admin/company_info/vision/show',
  updateGoal: BASEURL + 'admin/company_info/goal/edit',
  viewGoal: BASEURL + 'admin/company_info/goal/show',
  updateContact: BASEURL + 'admin/company_info/contact_info/edit',
  viewContact: BASEURL + 'admin/company_info/contact_info/show',
}
