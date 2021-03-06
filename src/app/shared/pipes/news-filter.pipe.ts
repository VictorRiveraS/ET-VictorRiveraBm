import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === "") return value;
    const resultArticle = [];
    for (const article of value) {
      if (article.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultArticle.push(article);
      }; 
    }
    return resultArticle;
  }

}
