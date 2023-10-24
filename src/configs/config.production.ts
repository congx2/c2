const config = {
  // swagger
  swagger: {
    title: 'Hackathon Api Docs',
    description: `Current Env: ${process.env.NODE_ENV}`,
    version: '1.0',
    tag: 'Api List',
    path: 'api'
  },

  mongodb: {
    uri: 'mongodb://localhost/nest',
    user: '',
    pass: '',
    replicaSet: '',
    authSource: ''
  }
}
export default config
