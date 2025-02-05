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
import logo from '../../assets/images/svg/Group.svg';
import loginImage from '../../assets/images/svg/pablo-sign-in 1.svg';
import profile from '../../assets/images/png/profile-image.png';

// Navigation icons
import switchOrg from '../../assets/images/svg/Icons/briefcase.svg';
import dashboard from '../../assets/images/svg/Icons/home.svg';
import search from '../../assets/images/svg/Icons/search.svg';
import notification from '../../assets/images/svg/Icons/notification.svg';
import dropdown from '../../assets/images/svg/Icons/dropdown.svg';
import dropdownempty from '../../assets/images/svg/Icons/dropdown-empty.svg';
import logout from '../../assets/images/svg/Icons/signout.svg';

// User management icons
import users from '../../assets/images/svg/Icons/userfriends.svg';
import guarantors from '../../assets/images/svg/Icons/users.svg';
import whiteList from '../../assets/images/svg/Icons/userchecks.svg';
import karma from '../../assets/images/svg/Icons/usertimes.svg';

// Financial icons
import loans from '../../assets/images/svg/Icons/sack.svg';
import decisionModels from '../../assets/images/svg/Icons/handshakeregular.svg';
import savings from '../../assets/images/svg/Icons/piggybank.svg';
import loanRequests from '../../assets/images/svg/Icons/Group 104.svg';
import savingsProduct from '../../assets/images/svg/Icons/npbank.svg';
import fees from '../../assets/images/svg/Icons/coins.svg';
import transactions from '../../assets/images/svg/Icons/icon.svg';

// Service icons
import services from '../../assets/images/svg/Icons/galaxy.svg';
import servicesAcct from '../../assets/images/svg/Icons/usercog.svg';
import settlement from '../../assets/images/svg/Icons/scroll.svg';
import reports from '../../assets/images/svg/Icons/chartbar.svg';

// Settings icons
import preferences from '../../assets/images/svg/Icons/sliders.svg';
import pricing from '../../assets/images/svg/Icons/badgepercent.svg';
import audit from '../../assets/images/svg/Icons/clipboard.svg';
import messages from '../../assets/images/svg/Icons/tire.svg';

// Statistics Icons 
import firststat from '../../assets/images/svg/Icons/firststat.svg';
import secondstat from '../../assets/images/svg/Icons/secondstat.svg';
import thirdstat from '../../assets/images/svg/Icons/thirdstat.svg';
import fourthstat from '../../assets/images/svg/Icons/fourthstat.svg';

// Users Table Icons
import filter from '../../assets/images/svg/Icons/filter-details.svg';
import ellipsis from '../../assets/images/svg/Icons/ellipsis.svg';
import backArrow from '../../assets/images/svg/Icons/backArrow.svg';
import next from '../../assets/images/svg/Icons/next.svg';
import prev from '../../assets/images/svg/Icons/prev.svg';


// Ellipsis Icons
import view from '../../assets/images/svg/Icons/view.svg';
import activateUser from '../../assets/images/svg/Icons/activateUser.svg';
import deleteUser from '../../assets/images/svg/Icons/deleteUser.svg';

// Filter Icons
import calender from '../../assets/images/svg/Icons/calender.svg';

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
  readonly next: string; 
  readonly prev: string; 

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
  next,
  prev,

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
  next: Next,
  prev: Prev,

  // Ellipsis
  view: View,
  activateUser: ActivateUser,
  deleteUser: DeleteUser,

  // Filter Icons
  calender: Calender,

} = svgAssets;

export default svgAssets;
