const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const { uuid } = require('uuidv4');
const express = require('express');
const additionalprofilesup = require("./stringifiedadditionalprofiles.json");
/*const additionalprofiles = JSON.parse(additionalprofilesup);*/
const app = express();
const port = 8000;

const currentProfiles = [
    {
      id: "ca92cd0b-2560-4f22-bc79-4cd955079672",
      videos: {
        items: [
          {
            displayIndex: 2
          }
        ]
      }
    },
    {
      id: "357a7247-0083-45f6-aedd-bcf3dacf3807",
      videos: {
        items: [
          {
            displayIndex: 3
          }
        ]
      }
    },
    {
      id: "0dce75b1-2923-4da6-a96f-8f33446ab7fd",
      videos: {
        items: [
          {
            displayIndex: 11
          }
        ]
      }
    },
    {
      id: "80bee983-360c-4b79-9ec9-802a23d3eb63",
      videos: {
        items: [
          {
            displayIndex: 2
          }
        ]
      }
    },
    {
      id: "10429d44-e981-40ae-80f3-6c681e10bbc8",
      videos: {
        items: []
      }
    },
    {
      id: "f2c3d995-114b-4b4d-91f1-5f840173a947",
      videos: {
        items: []
      }
    },
    {
      id: "477ae36a-b1d5-4310-9f31-9ac4d4a3c0a9",
      videos: {
        items: []
      }
    },
    {
      id: "10a7a267-4c5e-4525-9838-ad217b37beb8",
      videos: {
        items: [
          {
            displayIndex: 2
          }
        ]
      }
    },
    {
      id: "f5b8ec37-4572-4a85-9bec-b998fd572292",
      videos: {
        items: []
      }
    },
    {
      id: "b38261f1-c72f-43c7-a4be-f60c21ee971b",
      videos: {
        items: []
      }
    },
    {
      id: "c3c5a91b-a805-4e49-9ce7-9228e83b6426",
      videos: {
        items: []
      }
    },
    {
      id: "66ba6865-a312-48e3-914e-35392c979e8e",
      videos: {
        items: []
      }
    },
    {
      id: "578d3119-235d-4915-a9f9-d1f0da15cb7a",
      videos: {
        items: []
      }
    },
    {
      id: "93bfed6b-f96d-489a-b95d-ca11d06c3098",
      videos: {
        items: []
      }
    },
    {
      id: "9556baa9-2e0c-442e-b1b7-22a5af60bc4b",
      videos: {
        items: []
      }
    },
    {
      id: "b87a38ee-793c-47a1-ae54-3d1ca30d3011",
      videos: {
        items: []
      }
    },
    {
      id: "a569d949-b248-4770-82e1-be4acb85859f",
      videos: {
        items: []
      }
    },
    {
      id: "c65bfacd-ef0e-4fdf-bdfd-011ffed28cec",
      videos: {
        items: [
          {
            displayIndex: 2
          }
        ]
      }
    },
    {
      id: "7d9039fd-f092-4373-ab64-5d649887c23e",
      videos: {
        items: []
      }
    },
    {
      id: "c11bec23-f4f9-4783-a86c-385498379e1a",
      videos: {
        items: []
      }
    },
    {
      id: "419a6ed0-f859-4da1-9f77-f85c507a6529",
      videos: {
        items: []
      }
    },
    {
      id: "5246332a-2ceb-41fb-99c3-8f4c72951c49",
      videos: {
        items: []
      }
    },
    {
      id: "c38361a0-d80e-442e-8cbe-b68b1cb5eb57",
      videos: {
        items: []
      }
    },
    {
      id: "b502d6f3-80ab-44e7-a785-bc8589fadbd2",
      videos: {
        items: []
      }
    },
    {
      id: "a5b6bf5a-5509-4fb9-ace9-9fb7146577e6",
      videos: {
        items: []
      }
    },
    {
      id: "264f0867-09b0-47ee-b19f-42ffa9559713",
      videos: {
        items: []
      }
    },
    {
      id: "067caaa2-219f-441d-9b28-0759eef883d3",
      videos: {
        items: []
      }
    },
    {
      id: "518bf476-59aa-4c45-a958-fb2aad70b950",
      videos: {
        items: []
      }
    },
    {
      id: "4c667ee2-bb92-43c3-961f-33abb565929c",
      videos: {
        items: []
      }
    },
    {
      id: "f8ebe605-299d-42a7-b66e-1beed896c979",
      videos: {
        items: []
      }
    },
    {
      id: "e9bbe4b6-a610-469e-9f3b-2ef84d2ff680",
      videos: {
        items: []
      }
    },
    {
      id: "40a613fb-4b51-44ae-ad05-9bc97f544e15",
      videos: {
        items: []
      }
    },
    {
      id: "c2c64129-04f4-4e1d-8322-42207461878a",
      videos: {
        items: []
      }
    },
    {
      id: "dfa34051-f7a3-41be-b4b1-626be1242d14",
      videos: {
        items: []
      }
    },
    {
      id: "571edd63-095d-4017-8ddd-7e3603983420",
      videos: {
        items: [
          {
            displayIndex: 3
          }
        ]
      }
    },
    {
      id: "944cd142-0e1c-4f04-86e4-e493ea77c35c",
      videos: {
        items: [
          {
            displayIndex: 3
          }
        ]
      }
    },
    {
      id: "f91803a8-04ed-4379-9fbc-9349bb36467b",
      videos: {
        items: [
          {
            displayIndex: 2
          }
        ]
      }
    },
    {
      id: "d8fc7f35-eb47-435a-9965-43d75ef60c7f",
      videos: {
        items: []
      }
    },
    {
      id: "6ea76050-b890-45b7-8d93-8a61f596b231",
      videos: {
        items: []
      }
    },
    {
      id: "78934132-569b-4290-a6f7-fdd50faafa25",
      videos: {
        items: []
      }
    },
    {
      id: "89d739d3-e16f-4f4c-8d4d-c91ab0690d71",
      videos: {
        items: []
      }
    },
    {
      id: "f41793a2-4cb3-49c0-8574-05530189d6f5",
      videos: {
        items: []
      }
    },
    {
      id: "d632a33c-1f4a-4815-af9b-9fe93d3a8616",
      videos: {
        items: []
      }
    },
    {
      id: "1ac56bd2-cedb-4021-9bca-3556d926f912",
      videos: {
        items: []
      }
    },
    {
      id: "f0ada784-41ec-48c2-b2ce-abec3a76f394",
      videos: {
        items: []
      }
    },
    {
      id: "74b89cf1-4a29-4dee-ab0e-b97655d0eef3",
      videos: {
        items: []
      }
    },
    {
      id: "37627513-e047-4ff1-a631-0aa723fc5431",
      videos: {
        items: []
      }
    },
    {
      id: "8ca179bf-3597-499b-ae79-9a8fe5af7ac7",
      videos: {
        items: []
      }
    },
    {
      id: "36842075-1b56-4efa-ab4f-0de570cc3f8a",
      videos: {
        items: []
      },
    }
  ]

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 2
  },
  wordsPerSentence: {
    max: 10,
    min: 4
  }
});
const baseJson = [
    {
        id:"743289472890",
        displayIndex: 3
    },
    {
        id:"743289472890"
    },
]


const newVideos = (additionalprofiles) => {
    return additionalprofiles.map((item, index) =>{
        /*const videos = item.videos.items[0];
        if (videos == undefined){
            item.displayIndex = 1;
        }else{
            item.displayIndex = videos.displayIndex + 1;
        }*/
        return{
            id: item.id,
            __typename: "Video",
            displayIndex: 1,
            isdeleted: false,
            file: "698ecd11-4941-458f-a553-25b631784473.mp4",
            createdAt: "2021-08-21T17:55:08.555Z",
            profileVideosId: item.id,
            _version: 2,
            caption: lorem.generateSentences(),
            owner: item.id,
            thumbnail: "698ecd11-4941-458f-a553-25b631784473.jpg"
        }
    })

}
app.get('/', (req, res) => {
  res.json(newVideos(additionalprofilesup))
});

app.listen(port, () => {
  console.log(newVideos(additionalprofilesup))
});