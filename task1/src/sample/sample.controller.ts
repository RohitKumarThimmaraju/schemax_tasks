import { Controller, Get, Post } from "@nestjs/common";
import { SampleService } from "./sample.service";

//USING CONTROLLER DECORATOR TO SPECIFY THE CLASS AS CONTROLLER
@Controller('sample')
export class SampleController{

    //SERVICE CONSTRUCTOR
    constructor(
        private readonly sampleService: SampleService
    ){}

    //GET DECORATOR TO DEFINE THE GET METHOD
    @Get('/getAll')
    getPlant(){
        return this.sampleService.getPlant();
    }

    //POST DECORATOR TO DEFINE THE POST METHOD
    @Post('/save')
    savePlant(){
        return this.sampleService.savePlant();
    }
}