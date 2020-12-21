  
import { defaultUrl } from './config'

const createUrl = (url, default_url = defaultUrl) => {
  return `${default_url}${url}`
}

export { createUrl }