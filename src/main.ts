import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

const initSwagger = (app, swaggerConfig) => {
  const { title, description, version, tag, path, servers } = swaggerConfig
  let config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addTag(tag)

  if (Array.isArray(servers) && servers.length) {
    config = servers.reduce((acc: typeof config, item) => {
      const { url, description, variables } = item
      return acc.addServer(url, description, variables)
    }, config)
  }
  // servers.forEach(item => {
  //   const { url, description, variables } = item
  //   config.addServer(url, description)
  // })

  const document = SwaggerModule.createDocument(app, config.build())
  SwaggerModule.setup(path, app, document)
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  initSwagger(app, configService.get('swagger'))
  await app.listen(3000, 'localhost')
  console.log(`
  \n[Service] is running on http://localhost:3000\n[Api doc] is running on http://localhost:3000/api
  `)
}

bootstrap()
