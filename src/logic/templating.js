import Handlebars from 'handlebars'
import { templateString } from './threadRecommendationTemplate'  

const template = Handlebars.compile(templateString)


const getHtml = (props) => {
    const val = template(props)
    console.log(val)
    return val
}

const sampleOperationsProps = {
    requestId: 'requestId value',
    description: 'description value',
    stitchType: 'stitchType value',
    stitchRateUnit: 'stitchRateUnit value',
    stitchRate: 0xDEADBEEF,
    bightRateUnit: 'bightRateUnit value',
    bightRate: 0xCAFEBABE,
    needleSize: 'needleSize value',
    needlePoint: 'needlePoint value',
    brandThread: 'brandThread value',
    needleBrand: 'needleBrand value',
    needleBrandSize: 0x0FF1CE,
    looperBrand: 'looperBrand value',
    looperBrandSize: 0x8BADF00D,
    spreaderBrand: 'spreaderBrand value',
    spreaderBrandSize: 0xDABBADEE,
    observation: 'observation value',
    uploadImgVideo: 'uploadImgVideo value',
    createdAt: 'createdAt value',
    updatedAt: 'updatedAt value',
}

const sampleCreateRecommendationFormValues = {
    segment: 'segment value',
    garmentType: 'garmentType value',
    styleCode: 'styleCode value',
    fabricType: 'fabricType value',
    fabricComposition: 'fabricComposition value',
    fabricWeightUnit: 'fabricWeightUnit value',
    fabricWeight: 'fabricWeight value',
    postSewingTreatmentType: 'postSewingTreatmentType value',
    postSewingTreatment: 'postSewingTreatment value',
    operations: [sampleOperationsProps, sampleOperationsProps],
}

const sampleCustomerProps = {}

export default getHtml
export { sampleCreateRecommendationFormValues, sampleCustomerProps, sampleOperationsProps }