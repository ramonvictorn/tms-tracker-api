import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PositionController } from './position.controller';
import { PositionService } from './position.service';

@Module({
  imports: [],
  controllers: [AppController, PositionController],
  providers: [AppService, PositionService],
})
export class AppModule {}
