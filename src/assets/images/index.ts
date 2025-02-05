/**
 * Asset Management Module
 * 
 * This module exports all image assets with TypeScript types,
 * following best practices for:
 * - Maintainability
 * - Type safety
 * - Tree-shaking optimization
 * - Selective imports
 */

/**
 * Import SVG files with explicit paths
 * Using explicit imports ensures better tree-shaking and bundle optimization
 */
// Core assets
import logo from './svg/Group.svg';
import loginImage from './svg/pablo-sign-in 1.svg';
import profile from './png/profile-image.png';

// Navigation icons
import switchOrg from './svg/Icons/briefcase.svg';
import dashboard from './svg/Icons/home.svg';
import search from './svg/Icons/search.svg';
import notification from './svg/Icons/notification.svg';
import dropdown from './svg/Icons/dropdown.svg';
import dropdownempty from './svg/Icons/dropdown-empty.svg';
import logout from './svg/Icons/signout.svg';

// User management icons
import users from './svg/Icons/userfriends.svg';
import guarantors from './svg/Icons/users.svg';
import whiteList from './svg/Icons/userchecks.svg';
import karma from './svg/Icons/usertimes.svg';

// Financial icons
import loans from './svg/Icons/sack.svg';
import decisionModels from './svg/Icons/handshakeregular.svg';
import savings from './svg/Icons/piggybank.svg';
import loanRequests from './svg/Icons/Group 104.svg';
import savingsProduct from './svg/Icons/npbank.svg';
import fees from './svg/Icons/coins.svg';
import transactions from './svg/Icons/icon.svg';

// Service icons
import services from './svg/Icons/galaxy.svg';
import servicesAcct from './svg/Icons/usercog.svg';
import settlement from './svg/Icons/scroll.svg';
import reports from './svg/Icons/chartbar.svg';

// Settings icons
import preferences from './svg/Icons/sliders.svg';
import pricing from './svg/Icons/badgepercent.svg';
import audit from './svg/Icons/clipboard.svg';
import messages from './svg/Icons/tire.svg';

// Statistics Icons 
import firststat from './svg/Icons/firststat.svg';
import secondstat from './svg/Icons/secondstat.svg';
import thirdstat from './svg/Icons/thirdstat.svg';
import fourthstat from './svg/Icons/fourthstat.svg';

// Users Table Icons
import filter from './svg/Icons/filter-details.svg';
import ellipsis from './svg/Icons/ellipsis.svg';
import backArrow from './svg/Icons/backArrow.svg';


// Ellipsis Icons
import view from './svg/Icons/view.svg';
import activateUser from './svg/Icons/activateUser.svg';
import deleteUser from './svg/Icons/deleteUser.svg';

// Filter Icons
import calender from './svg/Icons/calender.svg';

/**
 * Interface representing the structure of all image assets
 * Organized by functional categories for better maintainability
 */
interface ImageAssets {
  // Core assets
  readonly logo: string;
  readonly loginImage: string;
  readonly profile: string;

  // Navigation
  readonly switchOrg: string;
  readonly dashboard: string;
  readonly search: string;
  readonly notification: string;
  readonly dropdown: string;
  readonly dropdownempty: string;
  readonly logout: string;

  // User Management
  readonly users: string;
  readonly guarantors: string;
  readonly whiteList: string;
  readonly karma: string;

  // Financial
  readonly loans: string;
  readonly decisionModels: string;
  readonly savings: string;
  readonly loanRequests: string;
  readonly savingsProduct: string;
  readonly fees: string;
  readonly transactions: string;

  // Services
  readonly services: string;
  readonly servicesAcct: string;
  readonly settlement: string;
  readonly reports: string;

  // Settings
  readonly preferences: string;
  readonly pricing: string;
  readonly audit: string;
  readonly messages: string;

  // Statistics
  readonly firststat: string;
  readonly secondstat:string;
  readonly thirdstat: string;
  readonly fourthstat: string;

  // Users Table
  readonly filter: string; 
  readonly ellipsis: string; 
  readonly backArrow: string; 

  //Ellipsis Icons
  readonly view: string; 
  readonly activateUser: string; 
  readonly deleteUser: string; 

  // Filter Icons
  readonly calender: string; 
}

/**
 * Collection of all image assets
 * Object is frozen to prevent runtime modifications
 */
export const svgAssets: Readonly<ImageAssets> = Object.freeze({
  // Core assets
  logo,
  loginImage,
  profile,

  // Navigation
  switchOrg,
  dashboard,
  search,
  notification,
  dropdown,
  dropdownempty,
  logout,

  // User Management
  users,
  guarantors,
  whiteList,
  karma,

  // Financial
  loans,
  decisionModels,
  savings,
  loanRequests,
  savingsProduct,
  fees,
  transactions,

  // Services
  services,
  servicesAcct,
  settlement,
  reports,

  // Settings
  preferences,
  pricing,
  audit,
  messages,

  // Statistics
  firststat,
  secondstat,
  thirdstat, 
  fourthstat,

  // Users Table
  filter,
  ellipsis,
  backArrow,

  //Ellipsis Icons
  view, 
  activateUser,
  deleteUser,

  // Filter Icons
  calender,
});

/**
 * Named exports for individual assets
 * Enables selective imports of specific assets
 * @example import { Logo, Dashboard } from 'assets/images'
 */
export const {
  // Core assets
  logo: Logo,
  loginImage: LoginImage,
  profile: Profile,

  // Navigation
  switchOrg: SwitchOrg,
  dashboard: Dashboard,
  search: Search,
  notification: Notification,
  dropdown: Dropdown,
  dropdownempty: DropdownEmpty,
  logout: Logout,

  // User Management
  users: Users,
  guarantors: Guarantors,
  whiteList: WhiteList,
  karma: Karma,

  // Financial
  loans: Loans,
  decisionModels: DecisionModels,
  savings: Savings,
  loanRequests: LoanRequests,
  savingsProduct: SavingsProduct,
  fees: Fees,
  transactions: Transactions,

  // Services
  services: Services,
  servicesAcct: ServicesAcct,
  settlement: Settlement,
  reports: Reports,

  // Settings
  preferences: Preferences,
  pricing: Pricing,
  audit: Audit,
  messages: Messages,

  // Statistice
  firststat: Firststat,
  secondstat: Secondstat,
  thirdstat: Thirdstat,
  fourthstat: Fourthstat,

  // Users Table
  filter: Filter,
  ellipsis: Ellipsis,
  backArrow: Backarrow,

  // Ellipsis
  view: View,
  activateUser: ActivateUser,
  deleteUser: DeleteUser,

  // Filter Icons
  calender: Calender,

} = svgAssets;

export default svgAssets;
