import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Res
} from '@nestjs/common'
import { Response } from 'express'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import axios from 'axios'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login(@Query('ticket') ticket: string, @Res() res: Response) {
    console.log('ticket: ', ticket)
    if (!ticket) {
      return res.redirect(
        'https://cas.sit.sf-express.com/cas/login?service=http://localhost:3000/auth/login'
      )
    }
    const url = 'https://cas.sit.sf-express.com/cas/validaServiceTicket3.0'
    const data = {
      st: ticket,
      service: 'https://cas.sit.sf-express.com/'
    }
    const method = 'POST'
    axios({ method, url, data })
      .then(res => {
        console.log('res:')
        console.log(res)
      })
      .catch(e => {
        console.log('e:')
        console.log(e)
      })
    // this.authService
    //   .validateTicket(ticket)
    //   .then(res => {
    //     console.log('res:')
    //     console.log(res)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  }
}
