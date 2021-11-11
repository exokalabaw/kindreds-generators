const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const express = require('express')
const app = express();
const port = 8000;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});
const instruments = ["guitar", "bass", "drums", "keys", "vocals", "saxophone"]
const styles = ["rock", "funk", "fusion", "hip-hop", "jazz", "country", "experimental", "grunge", "opm", "world","afro-cuban","mariachi"]
const images = ["58a88f6f-befb-4e3d-ae65-1e28aea82ae3.jpg", "400b8148-1792-483c-bd52-76429fd65ccf.jpg", "92549861-d706-49f1-8629-51c05d98b72f.jpg", "5c6e5fc0-8b11-4a3a-ac73-1b1ae30a0f23.jpg"]
const boo = [true, false]
const emptyprofiles = [
    {owner: 'testuser1',id:'f5b8ec37-4572-4a85-9bec-b998fd572292'},
   /* {owner: 'testuser2',id:'ca92cd0b-2560-4f22-bc79-4cd955079672'},
    {owner: 'testuser7',id:'1ac56bd2-cedb-4021-9bca-3556d926f912'},
    {owner: 'testuser8',id:'5246332a-2ceb-41fb-99c3-8f4c72951c49'},
    {owner: 'testuser9',id:'518bf476-59aa-4c45-a958-fb2aad70b950'},
    {owner: 'testuser10',id:'7d9039fd-f092-4373-ab64-5d649887c23e'},
    {owner: 'testuser11',id:'944cd142-0e1c-4f04-86e4-e493ea77c35c'},
    {owner: 'testuser12',id:'a569d949-b248-4770-82e1-be4acb85859f'},
    {owner: 'testuser13',id:'f41793a2-4cb3-49c0-8574-05530189d6f5'},
    {owner: 'testuser14',id:'a5b6bf5a-5509-4fb9-ace9-9fb7146577e6'},
    {owner: 'testuser15',id:'36842075-1b56-4efa-ab4f-0de570cc3f8a'},
    {owner: 'testuser16',id:'d632a33c-1f4a-4815-af9b-9fe93d3a8616'},
    {owner: 'testuser17',id:'c3c5a91b-a805-4e49-9ce7-9228e83b6426'},
    {owner: 'testuser18',id:'b502d6f3-80ab-44e7-a785-bc8589fadbd2'},
    {owner: 'testuser21',id:'66ba6865-a312-48e3-914e-35392c979e8e'},
    {owner: 'testuser22',id:'e9bbe4b6-a610-469e-9f3b-2ef84d2ff680'},
    {owner: 'testuser23',id:'419a6ed0-f859-4da1-9f77-f85c507a6529'},
    {owner: 'testuser24',id:'10429d44-e981-40ae-80f3-6c681e10bbc8'},
    {owner: 'testuser25',id:'9556baa9-2e0c-442e-b1b7-22a5af60bc4b'},
    {owner: 'testuser26',id:'f0ada784-41ec-48c2-b2ce-abec3a76f394'},
    {owner: 'testuser27',id:'477ae36a-b1d5-4310-9f31-9ac4d4a3c0a9'},
    {owner: 'testuser28',id:'c11bec23-f4f9-4783-a86c-385498379e1a'},
    {owner: 'testuser31',id:'d8fc7f35-eb47-435a-9965-43d75ef60c7f'},
    {owner: 'testuser32',id:'f8ebe605-299d-42a7-b66e-1beed896c979'},
    {owner: 'testuser33',id:'8ca179bf-3597-499b-ae79-9a8fe5af7ac7'},
    {owner: 'testuser34',id:'6ea76050-b890-45b7-8d93-8a61f596b231'},
    {owner: 'testuser35',id:'f2c3d995-114b-4b4d-91f1-5f840173a947'},
    {owner: 'testuser36',id:'578d3119-235d-4915-a9f9-d1f0da15cb7a'},
    {owner: 'testuser37',id:'dfa34051-f7a3-41be-b4b1-626be1242d14'},
    {owner: 'testuser38',id:'4c667ee2-bb92-43c3-961f-33abb565929c'},
    {owner: 'testuser39',id:'40a613fb-4b51-44ae-ad05-9bc97f544e15'},
    {owner: 'testuser40',id:'067caaa2-219f-441d-9b28-0759eef883d3'},
    {owner: 'testuser41',id:'c38361a0-d80e-442e-8cbe-b68b1cb5eb57'},
    {owner: 'testuser42',id:'74b89cf1-4a29-4dee-ab0e-b97655d0eef3'},
    {owner: 'testuser43',id:'78934132-569b-4290-a6f7-fdd50faafa25'},
    {owner: 'testuser44',id:'b38261f1-c72f-43c7-a4be-f60c21ee971b'},
    {owner: 'testuser45',id:'37627513-e047-4ff1-a631-0aa723fc5431'},
    {owner: 'testuser46',id:'89d739d3-e16f-4f4c-8d4d-c91ab0690d71'},
    {owner: 'testuser47',id:'264f0867-09b0-47ee-b19f-42ffa9559713'},
    {owner: 'testuser48',id:'93bfed6b-f96d-489a-b95d-ca11d06c3098'},
    {owner: 'testuser49',id:'b87a38ee-793c-47a1-ae54-3d1ca30d3011'},*/
]

const centerloc = {'lat': 37.97, 'lng': -122}
function generateRandomPoint(center, radius) {
  var x0 = center.lng;
  var y0 = center.lat;
  // Convert Radius from meters to degrees.
  var rd = radius/111300;

  var u = Math.random();
  var v = Math.random();

  var w = rd * Math.sqrt(u);
  var t = 2 * Math.PI * v;
  var x = w * Math.cos(t);
  var y = w * Math.sin(t);

  var xp = x/Math.cos(y0);

  // Resulting point.
  return {'lat': y+y0, 'lon': xp+x0};
}
function pickItemsFromArray(source,max){
  const newArray= []
  let lastNum = 0;
  let maxran = Math.floor(Math.random()*max) + 1;
  if (max === 1){
    let newNum = Math.floor(Math.random()*source.length);
    return source[newNum];
  }else{
    while (newArray.length < maxran){
      
      let newNum = Math.floor(Math.random()*source.length);
      if (lastNum !== newNum){
        newArray.push(source[newNum]);
        
        lastNum = newNum
      }
    }
    console.log(newArray);
    return newArray
  }
}

const editedProfiles = (emptyprofiles) => {
    return emptyprofiles.map((item, index) =>{
        let randomName = Math.floor(Math.random()*2) + 1;
        return {
            owner:item.owner+"@gmail.com",
            id:item.id,
            displayName: lorem.generateWords(randomName),
            description: lorem.generateSentences(),
            instrument: pickItemsFromArray(instruments, 2),
            styles: pickItemsFromArray(styles, 3),
            lastLocation: generateRandomPoint(centerloc, 150000),
            profileImage: pickItemsFromArray(images, 1),
            _version: 1,
            linkTree:{
              link: 'http://link.net',
              title:'link title'
            }, 
            getFeedBack: pickItemsFromArray(boo, 1),
            showSocial: pickItemsFromArray(boo, 1),
            priorityInstruments: pickItemsFromArray(instruments, 4),
            priorityStyles: pickItemsFromArray(styles, 2),
            __typename: 'Profile',
            createdAt: '2021-10-14T10:08:50.710Z',
            updatedAt: '2021-10-14T11:08:50.710Z',
        }
    })
}
app.get('/', (req, res) => {
  res.json(editedProfiles(emptyprofiles))
});

app.listen(port, () => {
  console.log(editedProfiles)
});