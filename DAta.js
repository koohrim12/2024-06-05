const a = `
https://apis.data.go.kr/6300000/eventDataService/
eventDataListJson
?

serviceKey=7B0UdKJ9T4IeLL7vj40OSMderbRN3mFXhyra69Q2rlGmiPq9J1xEQcKxka6i2x8ywX9eDEW8qor5Keh8a0trgA%3D%3D&`;

const b = "endpoint 주소 " + "주소값";
const endpoint = "	http://apis.data.go.kr/6300000/eventDataService";

const KeyName = `7B0UdKJ9T4IeLL7vj40OSMderbRN3mFXhyra69Q2rlGmiPq9J1xEQcKxka6i2x8ywX9eDEW8qor5Keh8a0trgA%3D%3D`;

const exaple = `
http://apis.data.go.kr/6300000/eventDataService/
eventDataItemJson
?
serviceKey= ${KeyName}
&
eventSeq=10423
`;
console.log(exaple);
