import { Injectable } from '@nestjs/common';

//USING THE INJECTABLE DECORATOR TO SPECIFY THE BELOW CLASS AS THE SERVICE PROVIDER
@Injectable()
export class AppService {
  
  //GETHELLO METHOD WHICH WAS DEFINED IN THE CONTROLLER FOR GET METHOD 
  getHello(): string {
    return 'Hello World!';
  }
}
