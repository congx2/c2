import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type BannerDocument = HydratedDocument<Banner>

@Schema()
export class Banner {
  @Prop({ type: String, default: '' })
  cover: string

  @Prop({ type: String, default: '' })
  link: string

  @Prop({ type: Number, default: 1 })
  order: number

  @Prop({ type: String, default: Date.now() })
  createdAt: Date

  @Prop({ type: String, default: Date.now() })
  updateAt: Date
}

export const BannerSchema = SchemaFactory.createForClass(Banner)
