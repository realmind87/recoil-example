const apiServer = process.env.NODE_ENV === 'production' ? 'http://api.east-zero.com' : 'http://localhost:4000'
export default apiServer