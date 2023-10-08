import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHelloDto } from './dto/create-hello.dto';
import { ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { Person } from './dto/person';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Person,
  })
  getHello(@Body() body: CreateHelloDto): Person {
    return this.appService.getHello(body);
  }
}
