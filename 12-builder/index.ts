/* сделать класс генератора запросов, который будет использовать паттерн билдера
с фунциями добавления:
- тип запроса - GET, POST...
- Body
- Заголовки
- Url
и финальный метод exec, который делает fetch запрос
*/

enum QType {
	Get = 'GET',
	Post = 'POST',
	Put = 'PUT',
	Delete = 'DELETE',
}

interface IQuery {
	type: QType;
	body: string;
	header: string;
	url: string;
}

class QueryBuilder {
    private queryType: QType[] = [];
    private queryBody: string;
    private queryHeader: string; 
    private queryUrl: string; 

    addType(type: QType) {
      this.queryType.push(type);
      return this;
    }

    addBody(content: string) {
      this.queryBody = content;
      return this;
    }

    addHeader(content: string) {
      this.queryHeader = content;
      return this;
    }

    addUrl(content: string) {
      this.queryUrl = content;
      return this;
    }

    exec(): IQuery[] {
      const res: IQuery[] = [];
      for (const t of this.queryType) {
        res.push({
          type: t,
          body: this.queryBody,
          header: this.queryHeader,
          url: this.queryUrl,
        });
      }
      return res;
    }
}

console.log(new QueryBuilder()
	.addType(QType.Get)
	.addType(QType.Post)
	.addBody('someBody')
	.addHeader('someHeader')
	.addUrl('someUrl')
	.exec()
);