"use strict";
/* сделать класс генератора запросов, который будет использовать паттерн билдера
с фунциями добавления:
- тип запроса - GET, POST...
- Body
- Заголовки
- Url
и финальный метод exec, который делает fetch запрос
*/
var QType;
(function (QType) {
    QType["Get"] = "GET";
    QType["Post"] = "POST";
    QType["Put"] = "PUT";
    QType["Delete"] = "DELETE";
})(QType || (QType = {}));
class QueryBuilder {
    constructor() {
        this.queryType = [];
    }
    addType(type) {
        this.queryType.push(type);
        return this;
    }
    addBody(content) {
        this.queryBody = content;
        return this;
    }
    addHeader(content) {
        this.queryHeader = content;
        return this;
    }
    addUrl(content) {
        this.queryUrl = content;
        return this;
    }
    exec() {
        const res = [];
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
    .exec());
