export interface User {
  id: string;
  username: string;
  organization: string;
  email: string;
  phoneNumber?: string;
  lastActiveDate?: string;
  status?: string;
  loan?: string;
  savings?: string;
  dateJoined?: string;
  bvn?: string;
  gender?: string;
  maritalStatus?: string;
  tier: number;
  accountBalance: number;
  accountNumber: string;
  bank: string;
}
