const superheroes = [
  {
    alias: "Moodswings",
    birthname: "Jane Smith",
    dob: "1995-07-05",
    cape: false,
    powers: ["controlling other people's thoughts", "JS"],
    img: "https://www.pinterest.es/pin/572660908869939668/",
    gender: "female",
    species: "mutant",
  },
  {
    alias: "Crazy Plant Lady",
    birthname: "Jane Doe",
    dob: "1997-07-01",
    cape: true,
    powers: ["unlimited source of water", "shining like a sun"],
    img: "https://image.shutterstock.com/image-vector/superhero-cartoon-aloe-vera-plant-260nw-1418544731.jpg",
    gender: "female",
    species: "plant",
  },
  {
    alias: "agginator",
    birthname: "agv",
    dob: "1900-01-01",
    cape: false,
    powers: ["bingewatching", "timetravel", "teleportation"],
    img: "https://images.interactives.dk/belis-woman-dk-pMeoAU9Z3hkDgvjaXLYrIw.png?auto=compress&ch=Width%2CDPR&dpr=2.63&h=440&ixjsv=2.2.4&q=38",
    gender: "female",
    species: "legend",
  },
  {
    alias: "Aurora",
    birthname: "Aurora",
    dob: "1990-01-25",
    cape: false,
    powers: ["control weather", "fly", "strenght"],
    img: "https://photostockeditor.com/clip-art-vector/download/908920714",
    gender: "woman",
    species: "goddess",
  },
  {
    alias: "Capeman",
    birthname: "This is my name",
    dob: "1880-08-18",
    cape: true,
    powers: ["running", "never ageing", "saving people in danger"],
    img: "https://www.123rf.com/photo_50010812_superhero-with-cape-character-figure-vector-illustration.html",
    gender: "man",
    species: "runner",
  },
  {
    alias: "Sleepy-girl",
    birthname: "Not My Real Name",
    dob: "1926-11-26",
    cape: true,
    powers: ["sleeping", "notaging"],
    img: "https://www.character-online.com/content/images/thumbs/0013129_heroes-of-goo-jit-zu-dc-superhero-superman.jpeg",
    gender: "female",
    species: "nothuman",
  },
  {
    alias: "Bloody Mary",
    birthname: "Maria van der Blood",
    dob: "1800-09-15",
    gender: "female",
    cape: true,
    powers: ["Know person's desire", "Not getting drunk"],
    species: "Evil",
    img: "https://static.wikia.nocookie.net/marvel_dc/images/8/82/Bloody_Mary_01.jpg/revision/latest/top-crop/width/360/height/450?cb=20130227162303",
  },
  {
    alias: "Mr. White Screen",
    birthname: "Classsified",
    dob: "2021-08-27",
    cape: false,
    powers: ["whiping all data of all divices in "],
    img: "https://i.ebayimg.com/images/g/rQIAAOSw9hdaCrhM/s-l640.jpg",
    gender: "man",
    species: "half man half cocker spaniel",
  },
  {
    alias: "Junior Ranger",
    birthname: "I guess you'll never know",
    dob: "1860-01-01",
    cape: false,
    powers: ["Incredible strength"],
    img: "https://www.pinterest.dk/pin/480055641502427198/",
    gender: "female",
    species: "human",
  },
  {
    alias: "Silky Johnson",
    birthname: "Bent Dover",
    dob: "1996-04-06",
    gender: "male",
    cape: false,
    powers: ["Super sonic pimp slap"],
    img: "https://pbs.twimg.com/profile_images/1058168650811822080/kTX7Mw-e_400x400.jpg",
    species: "Half Man Half Jellyfish",
  },
  {
    alias: "SuperBun",
    birthname: "Deni Designs",
    dob: "1894-01-01",
    cape: "false",
    powers: ["ConsumingPasta", "Influencing"],
    img: "https://www.meme-arsenal.com/memes/79a90b65fc9478bf59c82ddc49575240.jpg",
    gender: "woman",
    species: "rabbit",
  },
  {
    alias: "Dominidex",
    birthname: "Los Domenicos",
    dob: "2199-07-04",
    cape: false,
    powers: ["Flying", "Flawless nunchaku"],
    img: "",
    gender: "male",
    species: "humane",
  },
  {
    alias: "Slavaman",
    birthname: "Vladyimir Klyuschevich",
    dob: "2000-01-09",
    cape: false,
    powers: ["opening beer with teeth, talking czech, sitting on flat feet"],
    img: "https://en.wikipedia.org/wiki/Gopnik#/media/File:%D0%93%D0%BE%D0%BF%D0%BD%D0%B8%D0%BA.jpg",
    gender: "woman",
    species: "Rus",
  },
  {
    alias: "Extraordinary Evil Ellen ",
    birthname: "Not My Real Name",
    dob: "2000-12-18",
    gender: "woman",
    cape: true,
    powers: ["Spending too much money on a night out, shopping addicton"],
    img: "https://cdn.cliqueinc.com/posts/230950/gossip-girl-stores-230950-1501243904834-main.500x0c.jpg?interlace=true&quality=70",
    species: "legend",
  },
  {
    alias: "Captain Cat",
    birthname: "Not Real",
    dob: "2000-08-01",
    cape: false,
    powers: ["Teleporting", "JS"],
    img: "https://hu.depositphotos.com/227244340/stock-photo-super-hero-cat-blue-cloak.html",
    gender: "man",
    species: "Yoda",
  },
  {
    alias: "Json Derulo",
    birthname: "Not My Real Name",
    dob: "1990-10-10",
    cape: false,
    powers: ["Moonwalk", "Absolute pitch", "Master in JSON"],
    img: "https://the-hollywood-gossip-res.cloudinary.com/iu/s--OIWPQRO0--/c_fill,cs_srgb,f_auto,fl_strip_profile.lossy,g_auto,h_258,q_auto:420,w_424/v1364526818/jason-derulo-twitpic",
    gender: "man",
    species: "Pop star",
  },
  {
    alias: "Hiking Cat",
    birthname: "Samantha Mantha",
    dob: "1999-10-01",
    cape: true,
    powers: ["Hiking", "Purring", "Night Vision"],
    img: "https://images.unsplash.com/photo-1616249136282-b8675d07a780?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdCUyMGNvc3R1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    gender: "Female",
    species: "Human Feline",
  },
  {
    alias: "Captain Mind",
    birthname: "Jhon Smith",
    dob: "1500-12-12",
    cape: false,
    powers: [
      "Immortality",
      "Mind Reading",
      "Super Genius",
      "Teleportation",
      "Invisibility",
    ],
    img: "https://external-preview.redd.it/S6jwrQHdXEfu7PKQML_TGz-jRqyuyXQrYKpa60RgwCM.jpg?auto=webp&s=a1de8fc195fa8d7a57cc115a227f77dec90c5fd7",
    gender: "male",
    species: "Mutant",
  },
  {
    alias: "Phoenix",
    birthname: "Jean Grey",
    dob: "1967-07-05",
    cape: false,
    powers: ["telekinesis", "Telepathy"],
    img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/06/Jean-Grey-Phoenix-Force.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
    gender: "female",
    species: "human",
  },
  {
    alias: "Catwoman",
    birthname: "Selina Kyle",
    dob: "1982-02-18",
    cape: false,
    powers: ["is a cat", "professional thief", "acrobatic"],
    img: "https://cdn.vox-cdn.com/thumbor/r4E7UX5QsHAE1ePRqk3QFXaZo8A=/0x21:800x554/1400x1400/filters:focal(0x21:800x554):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45787520/Catwoman_0018.0.0.jpg",
    gender: "female",
    species: "human",
  },
  {
    alias: "The Witchy Moon Reader",
    birthname: "Lady Moon",
    dob: "2015-11-01",
    cape: true,
    powers: ["Spells", "Flying"],
    img: "file:///Users/isabella/Downloads/girl-504636_1920.jpg",
    gender: "woman",
    species: "Witch",
  },
  {
    alias: "Marsuperior",
    birthname: "Charlie Fields",
    dob: "1990-12-31",
    cape: "false",
    powers: ["Metal Guitar", "Poverty", "Chugging", "Melting Glass"],
    img: "https://dlisted.com/wp-content/uploads/2018/12/riprogerthebuffkangaroo2018.jpg",
    gender: "male",
    species: "Marsupial",
  },
  {
    alias: "señor-average",
    birthname: "confidential",
    dob: "1963-04-22",
    cape: "false",
    powers: ["manual labor", "waking up early", "running speed of 10 km/h"],
    img: "https://pbs.twimg.com/profile_images/940702256839647232/AhWWchmi.jpg",
    gender: "man",
    species: "jyde",
  },
  {
    alias: "Arnold von Sugar",
    birthname: "Natcho Bizness",
    dob: "1975-07-15",
    cape: true,
    powers: ["Inflatable muscles", "Razer sharp killer haircut"],
    img: "https://static.wikia.nocookie.net/punchtimeexplosion/images/c/cd/Johnny_%281%29.png/revision/latest/scale-to-width-down/500?cb=20200525141809",
    gender: "man",
    species: "Tough guy",
  },
  {
    alias: "XtremeSus",
    birthname: "Jessica Rabbit",
    dob: "1997-09-09",
    cape: false,
    powers: ["WearingRedDress"],
    img: "https://hips.hearstapps.com/ell.h-cdn.co/assets/15/44/1446408231-spl1166295-003.jpg",
    gender: "woman",
    species: "WomanWhoWeaesRedDress",
  },
  {
    alias: "the dragon man",
    birthname: "Jason",
    gender: "Male",
    dob: "unknown",
    species: "dragon hybrid",
    cape: true,
    powers: ["healing", "spitting fire", "a shield"],
    img: null,
  },
  {
    alias: "Chesterfield",
    birthname: "Chesterfield VanScoder",
    dob: "2019-06-25",
    cape: false,
    powers: ["Barking"],
    gender: "male",
    img: "https://www.k9rl.com/wp-content/uploads/2015/12/Blue-Merle-and-white-collie.jpg",
    species: "dog",
  },
  {
    alias: "Queen of Bean",
    birthname: "Marie Gberg",
    dob: "1997-01-27",
    cape: false,
    powers: ["BreakfastCooking", "MindReading"],
    img: "https://randommization.com/wp-content/uploads/2013/04/fully-clothed-female-superheroes_4.jpg",
    gender: "woman",
    species: "Legend",
  },
  {
    alias: "Black panther",
    birthname: "No name",
    dob: "2000-09-16",
    cape: "true",
    powers: ["speak russian"],
    img: "https://img.wondercostumes.com/products/20-3/black-panther-women-costume.jpg",
    gender: "woman",
    species: "cats",
  },
  {
    alias: "Villanelle",
    birthname: "Oksana",
    dob: "2004-10-04",
    cape: false,
    powers: ["fearless", "strong"],
    img: "https://www.google.com/search?q=villanelle+killing+eve&client=firefox-b-d&sxsrf=AOaemvKIgmpkIAp8THu_8hqRt-LO30Jr5g:1630049941834&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjsxf6d2dDyAhUHQvEDHWWqBdAQ_AUoAXoECAIQAw&biw=1440&bih=762#imgrc=TcTTJz9_5aZFOM",
    gender: "woman",
    species: "human",
  },
  {
    alias: "Mr Superspreader",
    birthname: "Unknown",
    dob: "2019-11-10",
    cape: false,
    powers: ["pandemic starter"],
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F82%2FSARS-CoV-2_without_background.png%2F250px-SARS-CoV-2_without_background.png&imgrefurl=https%3A%2F%2Fda.wikipedia.org%2Fwiki%2FVirus&tbnid=wzhqUoUxq1iGAM&vet=12ahUKEwjb--iI2dDyAhVMwaQKHYYLAhcQMygAegQIARB7..i&docid=5mu2fPpV2FpzGM&w=250&h=251&q=virus&client=safari&ved=2ahUKEwjb--iI2dDyAhVMwaQKHYYLAhcQMygAegQIARB7",
    gender: "Unknown",
    species: "Virus",
  },
  {
    alias: "Blackbird",
    birthname: "Secret",
    dob: "1980-03-04",
    cape: "false",
    powers: ["Flying", "Fast"],
    species: "Bird",
    gender: "Woman",
    img: "https://images.unsplash.com/photo-1592863742638-27972ef5c3f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2tiaXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  },
  {
    alias: "Candy Crusher",
    birthname: "None of your business 2",
    dob: "1998-04-12",
    cape: false,
    powers: ["speedReading", "sweetEater"],
    img: "https://www.google.com/search?q=super+hero+candy&rlz=1C5CHFA_enDK963DK965&sxsrf=AOaemvLROoSXOIUlB8XMRc4nq0iO1DJdMw:1630049690065&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiD8fel2NDyAhUqKVkFHZ1WB-cQ_AUoAXoECAEQAw&biw=1440&bih=738#imgrc=PVc9AQF0ME0wbM",
    gender: "female",
    species: "cool human",
  },
  {
    alias: "Telepathy",
    birthname: "Sophia Jones",
    dob: "1991-05-25",
    cape: false,
    img: "https://i.pinimg.com/originals/fd/aa/12/fdaa1214b2043ac2ca547376559f2b96.png",
    powers: ["SuperStrength", "Speed", "Invisibilty", "Flying", "Psychic"],
    gender: "female",
    species: "Human",
  },
  {
    alias: "Daydreamer Sara",
    birthname: "Sara",
    dob: "1993-10-29",
    cape: true,
    powers: ["daydreaming", "hipersensitivity", "crafts"],
    img: "http://image.blingee.com/images17/content/output/000/000/000/5c1/476291346_892368.gif",
    gender: "woman",
    species: "fairy",
  },
  {
    alias: "Sharky",
    birthname: "Silky Rivers",
    dob: "2051-03-11",
    cape: false,
    powers: ["breathe underwater", "create electricity"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_gWUtUdVqZMEoIUAoLItFM-t66_UJQCm70y5tDCMg_QHKQa8tmD4jGInuJVx6loY4BQ&usqp=CAU",
    gender: "woman",
    species: "Venutian",
  },
  {
    alias: "Aqualady",
    birthname: "Something else",
    dob: "2003-09-01",
    cape: false,
    powers: ["Swimming", "Flying"],
    img: "https://s3.amazonaws.com/comicgeeks/characters/avatars/10609.jpg?t=1615481560",
    gender: "woman",
    species: "fish",
  },
  {
    alias: "Ross-Ross",
    birthname: "Diana Ross",
    dob: "2067-08-20",
    cape: true,
    powers: ["Ghosting people", "bingewatching"],
    img: "https://memeguy.com/photos/images/uber-in-australia-465348.jpg",
    gender: "female",
    species: "hybrid",
  },
  {
    alias: "Dr. Mc Perfection",
    birthname: "None of your business",
    dob: "9999-09-09",
    cape: false,
    powers: ["SmartAss", "NightVision", "RentgenVision", "WalkingLieDetector"],
    img: null,
    gender: "N/A",
    species: "Doc",
  },
  {
    alias: "Invisible Man",
    birthname: "Obvious True",
    dob: "1976-05-24",
    cape: false,
    powers: ["Invisibility", "silence"],
    img: "https://ats-heritage.co.uk/wp-content/uploads/2016/09/iStock_96204197_XLARGE.jpg",
    gender: "man",
    species: "inhuman",
  },
];

console.table(superheroes);

/* write your code here */
superheroes.forEach(showHero);

function showHero(hero) {
  console.log(hero);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".alias").textContent = hero.alias;
  clone.querySelector(".birthname").textContent = hero.birthname;
  clone.querySelector("img").src = hero.img;
  clone.querySelector("img").alt = hero.alias;
  if (hero.cape) {
    //nothing
  } else {
    clone.querySelector("p").remove();
  }
  document.querySelector("main").appendChild(clone);
}
