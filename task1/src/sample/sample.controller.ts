import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateSampleDto } from "./dto/create-sample.dto";
import { SampleService } from "./sample.service";

//USING CONTROLLER DECORATOR TO SPECIFY THE CLASS AS CONTROLLER
@ApiTags('Sample Task Module')
@Controller('sample')
export class SampleController{

    //SERVICE CONSTRUCTOR
    constructor(
        private readonly sampleService: SampleService
    ){}

    //GET DECORATOR TO DEFINE THE GET METHOD
    @Get('/getAll')
    @ApiOperation({summary: 'Get all data from this API'})
    @ApiResponse({
        status: 200,
        description: 'List of all the Data'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbidden Error'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal Server Error'
    })
    getPlant(){
        return this.sampleService.getPlant();
    }

    //POST DECORATOR TO DEFINE THE POST METHOD
    @Post('/save')
    @ApiOperation({summary: 'Saving new Object'})
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    example: 5,
                    description: 'This is a unique Id',
                },
                plantCode: {
                    type: 'string',
                    example: 'QX55W',
                    description: 'This is the plant code',
                },
                plantName: {
                    type: 'string',
                    example: 'Brazil',
                    description: 'This is the plant name',
                },
                userName: {
                    type: 'string',
                    example: 'abcd',
                    description: 'This is the name of the User',
                },
            }
        }
    })
    savePlant(@Body() createSampleDto: CreateSampleDto){
        return this.sampleService.savePlant(createSampleDto);
    }
}