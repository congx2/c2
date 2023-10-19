import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

const initSwagger = (app, swaggerConfig) => {
  const { title, description, version, tag, path } = swaggerConfig
  const config = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addTag(tag)
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(path, app, document)
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  initSwagger(app, configService.get('swagger'))
  await app.listen(3000)
}

bootstrap()
