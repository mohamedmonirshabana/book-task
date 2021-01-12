import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dataBaseName } from './share/content';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost/${dataBaseName}`),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
