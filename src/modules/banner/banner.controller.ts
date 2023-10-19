import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'

import { BannerService } from './banner.service'
import { CreateBannerDto } from './dto/create-banner.dto'
import { UpdateBannerDto } from './dto/update-banner.dto'

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post('create')
  create(@Body() banner: CreateBannerDto) {
    return this.bannerService.create(banner)
  }

  @Get('list')
  findAll() {
    return this.bannerService.findAll()
  }
}
