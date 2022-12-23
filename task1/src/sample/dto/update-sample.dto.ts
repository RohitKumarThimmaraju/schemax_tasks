import { PartialType } from '@nestjs/mapped-types';
import { IsString } from "class-validator";
import { CreateSampleDto } from "./create-sample.dto";

export class UpdateSampleDto extends PartialType(CreateSampleDto) {

    //IsString validator 
    @IsString()
    plantCode: string;

    //IsString validator 
    @IsString()
    plantName: string;

    //IsString validator 
    @IsString()
    userName: string;
}