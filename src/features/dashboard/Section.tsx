import React from 'react';

interface SectionProps {
  title: string;
  data: { label: string; value: string | number | undefined; isCurrency?: boolean; isDuration?: boolean }[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => (
  <div className="section">
    <h2 className='col-blue fw-500 fs-24'>{title}</h2>
    <div className="row mb-3">
      {data.map((item, index) => (
        <div className="col-md-3" key={index} style={{ minWidth: '150px' }}>
          <h5 className='fs-12 fw-400 col-gray' style={{ textTransform: 'uppercase' }}>{item.label}:</h5>
          <p className='fs-16 fw-600 col-gray'>{
            item.isCurrency
              ? `₦${item.value}`
              : item.isDuration
              ? `${item.value} years`
              : item.value || 'N/A'
          }</p>
        </div>
      ))}
    </div>
    <hr />
  </div>
);

const sections = (user: any) => [
  {
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
    title: "Socials",
    data: [
      { label: 'Twitter', value: user.socialMedia?.twitter },
      { label: 'Facebook', value: user.socialMedia?.facebook },
      { label: 'Instagram', value: user.socialMedia?.instagram },
    ],
  },
  {
    title: "Guarantor",
    data: [
      { label: 'Full Name', value: user.guarantor?.fullName },
      { label: 'Phone Number', value: user.guarantor?.phoneNumber },
      { label: 'Email', value: user.guarantor?.email },
      { label: 'Relationship', value: user.guarantor?.relationship },
    ],
  },
  {
    title: "Second Guarantor",
    data: [
      { label: 'Full Name', value: user.secondGuarantor?.fullName },
      { label: 'Phone Number', value: user.secondGuarantor?.phoneNumber },
      { label: 'Email', value: user.secondGuarantor?.email },
      { label: 'Relationship', value: user.secondGuarantor?.relationship },
    ],
  },
];

export { Section, sections };
