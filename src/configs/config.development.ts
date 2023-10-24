const config = {
  // swagger
  swagger: {
    title: 'Hackathon Api Docs',
    description: `Current Env: ${process.env.NODE_ENV}`,
    version: '1.0',
    tag: 'Api List',
    path: 'api',
    servers: [
      {
        url: 'https://baidu.com',
        description: '百度啊'
      },
      {
        url: 'https://goggle.com',
        description: '谷歌啊'
      }
    ]
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
