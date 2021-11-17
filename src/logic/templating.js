import Handlebars from 'handlebars'
import { chunk } from 'lodash'
import { operationPartial, templateFirstPage, templateFollowOnPage } from './threadRecommendationTemplate'

const firstTemplate = Handlebars.compile(templateFirstPage)
const followOnTemplate = Handlebars.compile(templateFollowOnPage)
Handlebars.registerPartial('operationsPartial', operationPartial)

const getBestReportDate = () => {
    // determine date of recommendation
    const now = new Date()
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric'};
    const timeOptions = {hour: '2-digit', minute: '2-digit'}
    return `${now.toLocaleTimeString([], timeOptions)} ${now.toLocaleDateString([], dateOptions)}`
} 

const chunkData = (props) => {
    const newProps = Object.assign({}, props)
    // calculate # of pages
    // determine names of sections based on count of operations
    if (newProps.recommendation.operations.length === 1) {
        newProps.recommendation.operations[0].sectionTitle = 'Operations'
        newProps.pageCount = 1
    } else {
        const chunks = chunk(newProps.recommendation.operations.slice(1) ,2)
        newProps.pageCount = 2
        newProps.recommendation.operations.forEach((e, index) => {
            e.sectionTitle = `Operation ${index < 9 ? '0':''}${index+1}`
        })
    }
    
    newProps.reportDate = getBestReportDate()
    return newProps
}


const getHtml = (props) => {
    const newProps = calcDerivedValues(props)
    const chunks = chunkData(newProps)

    // Customer + first Operation
    const val = firstTemplate(chunks[0])
    console.log(val)
    
    // All other operations

    
    return val
}

// check for validity (must have at least one operation)
const checkValidData = (threadRecommendation) => {
    if (!threadRecommendation) {
        throw new Error('Cannot create thread recommendation PDF/email for blank threadRecommendation!')
    }
    if (!threadRecommendation.operations || threadRecommendation.operations.length < 1) {
        throw new Error('Cannot create thread recommendation PDF/email for threadRecommendation with associated no Operation data!')
    }
}

/**
 * 
 * @param {*} threadRecommendation 
 */
const getPdf = (threadRecommendation) => {
    checkValidData()
    const chunkedData = chunkData(threadRecommendation)

    // getHtml chunks (pages)
    const html = getHtml(chunkedData)

    // convert each chunk into a PDF

    // return pdf data
}

export default getPdf
export {
    getHtml
}