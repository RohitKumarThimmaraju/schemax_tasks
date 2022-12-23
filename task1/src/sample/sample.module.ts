import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SampleTask } from "./entities/sample.entity";
import { SampleController } from "./sample.controller";
import { SampleService } from "./sample.service";

//USING MODULE ANNOTATION TO SPECIFY THE CLASS AS MODULE
@Module({
    imports: [TypeOrmModule.forFeature([SampleTask])],
    
    // DECLARING CONTROLLERS TO BE USED 
    controllers: [SampleController],
    
    // DECLARING SERVICE PROVIDERS TO BE USED
    providers: [SampleService],
})
export class SampleModule{}