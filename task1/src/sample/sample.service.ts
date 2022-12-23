import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSampleDto } from "./dto/create-sample.dto";
import { SampleTask } from "./entities/sample.entity";

//USING THE INJECTABLE DECORATOR TO SPECIFY THE BELOW CLASS AS THE SERVICE PROVIDER
@Injectable()
export class SampleService{
    constructor(
        @InjectRepository(SampleTask)
        private userRepository: Repository<SampleTask>,
    ){}

    //GETPLANT METHOD WHICH WAS DEFINED IN THE CONTROLLER FOR GET METHOD 
    getPlant(): Promise<SampleTask[]>{
        return this.userRepository.find();
    }

    //SAVEPLANT METHOD WHICH WAS DEFINED IN THE CONTROLLER FOR POST METHOD
    savePlant(createSampleDto: CreateSampleDto) {
        return this.userRepository.save(createSampleDto);
      }
}
