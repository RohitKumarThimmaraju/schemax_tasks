import { Injectable } from "@nestjs/common";

@Injectable()
export class SampleService{
    getPlant(): string {
        return 'GET method Called';
    }

    savePlant() {
        return 'POST method Called';
      }
}
