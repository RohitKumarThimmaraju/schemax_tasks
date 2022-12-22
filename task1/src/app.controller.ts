import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//USING CONTROLLER DECORATOR TO SPECIFY THE CLASS AS CONTROLLER
@Controller()
export class AppController {
  //SERVICE CONSTRUCTOR
  constructor(private readonly appService: AppService) {}

  //GET DECORATOR TO DEFINE THE GET METHOD
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
