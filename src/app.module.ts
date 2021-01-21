import { MiddlewareConsumer, Module, NestMiddleware } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { dataBaseName } from './share/content';
import { UserModule } from './users/user.module';
import { BookModule } from './books/book.module';
import { GetUserMiddleware } from './Middleware/getuser.Middleware';
import { BookController } from './books/books.controller';
import { AuthService } from './auth/auth.service';
import { AuthModel } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost/${dataBaseName}`),
    UserModule,
    BookModule,
    AuthModel
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    throw new Error('Method not implemented.');
  }
 
  configure(consumer: MiddlewareConsumer ): void{
    consumer
      .apply(GetUserMiddleware)
      .forRoutes(
        BookController
      );
  }
}
