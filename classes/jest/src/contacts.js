// import contacts from "./data/contacts.json" assert { type: "json" }
const contacts = [{
    "gender": "male",
    "name": { "title": "Mr", "first": "Karl", "last": "Johnson" },
    "location": {
        "street": { "number": 6057, "name": "Avondale Ave" },
        "city": "New York",
        "state": "New York",
        "country": "United States",
        "postcode": 12564,
        "coordinates": {
            "latitude": "88.9222",
            "longitude": "-82.9558"
        },
        "timezone": {
            "offset": "+3:00",
            "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
    },
    "email": "karl.johnson@example.com",
    "login": {
        "uuid": "97890990-7bf2-469d-981c-16a10ae5307f",
        "username": "bigpeacock170",
        "password": "luan",
        "salt": "DS9jzK3v",
        "md5": "3fbb44cc3ed84f11b0b17d294e648b88",
        "sha1": "bc13b6a687d056cddb6bff9a546d7fcfd03cad45",
        "sha256": "d3dea6c58256857f30dd60ef4db2708b62d5cc37eda19479ed4b72321d543f41"
    },
    "dob": { "date": "1966-12-17T05:32:24.120Z", "age": 57 },
    "registered": { "date": "2014-12-02T18:39:42.988Z", "age": 9 },
    "phone": "(268) 420-4900",
    "cell": "(576) 843-3163",
    "id": { "name": "SSN", "value": "557-48-8854" },
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
    },
    "nat": "US"
},]

console.log(contacts[0])

export default function getName() {
    return contacts[0].name.first
}

export function getName2() {
    return contacts[0].name.first
}