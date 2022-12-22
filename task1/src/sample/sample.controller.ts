import { Controller, Get, Post } from "@nestjs/common";
import { SampleService } from "./sample.service";

@Controller('sample')
export class SampleController{
    constructor(
        private readonly sampleService: SampleService
    ){}

    @Get()
    getPlant(){
        return this.sampleService.getPlant();
    }

    @Post()
    savePlant(){
        return this.sampleService.savePlant();
    }
}