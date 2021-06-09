// A

function qSyntax() {
  return {
    doSomething: () => doSomething(),
    desc: "doSomething function calls a songs lyrics api\nand search for each song it's most rare word in it\nalso, it has a decode/encode algo to decode and encode string by secret value.",
  };
}

function doSomething() {
  class Song {
    constructor(artist, name) {
      this.artist = artist;
      this.name = name;
    }
  }

  const SONG_LYRICS_API = "https://mighty-hamlet-04312.herokuapp.com/lyrics/";
  const songs = [
    new Song("justin bieber", "sorry"),
    new Song("taylor swift", "style"),
    new Song("shawn mendes", "mercy"),
    new Song("adele", "hello"),
  ];

  const lyricsPromises = songs.map((song) =>
    fetch(`${SONG_LYRICS_API}${song.artist}/${song.name}`)
  );

  Promise.all(lyricsPromises)
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then(async (songsLyrics) => {
      const rareWordsPromises = songsLyrics.map((song) =>
        findMostRareWordInSong(song.lyrics)
      );
      const rareWords = await Promise.all(rareWordsPromises);
      rareWords.forEach((rare) => {
        console.log(`Most rare word is ${rare}`);
      });
    });

  const isStringAlphabetic = (str) => {
    const alphabeticRegex = /[a-zA-Z]/g;
    return alphabeticRegex.test(str);
  };

  async function findMostRareWordInSong(lyrics) {
    console.log("start finding most rare word...");
    const allSongLyrics = lyrics.join(" ");
    const wordCounts = {};
    const words = allSongLyrics.split(/\b/);

    for (word of words)
      wordCounts["_" + word.toLowerCase()] = (wordCounts["_" + word] || 0) + 1;
    let wordsCountSort = Object.keys(wordCounts).sort(function (a, b) {
      return wordCounts[a] - wordCounts[b];
    });
    wordsCountSort = wordsCountSort.filter((word) => isStringAlphabetic(word));
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return wordsCountSort[wordsCountSort.length - 1];
  }

  class DecodeRules {
    ASCII_MAX_VALUE = 127;
    #secretValue;

    constructor(secretValue) {
      this.#secretValue = secretValue;
    }

    getSecretValue() {
      return this.#secretValue;
    }
  }

  class Word {
    constructor(text, decodeRules) {
      this.text = text;
      this.decodeRules = decodeRules;
    }

    decode() {
      const secretValue = decodeRules.getSecretValue();
      let newWord = "";
      let decodeLetter;
      for (let index = 0; index < this.text.length; index++) {
        decodeLetter = this.text.charCodeAt(index);
        decodeLetter += secretValue;
        if (decodeLetter > decodeRules.ASCII_MAX_VALUE) {
          decodeLetter -= decodeRules.ASCII_MAX_VALUE;
        }
        newWord += String.fromCharCode(decodeLetter);
      }
      return newWord;
    }

    encode(encodedText) {
      const secretValue = decodeRules.getSecretValue();
      let newWord = "";
      let encodeLetter;
      for (let index = 0; index < encodedText.length; index++) {
        encodeLetter = encodedText.charCodeAt(index);
        encodeLetter -= secretValue;
        if (encodeLetter < 0) {
          encodeLetter += decodeRules.ASCII_MAX_VALUE;
        }
        newWord += String.fromCharCode(encodeLetter);
      }
      return newWord;
    }
  }

  const decodeRules = new DecodeRules(10);
  const word = new Word("liron", decodeRules);
  const decodeMessage = word.decode();
  const encodeMessage = word.encode(decodeMessage);

  console.log(`decode: ${decodeMessage}, encode: ${encodeMessage}`);
}

// B

const qObj = () => {
  return {
    createObjects: () => createObjects(),
    chain: () => getPrototypeChain(createObjects()),
    desc: "b.i.1: A function that create the same object in 6 different ways - a car model (Yarris 2018) \nb.i.2: A prototype chain of all the objects from b.i.1",
  };
};

function createObjects() {
  const yarrisCar = { model: "Yarris", year: 2018 };

  let objectsMap = new Map();
  objectsMap.set("constructor-made", getCarObjectByConstructor());
  objectsMap.set("object-literal", yarrisCar);
  objectsMap.set("class", getCarObjectByClass());
  objectsMap.set("singleton-pattern", getCarObjectBySingletonPattern());
  objectsMap.set("object-assign", Object.assign({}, yarrisCar));
  objectsMap.set("object-define", getCarObjectByObjectDefine());
  return objectsMap;
}

const getCarObjectByConstructor = () => {
  function Car(model, year) {
    this.model = model;
    this.year = year;
  }

  return new Car("Yarris", 2018);
};

const getCarObjectByObjectDefine = () => {
  const car = new Object();
  car.model = "Yarris";
  car.year = 2018;

  return car;
};

const getCarObjectByClass = () => {
  class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
  }

  return new Car("Yarris", 2018);
};

const getCarObjectBySingletonPattern = () => {
  return new (function () {
    this.model = "Yarris";
    this.year = 2018;
  })();
};

function getPrototypeChain(objects) {
  let prototypeChain = "";
  objects.forEach((obj, methodName) => {
    prototypeChain += `Prototype chain obj ${methodName} : ${tracePrototypeChainOf(
      obj
    )}\n`;
  });

  return prototypeChain;
}

function tracePrototypeChainOf(object) {
  let proto = object.constructor.prototype;
  let result = "";

  while (proto) {
    result += " -> " + proto.constructor.name;
    proto = Object.getPrototypeOf(proto);
  }

  return result;
}

// C

const getCalculator = () => {
  class Calculator {
    #value;
    constructor() {
      this.#value = 0;
    }

    add(num) {
      this.#value += num;
    }

    sub(num) {
      this.#value -= num;
    }

    getValue() {
      return this.#value;
    }
  }

  return new Calculator();
};

function qCalc() {
  function calcObject() {
    this.calcFactory = () => getCalculator();
    this.desc =
      "calcFactory() is a calculator.\nadd(number) to add a number to it.\nsub(number) to sub a number from it.\ngetValue() to check the current calculator value";
  }

  return new calcObject();
}

// D

function sleepTimeOut(miliseconds = 500) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

const useSleepTimeOut = async (milliseconds) => {
  console.log("11.5s wait - start now");
  await sleepTimeOut(milliseconds);
  console.log("After 11.5s - done");
};

function qAsync() {
  function asyncObject() {
    this.doAsync = () => sleepTimeOut();
    this.exec = () => useSleepTimeOut(11500);
    this.desc =
      "doAsync function - asynchronous function which prints something after 11.5 seconds of waiting. \nexec function - a function which call the doAsync function and wait till it ends\n*****\nHow to use?\n*****\ncall the exec function with await (if you want to wait untill 11.5s ends),\nor with .then() and inside then block your next code.\notherwise, call exec function and the rest of your code will run while exec is still waiting.";
  }

  return new asyncObject();
}
