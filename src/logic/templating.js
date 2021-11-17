import Handlebars from 'handlebars'
import { templateString, operationPartial } from './threadRecommendationTemplate'

const template = Handlebars.compile(templateString)
Handlebars.registerPartial('operationsPartial', operationPartial)

const getHtml = (props) => {
    const val = template(props)
    console.log(val)
    return val
}

export default getHtml