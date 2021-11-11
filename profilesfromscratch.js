const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const { uuid } = require('uuidv4');
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
const newSet = []

const sanfrancenterloc = {'lat': 37.74684976071512, 'lng': -122.44799131933581}
const nycenterloc = {'lat': 40.79861290390266, 'lng': -73.26637391766418}
const ottawacenterloc = {'lat':45.41633511914868, 'lng': -75.69910729091134}
const quebeccenterloc = {'lat': 46.78012113076002, 'lng':-71.20838367704486}
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
    return newArray
  }
}

const newProfiles = (n) => {
    

    for (let i = 1; i <= n; i++){
        const newObject = {
            id: uuid(),
            owner : 'generateduser' + i + '@generatedusers.com',
            description: lorem.generateSentences(),
            instrument: pickItemsFromArray(instruments, 2),
            styles: pickItemsFromArray(styles, 3),
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
            locationStrings: {
                city : '',
                region : '',
                isoCountryCode : 'US',
            }
        };
        if(i <= 20){
            newObject.locationStrings.city = 'San Francisco';
            newObject.locationStrings.region = 'California';
            newObject.lastLocation = generateRandomPoint(sanfrancenterloc, 100000);
        }else if (i > 20 && i <=40){
            newObject.locationStrings.city = 'Plainview';
            newObject.locationStrings.region = 'New York';
            newObject.lastLocation = generateRandomPoint(nycenterloc, 100000);
        }else if (i > 40 && i <=60){
            newObject.locationStrings.city = 'Quebec';
            newObject.locationStrings.region = 'Quebec';
            newObject.locationStrings.isoCountryCode = 'CA';
            newObject.lastLocation = generateRandomPoint(quebeccenterloc, 100000);
        }else if (i > 60 && i <=80){
            newObject.locationStrings.city = 'Ottawa';
            newObject.locationStrings.region = 'Ontario';
            newObject.locationStrings.isoCountryCode = 'CA';
            newObject.lastLocation = generateRandomPoint(ottawacenterloc, 100000);
        }
        
        newObject.displayName = newObject.locationStrings.city + " " + i;
        newSet.push(newObject);

        
   }
   return newSet;
   

}
app.get('/', (req, res) => {
  res.json(newProfiles(10))
});

app.listen(port, () => {
});
