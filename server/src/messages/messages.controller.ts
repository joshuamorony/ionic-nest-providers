import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from '../services/quotes.service';

@Controller('messages')
export class MessagesController {

    constructor(private quotesService: QuotesService){

    }

    @Get()
    getMessages(){
        return this.quotesService.getQuotes();
    }

    @Get(':id')
    getMessage(@Param('id') id){
        return this.quotesService.getQuote(id);
    }

}
