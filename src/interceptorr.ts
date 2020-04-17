import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class interceptorr implements HttpInterceptor {
    intercept(req, next){
         console.log('myurl',req.url)
         if (!req.url.includes('/1')) {
         const modified = req.clone({
            setHeaders: {
            'Content-Type': 'application/json',
            'Autharization': 'value dfdfhdsfdhfhhsdjkfhjkdshfhdsfhkjdshfkjsdhfjhbkd'
            }
            });
            return next.handle(modified);
        }
    else{
        const modified = req.clone({
            setHeaders: {
            'Content-Type': 'application/json',
            'Autharization': 'value dfdfhdsfdhfhhsdjkfhjkdshfhdsfhkjdshfkjsdhfjhbkd'
            }
            });
            return next.handle(modified);
    }
    
}
}
