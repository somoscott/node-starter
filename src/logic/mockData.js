const sampleTechProfile = {
    firstName: 'Ranjit',
    lastName: 'Iyver',
    country: 'Botswana',
    city: 'NOWHERE',
    timeZone: 'GMT-3',
    fullName: 'Ranjit Iyver',
}

const sampleCustomerProfile = {
    firstName: 'Sarat',
    lastName: 'Decker',
    country: 'India',
    city: 'UNKNOWN',
    timeZone: 'GMT-8',
    fullName: 'Sarat Decker',
    email: 'sample@email.ru',
    title: 'Manager',
    companyName: 'Fashion Apparel',
    companyCode: 'COMPANY_ID',
    salesOrgCode: 'SALES ORG CODE',
    department: 'AFK2021',
    languagePreference: 'en',
    secondaryLanguages: ['es', 'pt', 'de', 'fr'],
    preferredAdvisor: 'ignored',
}

const sampleOperation1Props = {
    requestId: 'requestId value',
    description: 'Close pocket',
    stitchType: '514',
    stitchRateUnit: 'per inch',
    stitchRate: 10,
    bightRateUnit: 'per inch',
    bightRate: 0.19,
    needleSize: '80/12',
    needlePoint: 'SES/FFG',
    brandThread: 'brandThread value',
    needleBrand: 'Sine',
    needleBrandSize: 40,
    looperBrand: 'Qua',
    looperBrandSize: 41,
    spreaderBrand: 'Non',
    spreaderBrandSize: 42,
    observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    uploadImgVideo: 'uploadImgVideo value',
    createdAt: 'a long time ago',
    updatedAt: '14:50pm May 08, 2021',
}

const sampleOperation2Props = {
    requestId: 'requestId value',
    description: 'THE SECOND ONE',
    stitchType: '514',
    stitchRateUnit: 'per inch',
    stitchRate: 10,
    bightRateUnit: 'per inch',
    bightRate: 0.19,
    needleSize: '80/12',
    needlePoint: 'SES/FFG',
    brandThread: 'brandThread value',
    needleBrand: 'Sine',
    needleBrandSize: 50,
    looperBrand: 'Qua',
    looperBrandSize: 51,
    spreaderBrand: 'Non',
    spreaderBrandSize: 52,
    uploadImgVideo: 'uploadImgVideo value',
    createdAt: 'a long time ago',
    updatedAt: '14:50pm May 08, 2021',
}

const sampleCreateRecommendationFormValues = {
    segment: 'Denim',
    garmentType: 'Jeans',
    styleCode: 'CT003',
    fabricType: 'Woven',
    fabricComposition: 'Cotton 100%',
    fabricWeightUnit: 'oz/y2',
    fabricWeight: '0.00',
    postSewingTreatmentType: 'Dry',
    postSewingTreatment: 'Lorem Ipsum',
    operations: [sampleOperation1Props, sampleOperation2Props],
}

const sampleData = {
    pageCount: 3,
    customerProfile: sampleCustomerProfile,
    techProfile: sampleTechProfile,
    recommendation: sampleCreateRecommendationFormValues,
}

export default sampleData
