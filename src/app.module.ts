import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { BannerModule } from './modules/banner/banner.module'
import configLoader from '@configs/index'

@Module({
  imports: [
    /** config */
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configLoader]
    }),

    /** db */
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return configService.get<MongooseModuleFactoryOptions>('mongodb')
      },
      inject: [ConfigService]
    }),

    BannerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
