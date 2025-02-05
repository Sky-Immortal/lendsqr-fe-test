// informationUtils.ts

import { userDetailsSections } from "../../component/dashboard/userDetailsSections";

export const getSectionData = (section: string, currentUser: any) => {
  switch (section) {
    case "Documents":
      return currentUser.documents;
    case "Bank Details":
      return currentUser.bankDetails;
    case "Loans":
      return currentUser.loans;
    case "Savings":
      return currentUser.saving;
    case "Apps and Systems":
      return currentUser.appsAndSystems;
    default:
      return userDetailsSections(currentUser);
  }
};
