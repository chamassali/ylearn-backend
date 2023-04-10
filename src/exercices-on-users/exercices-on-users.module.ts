import { Module } from '@nestjs/common';
import { ExercicesOnUsersController } from './exercices-on-users.controller';
import { ExercicesOnUsersService } from './exercices-on-users.service';

@Module({
  controllers: [ExercicesOnUsersController],
  providers: [ExercicesOnUsersService]
})
export class ExercicesOnUsersModule {}
