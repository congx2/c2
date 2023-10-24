import { Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { HttpService } from '@nestjs/axios'

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  validateTicket(ticket: string): Promise<any> {
    const url = 'https://cas.sit.sf-express.com/cas/validate3.0'
    const data = {
      st: ticket,
      service: 'http://localhost:3000'
    }
    return this.httpService.post(url, data) as any as Promise<any>
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth'
  }

  findAll() {
    return `This action returns all auth`
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }
}
