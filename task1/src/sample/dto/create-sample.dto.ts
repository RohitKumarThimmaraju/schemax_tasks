import { IsString } from "class-validator";

export class CreateSampleDto{
    
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