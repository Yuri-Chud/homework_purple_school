"use strict";
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var EyeColor;
(function (EyeColor) {
    EyeColor["green"] = "green";
    EyeColor["blue"] = "blue";
    EyeColor["brown"] = "brown";
})(EyeColor || (EyeColor = {}));
let data;
fetch('https://dummyjson.com/users/?limit=2')
    .then(function (response) {
    return response.json();
})
    .then(function (myJson) {
    if (myJson.hasOwnProperty("users")) {
        data = myJson;
        console.log(data);
    }
    else {
        throw new Error("JSON not valid by: users does't exists property");
    }
});
