export function processCitizenIntent(input: string) {
  const text = input.toLowerCase();
  
  if (text.includes('scholarship') || text.includes('college') || text.includes('student')) {
    return {
      intent: 'SCHOLARSHIP_ASSISTANCE',
      category: 'Education',
      service: 'Post-Matric Scholarship',
      nextStep: 'eligibility',
      confidence: 0.94,
      requiredDocuments: ['Aadhaar', 'Income Certificate', 'Previous Marksheet', 'Caste Certificate']
    };
  }
  
  if (text.includes('crop') || text.includes('rain') || text.includes('farmer') || text.includes('damage')) {
    return {
      intent: 'CROP_DAMAGE_RELIEF',
      category: 'Agriculture',
      service: 'Crop Damage Compensation',
      nextStep: 'documents', // Go straight to evidence
      confidence: 0.91,
      requiredDocuments: ['Khasra/Khatauni', 'Photo of Damaged Crop', 'Bank Passbook']
    };
  }

  if (text.includes('road') || text.includes('pothole') || text.includes('broken')) {
    return {
      intent: 'URBAN_INFRASTRUCTURE_GRIEVANCE',
      category: 'Urban Infrastructure',
      service: 'Road Maintenance',
      nextStep: 'grievance_draft',
      confidence: 0.96,
      requiredDocuments: ['Photo of pothole/road']
    };
  }

  return {
    intent: 'UNKNOWN',
    category: 'General',
    service: 'Help Desk',
    nextStep: 'ask',
    confidence: 0.4,
    requiredDocuments: []
  };
}
