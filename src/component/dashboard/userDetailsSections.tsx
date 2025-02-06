import React from 'react';

interface UserDetailsSectionsProps {
  title: string;
  data: { label: string; value: string | number | undefined; isCurrency?: boolean; isDuration?: boolean }[];
  isLast?: boolean;
}

// User Details Sections component
const UserDetailsSections: React.FC<UserDetailsSectionsProps> = ({ title, data, isLast }) => (
  <div className="section">
    <h2 className='col-blue fw-500 fs-16'>{title}</h2>
    <div className="row">
      {/* Render each item in the data array */}
      {data.map((item, index) => (
        <div className="col-md-3" key={index} style={{ minWidth: '150px' }}>
          {/* Display the label and value */}
          <h5 className='fs-12 fw-400 col-gray' style={{ textTransform: 'uppercase' }}>{item.label}:</h5>
          <p className='fs-16 fw-500 col-gray'>{
            item.isCurrency
              ? `₦${item.value}`
              : item.isDuration
              ? `${item.value} years`
              : item.value || 'N/A'
          }</p>
        </div>
      ))}
    </div>

    {/* Add a horizontal line if it's not the last section */}
    {!isLast && <hr />}
  </div>
);

// Function to generate user details sections
const userDetailsSections = (user: any) => [
  {
    // Personal Information
    title: "Personal Information",
    data: [
      { label: 'Full Name', value: user.username },
      { label: 'Phone Number', value: user.phoneNumber },
      { label: 'BVN', value: user.bvn },
      { label: 'Gender', value: user.gender },
      { label: 'Marital Status', value: user.maritalStatus },
      { label: 'Children', value: user.children },
    ],
  },
  {
    // Education and Employment
    title: "Education and Employment",
    data: [
      { label: 'Level of Education', value: user.educationLevel },
      { label: 'Employment Status', value: user.employmentStatus },
      { label: 'Sector of Employment', value: user.sectorOfEmployment },
      { label: 'Duration of Employment', value: user.durationOfEmployment, isDuration: true },
      { label: 'Office Mail', value: user.officeEmail },
      { label: 'Monthly Income', value: user.monthlyIncome, isCurrency: true },
      { label: 'Loan Repayment', value: user.loanRepayment },
    ],
  },
  {
    // Socials
    title: "Socials",
    data: [
      { label: 'Twitter', value: user.socialMedia?.twitter },
      { label: 'Facebook', value: user.socialMedia?.facebook },
      { label: 'Instagram', value: user.socialMedia?.instagram },
    ],
  },
  {
    // Guarantor
    title: "Guarantor",
    data: [
      { label: 'Full Name', value: user.guarantor?.fullName },
      { label: 'Phone Number', value: user.guarantor?.phoneNumber },
      { label: 'Email', value: user.guarantor?.email },
      { label: 'Relationship', value: user.guarantor?.relationship },
    ],
  },
  {
    // Second Guarantor
    title: "Second Guarantor",
    data: [
      { label: 'Full Name', value: user.secondGuarantor?.fullName },
      { label: 'Phone Number', value: user.secondGuarantor?.phoneNumber },
      { label: 'Email', value: user.secondGuarantor?.email },
      { label: 'Relationship', value: user.secondGuarantor?.relationship },
    ],
  },
];

export { UserDetailsSections, userDetailsSections };
