import { Injectable } from '@nestjs/common';

@Injectable()
export class PositionService {
  getHello(): string {
    return 'Hello World!';
  }
  insertPosition(position): boolean {
    console.log('Position on service ', position.body);
    return true;
  }
}
