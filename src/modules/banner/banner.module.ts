import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BannerService } from './banner.service'
import { BannerController } from './banner.controller'
import { Banner, BannerSchema } from './schemas/banner.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Banner.name, schema: BannerSchema }])
  ],
  controllers: [BannerController],
  providers: [BannerService]
})
export class BannerModule {}
