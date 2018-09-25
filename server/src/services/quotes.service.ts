import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesService {

    constructor(private http: HttpService){

    }

    getQuotes(){
        return this.http.get('http://quotesondesign.com/wp-json/posts')
            .pipe(
                map(response => response.data)
            );        
    }

    getQuote(id){
        return this.http.get('http://quotesondesign.com/wp-json/posts/' + id)
            .pipe(
                map(response => response.data)
            ); 
    }

    getRandomQuote(){
        return this.http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
            .pipe(
                map(response => response.data)
            );
    }

}
