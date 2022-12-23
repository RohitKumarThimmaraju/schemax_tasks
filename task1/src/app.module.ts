import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleTask } from './sample/entities/sample.entity';
import { SampleModule } from './sample/sample.module';

//USING MODULE ANNOTATION TO SPECIFY THE CLASS AS MODULE
@Module({

  // IMPORTING THE USER DEFINED MODULES TO THE APP MODULE
  imports: [
    SampleModule,
    
    //Database connection and typeOrm Initialisation 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '14314323',
      database: 'sample',
      entities: [SampleTask],
      synchronize: true,
    }),
  ],

  // DECLARING CONTROLLERS TO BE USED 
  controllers: [AppController],

  // DECLARING SERVICE PROVIDERS TO BE USED
  providers: [AppService],
})
export class AppModule {}
