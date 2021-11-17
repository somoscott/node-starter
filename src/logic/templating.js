import Handlebars from 'handlebars'
import { templateString } from './threadRecommendationTemplate'

const template = Handlebars.compile(templateString)

const getHtml = (props) => {
    const val = template(props)
    console.log(val)
    return val
}

export default getHtml