import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';

//USING MODULE ANNOTATION TO SPECIFY THE CLASS AS MODULE
@Module({

  // IMPORTING THE USER DEFINED MODULES TO THE APP MODULE
  imports: [SampleModule],

  // DECLARING CONTROLLERS TO BE USED 
  controllers: [AppController],

  // DECLARING SERVICE PROVIDERS TO BE USED
  providers: [AppService],
})
export class AppModule {}
