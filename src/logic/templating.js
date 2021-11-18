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

const titleEachOperation = (operations) => {
    if (operations.length === 1) { 
        operations[0].sectionTitle = 'Operations'
    } else {
        operations.forEach((e, index) => {
            e.sectionTitle = `Operation ${index < 9 ? '0':''}${index+1}`
        })
    }
}

const sliceDataForPages = (props) => {
    const firstPageData = Object.assign({}, props)
    const operations = props.recommendation.operations
    titleEachOperation(operations)
    firstPageData.reportDate = getBestReportDate()

    // Keep the first operation on the data.recommendation.operations field
    firstPageData.recommendation.operations = [operations[0]]
    // Remember the remaining list of operations for additional pages
    const remainingOperations = operations.slice(1)
    
    // Calculate the total number of pages to be produced:
    // Customer data + Operation 1 = 1 page
    // 2 of the remaining operations per page
    const remainingOperationCount = 1 + firstPageData.recommendation.operations.length
    firstPageData.pageCount = Math.ceil(remainingOperationCount / 2)
    return [firstPageData, chunk(remainingOperations, 2)]
}


const getHtml = (threadRecommendation) => {
    const [ firstPageData, operationChunks ] = sliceDataForPages(threadRecommendation)

    console.log('first page data', firstPageData)
    console.log('operation chunks', operationChunks)

    // Customer + first Operation
    const pages = []
    pages.push(firstTemplate(firstPageData))
    console.log('First page', pages[0])
    
    // Create pages for remainder of operations
    for (let i=0; i < operationChunks.length; i++) {
        // Index here == page number
        const page = followOnTemplate({ operations: operationChunks[i], pageNumber: i })
        pages.push(page)
    }
    
    // return pages
    return pages[0]
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
    const html = getHtml(threadRecommendation)
    // TODO convert each chunk into a PDF
    const pdfData = html

    return pdfData
}

export default getPdf
export {
    getHtml
}