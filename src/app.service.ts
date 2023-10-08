import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './dto/create-hello.dto';
import { Person } from './dto/person';

@Injectable()
export class AppService {
  getHello(body: CreateHelloDto): Person {
    return body;
  }
}
