enum Gender {
	male = 'male',
	female = 'female'
}
enum EyeColor {
    green = 'green',
    blue = 'blue',
    brown = 'brown'
}

interface DatatypeJSON {
    users: [
        id: number,
        firstName: string,
        lastName: string,
        maidenName: string,
        age: number,
        gender: Gender.male | Gender.female,
        email: string,
        phone: string,
        username: string,
        password: string,
        birthDate: string,
        image: string,
        bloodGroup: string,
        height: number,
        weight: number,
        eyeColor: EyeColor.green | EyeColor.blue | EyeColor.brown,
        hair: [Object],
        domain: string,
        ip: string,
        address: [Object],
        macAddress: string,
        university: string,
        bank: [Object],
        company: [Object],
        userAgent: string
    ]
}


let data : DatatypeJSON;

fetch('https://dummyjson.com/users/?limit=2')
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
    if (myJson.hasOwnProperty("users")){
        data=myJson;
        console.log(data);
    }
    else {
        throw new Error("JSON not valid by: users does't exists property");
    }
 });