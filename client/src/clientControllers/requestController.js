class requestController {

  constructor() {
    this.rootURL = process.env.REACT_APP_API_URL
  }
  
  createRequest = (path, method) => {

    let url      = process.env.REACT_APP_API_URL + path
    let settings = { method: method } 
    let request  = new Request(url, settings)

    return fetch(request)
  }

  get = (path) => this.createRequest(path, 'GET')

}
export default new requestController()