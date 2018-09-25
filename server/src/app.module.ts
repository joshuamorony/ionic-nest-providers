import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { QuotesService } from './services/quotes.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, MessagesController],
  providers: [AppService, QuotesService],
})
export class AppModule {}
