import Handlebars from 'handlebars'
import { templateString, operationPartial } from './threadRecommendationTemplate'

const template = Handlebars.compile(templateString)
Handlebars.registerPartial('operationsPartial', operationPartial)

const calcDerivedValues = (props) => {
    const newProps = Object.assign({}, props)
    // calculate # of pages
    // determine names of sections based on count of operations
    if (newProps.recommendation.operations.length === 1) {
        newProps.recommendation.operations[0].sectionTitle = 'Operations'
        newProps.pageCount = 1
    } else {
        newProps.pageCount = 2
        newProps.recommendation.operations.forEach((e, index) => {
            e.sectionTitle = `Operation ${index < 9 ? '0':''}${index+1}`
        })
    }
    // determine date of recommendation
    const now = new Date()
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric'};
    const timeOptions = {hour: '2-digit', minute: '2-digit'}
    newProps.reportDate = `${now.toLocaleTimeString([], timeOptions)} ${now.toLocaleDateString([], dateOptions)}`
    return newProps
}

const getHtml = (props) => {
    const newProps = calcDerivedValues(props)

    const val = template(newProps)
    console.log(val)
    return val
}

export default getHtml