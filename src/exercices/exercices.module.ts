import { Module } from '@nestjs/common';
import { ExercicesController } from './exercices.controller';

@Module({
  controllers: [ExercicesController]
})
export class ExercicesModule {}
