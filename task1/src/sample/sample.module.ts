import { Module } from "@nestjs/common";
import { SampleController } from "./sample.controller";
import { SampleService } from "./sample.service";

//USING MODULE ANNOTATION TO SPECIFY THE CLASS AS MODULE
@Module({
    imports: [],
    
    // DECLARING CONTROLLERS TO BE USED 
    controllers: [SampleController],
    
    // DECLARING SERVICE PROVIDERS TO BE USED
    providers: [SampleService],
})
export class SampleModule{}