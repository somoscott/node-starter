const Handlebars = require('handlebars')
const templateString = `<html>
<h1>Name: {{name}}</h1>
<h3>{{description}}</h3>
</html>`

const template = Handlebars.compile(templateString)


const foo = (props) => {
    const val = template(props)
    console.log(val)
    return val
}

const sampleProps = {
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

export default foo
export { sampleProps }
