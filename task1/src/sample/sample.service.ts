import { Injectable } from "@nestjs/common";

//USING THE INJECTABLE DECORATOR TO SPECIFY THE BELOW CLASS AS THE SERVICE PROVIDER
@Injectable()
export class SampleService{

    //GETPLANT METHOD WHICH WAS DEFINED IN THE CONTROLLER FOR GET METHOD 
    getPlant(): string {
        return 'GET method Called';
    }

    //SAVEPLANT METHOD WHICH WAS DEFINED IN THE CONTROLLER FOR POST METHOD
    savePlant(): string {
        return 'POST method Called';
      }
}
