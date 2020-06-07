import { Controller, Get, Post, Req } from '@nestjs/common';
import { PositionService } from './position.service';
import { Request } from 'express';

@Controller('position')
export class PositionController {
  constructor(private readonly positionService: PositionService) {}

  @Get()
  getHello(): string {
    return this.positionService.getHello();
  }

  @Post()
  insertPosition(@Req() request: Request): boolean {
    return this.positionService.insertPosition(request)
  }
}
