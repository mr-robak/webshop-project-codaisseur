const initialState = [
  {
    id: 1,
    name: "Cat Butt Tissue Holder",
    description:
      "THESE KITTIES LOVE TO HELP - Keep your tissues close at hand with the help of your trusty feline friend.  HUMOROUS TISSUE HOLDER - You are certain to get loads of laughs and visitors to your powder room or office will love to grab a tissue from this quirky cat. FITS SQUARE TISSUE BOXES - Measures 12.5 wide, fits standard square tissue boxes.",
    price: 36.23,
    soldNr: 21,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/712ePtgJeeL._AC_SL1500_.jpg",
    tags: ["animals", "hygene", "butt", "gifts"],
  },
  {
    id: 2,
    name: "Unique Flavored Soda, 6-Pack",
    description:
      "These drinks taste exactly like real, popular foods when they're actually just carbonated drinks. Challenge your senses by sipping on flavors like buffalo wing soda, corn soda, bacon soda, or pumpkin pie soda. Made in the USA. Pure cane sugar. 170 calories per soda. 100% authentic taste.",
    price: 9,
    soldNr: 12,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71J8cee4XfL._SL1440_.jpg",
    tags: ["food", "healthy", "drinks"],
  },
  {
    id: 3,
    name: "Chicken Harness and Leash",
    description:
      "You may or may not be aware, but some cities nationwide actually do let you keep chickens as pets. This leash boasts a a durable, breathable leash that won't hurt your clucking friend. EASY TO ADJUST – ENSURE A COMFY FIT: Our chicken harnesses are truly adjustable and easy to wear. Adjust the size to your needs to make sure your chickens are 100% comfy no matter what. No more feeling uncomfortable. You will not worry that the chicken will get rid of harness when walking the chicken at street.ENHANCE CHICKEN TRAINING TO THE FULLEST: Teach your fowls to walk on a leash and find your peace of mind again. Facilitate their training and walking performances with the Yesito harness on. It’s that easy. Try it and see for yourself.",
    price: 16.98,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81m%2BJJVVtAL._AC_SL1500_.jpg",
    soldNr: 5,
    tags: ["animals", "pets", "professional"],
  },
  {
    id: 4,
    name: " Nothing",
    description:
      "We all have that one friend who always has the latest phone, game, computer, or what have you. You know what they might like? Nothing. Now, you can buy it (Nothing, that is) from Amazon. It’s the only thing standing between you and all your goals and dreams! It was the inspiration for a Shakespearean comedy! You can sneeze at it! Really, the possibilities are endless.",
    price: 299.99,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51UpXLcyYaL._AC_SL1000_.jpg",
    soldNr: 4,
    tags: ["gifts", "healthy", "eco"],
  },
  {
    id: 5,
    name: "How to Live with a Huge Penis",
    description: `How to Live with a Huge Penis: Advice, Meditations, and Wisdom for Men Who Have Too Much
      
      Is Bigger Really Better? Here at last is the first self-help book for men with Oversized Male Genitalia (OMG), a genetic birth defect that grows the penis to absurd proportions. Every year, thousands of men are diagnosed with OMG. Sadly, most are banished to the fringes of society, victims of their own freakish length and girth. How to Live with a Huge Penis brings them an inspiring message of tolerance and hope—along with helpful information on    •  Unzipping: Coming Out to Your Friends and Family
      •  Sharing Your Pain: Sexual Intercourse with a Huge Penis
      •  Big Blessings: Unexpected Advantages of a Huge Penis
      •  and much, much more
       
      Complete with prayers, poetry, a daily affirmations journal, and thoughtful quotations from leading self-help experts, How to Live with a Huge Penis will inspire men of all shapes and sizes.`,
    price: 11.08,
    imageUrl: "https://m.media-amazon.com/images/I/41aTjQc11vL.jpg",
    soldNr: 0,
    tags: ["books", "self-development", "real life problems"],
  },
  {
    id: 6,
    name: "How to Talk to Your Cat About Gun Safety",
    description: `How to Talk to Your Cat About Gun Safety: And Abstinence, Drugs, Satanism, and Other Dangers That Threaten Their Nine Lives
      Long gone are the good old days when a cat’s biggest worries were mean dogs or a bath. Modern cats must confront satanists, online predators, the possibility of needing to survive in a post-apocalyptic wasteland, and countless other threats to their nine lives.

For over four decades, the American Association of Patriots have stood at the vanguard of our country's defense by helping to prepare our nation's cat owners for the difficult conversations they dread having with their pets. Written in a simple Q&A format, How to Talk to Your Cat About Gun Safety answers crucial questions such as, “What is the right age to talk to my cat about the proper use of firearms?” and “What are the benefits of my cat living a lifestyle of abstinence?” and especially “Why does my cat need to use the internet? Can’t he just play with yarn like cats used to do?”

Our country—and our cats—stand at a precipice. It will take courage, and it will take hard work, but armed with the knowledge within these pages, we can make our cats—and America—great again!
            `,
    price: 8.39,
    imageUrl: "https://m.media-amazon.com/images/I/51iuvSETecL.jpg",
    soldNr: 2,
    tags: ["books", "pets", "guns", "animals"],
  },
  {
    id: 7,
    name: "Nicolas Cage Pillowcases",
    description:
      "HIGH DEFINITION – The Most Advanced Printing Technology Ensures The Best Definition Image Of The Pillowcase.      ZIPPER – Hidden Zipper Closure At The Side To Keep Pillow From Sliding Out, And For Style, Comfort And Better Fit. 100% Polyester – Hypoallergenic, Long Staple Yarns Woven in a Sateen Weave Make These Pillowcases Incredibly Soft and Luxurious. 100% SATISFACTION GUARANTEE – 100% MONEY BACK GUARANTEE If Not Completely Satisfied, Return With No-Questions Asked. ",
    price: 18.99,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81YxctBNFLL._AC_SL1500_.jpg",
    soldNr: 14,
    tags: ["gifts", "house", "style"],
  },
  {
    id: 8,
    name: "Karaoke Earphone",
    description:
      "This microphone connects back to your own earbud, in case you can't get enough of your own voice.",
    price: 50.73,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/51ZIPzbooyL._AC_.jpg",
    soldNr: 7,
    tags: ["music", "art", "style"],
  },
  {
    id: 9,
    name: "Finger Hands For Finger Hands",
    description:
      "Whoa, dude! We were staring at the Finger Hands on our fingers when we had a thought; what if Finger Hands had Finger Hands? It would be like some kind of crazy Finger Hand fractal. Our minds were blown and we had to make them. These  (3.8 cm) soft vinyl hands fit comfortably on the fingers of Finger Hands or the top of a pen or pencil. Comes with both right and left hands as well as two skin tones.",
    price: 5.04,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/413XFfccjkL._AC_.jpg",
    soldNr: 4,
    tags: ["gifts", "professional"],
  },
  {
    id: 10,
    name: "Original Ostrich Pillow",
    description:
      "DREAM IN STYLE: The revolutionary media sensation OSTRICHPILLOW ORIGINAL is the ultimate immersive pillow! Use it for a power nap at your desk, lounging at home, or wherever you may be, without moving an inch. Just slip it on and you're off to dreamland. REVOLUTIONARY DESIGN: The travel head pillow is designed to feel immersive like a cocoon, giving the feeling of you being able to disconnect from your surroundings, reducing the light and ambient sound of your environment. With a specifically designed opening on the front side, you can breathe through your nose and mouth easily, along with two more openings for your hands to comfortably slip in above your head",
    price: 99,
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61thviNNEhL._AC_SL1000_.jpg",
    soldNr: 1,
    tags: ["health", "self-development", "style"],
  },
  {
    id: 11,
    name: "Embracing Life with a Micropenis",
    description: `It's not the size that matters: Embracing Life with a Micropenis: Ideal book for the man with a small penis. THE BEST SECRET SANTA gift. A superb wedding gift. 
      If you ever find yourself saying, "Does Size Matter?" This book is ideal for those who face Encounters with a Less-Endowed Partner.
It's a book for men with a tiny penis, they may make special orders for tiny condoms online, because even the smallest condoms available in stores are too baggy and just slip off.
It's not a self help book. But for those who know what it's like living with a little willy, this is for them.
It's also THE BEST SECRET SANTA BOOK!`,
    price: 6.41,
    imageUrl: "https://m.media-amazon.com/images/I/517UeGIlrML.jpg",
    soldNr: 1000,
    tags: ["books", "self-development", "real life problems"],
  },
];

const neWane = JSON.stringify(initialState);
console.log(neWane);

export default function productsSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "XXXXXX":
      return state;

    default: {
      return state;
    }
  }
}
