const fieldNames = [
  'email',
  'reTypeEmail',
  'dayTimeNumber',
  'title',
  'dateOfBirth.year',
  'dateOfBirth.month',
  'dateOfBirth.day',
  'firstName',
  'middleNames',
  'lastName',
  'location.country',
  'location.region',
  'specialRequests.frequentFlyerProgram',
  'specialRequests.mileageProgramNumber',
  'specialRequests.specialRequirements',
  'selectedPackage',
  // 'bpg', // doesn't have a name
  'paymentSource.ccNumber',
  'paymentSource.securityCode',
  'accountHolder.firstName',
  'accountHolder.lastName',
  'paymentSource.expiryMonth',
  'paymentSource.expiryYear',
  'billingAddress.country',
  'billingAddress.street',
  'billingAddress.unit',
  'billingAddress.city',
  'billingAddress.region',
  'billingAddress.postalCode',
];

const getFields = () => (
  fieldNames.map(
    field => ({
      name: field,
      elements: document.getElementsByName(field),
    })
  )
);

const fillFieldsOfSameType = ({ elements, name }) => (
  elements.forEach((element, index) => {
    element.value = data[name] || 'test';
  })
);

const fillFields = () => (
  getFields().forEach((field) => {
    fillFieldsOfSameType(field);
  })
);

const data = {
  firstName: 'Roofus',
  middleNames: 'Moofus',
  lastName: 'Summers',
};

chrome.runtime.sendMessage('getOptions', (response) => {
  if (window && !window.formFiller) {
    window.formFiller = fillFields;
  }
});
