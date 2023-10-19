import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Banner } from './schemas/banner.schema'
import { CreateBannerDto } from './dto/create-banner.dto'
import { UpdateBannerDto } from './dto/update-banner.dto'

@Injectable()
export class BannerService {
  constructor(@InjectModel(Banner.name) private bannerModel: Model<Banner>) {}

  async create(createBannerDto: CreateBannerDto): Promise<any> {
    const createdBanner = new this.bannerModel(createBannerDto)
    const data = await createdBanner.save()
    return {
      code: 0,
      message: 'OK',
      data
    }
  }

  async findAll(): Promise<any> {
    const data = await this.bannerModel.find().exec()
    return {
      code: 0,
      message: 'OK',
      data
    }
  }
}
