const products = [
  {
    name: "boAt Smart WATCH STORM (Color As Per Availability)",
    brand: "BOAT",
    description:
      "Monitor sleep along with monitoring 24 hour uninterrupted heart rate, Blood oxygen level, and Blood Pressure. This watch is made specially for those who perform high-intensity workouts and require precise health and fitness monitoring.",
    price: 1200,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/5e9f92a01c986bafcabbafd145520b13/500x500/68c732ec2ecf12bdf1823ec02c6dfbaf5fbf53fb_62125539.jpg",
    category: "Electronics",
  },
  {
    name: "iGear Dynamo",
    brand: "IGEAR",
    description:
      " >10 watts bluetooth speaker >Bluetooth V5.0 >USB/TF/SD card support >AUX support >In-built FM radio >Remote controlled >Wired MIC support >LED lights for effect >2400 mAh Li-ion rechargeable battery",
    price: 700,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/df877f3865752637daa540ea9cbc474f/900x900/f56afb1f613978cde479cf93d0826e6a01b94b4e_60907168.jpg",
    category: "Electronics",
  },
  {
    name: "NOISE AIR BUDS MINI TRULY WIRELESS EARBUDS",
    brand: "NOISE",
    description:
      "NOISE AIR BUDS MINI TRULY WIRELESS EARBUDS , you can take calls, groove to your favorite music, or exercise to adrenaline-pumping hits. Equipped with 14.2 mm speaker drivers, these earbuds are powered by True Bass technology to offer an immersive audio experience. The NOISE AIR BUDS MINI TRULY WIRELESS EARBUDS feature intuitive touch controls so that you can skip tracks, adjust volume, manage calls, or launch your phone's voice assistant effortlessly.",
    price: 900,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/7bcdf75ad237b8e02e301f4091fb6bc8/416x339/7289e2978edad42c701ac522e9acff7f38e5dcfc_59935304.png",
    category: "Electronics",
  },
  {
    name: "YouBella Jewellery Stylish Silver Plated Solitaire Crystal Ring for Women and Girls",
    brand: "YOUBELLA",
    description:
      "Best for Gifting and for personal Use, combine it with matching dress and be the limelight of every Occassion Plated with High Quality Polish for Long Lasting Finish Suitable for all occassions Nickel free The plating is non-allergic and safe for all environments Jewelery Care : Never allow your fashion jewellery to come in contact with harsh chemicals, oils, nor spray perfumes directly on them. This will cause the jewellery to fade, discolour, or even ruin them completely. And we wouldn",
    price: 330,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/f1b6f2857fb6d44dd73c7041e0aa0f19/695x546/464701c96b8b3e5557cadbea8adeba4d222dfe89_64786377.jpg",
    category: "Fashion",
  },
  {
    name: "Elliot Men Vegan Leather Combo Gift Set (Set of 3)",
    brand: "ELLIOT",
    description:
      "Elliot Urban Men Black Color Themed Vegan Leather Combo Gift Set. This stylish Gift Set Carries a Men's Analog Watch, Wallet & a Double Sided Reversible Belt, which is made from Premium Quality Vegan Leather by Well Trained Artisians. There is also a replacement warranty of 6 months from the manufacturer. About Brand, Elliot as a brand was started in 2018 in India by Runway Creation Pvt Ltd, the Founder of Laurels Leather Goods. It is among the leading wristwatch and fashion brands and was the highest-selling private label in India in the e-commerce industry. With Over 1000+ unique designs, the brand also manufactures wallets, belts, leather gift Combos, sunglasses, bags, electronics, etc. Check our whole range & latest updates on www.elliotstore.com",
    price: 500,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/ef575e8837d065a1683c022d2077d342/600x600/c9b7359a3448467c17cf8195ecea52dcb1f3a68e_65493485.jpg",
    category: "Fashion",
  },
  {
    name: "Mammon Women's Handbags Combo (2bib-cont) (Multi color1)",
    brand: "MAMMON",
    description:
      "New ladies bag Design by MAMMON .Made of PU, Dimension- 28x12x28 CM (LxBxH) Stylish latest combo set of handbags and sling bags for women ladies and girls .Hand bag : This colorful bag have one compartment with top zip closing functions Sling bag : This sling bag comes with one main compartment",
    price: 620,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/f1b6f2857fb6d44dd73c7041e0aa0f19/964x1024/1464f8f53f3bd038efaf867a8b864993ec0911fe_65183082.jpg",
    category: "Fashion",
  },
  {
    name: "Walrus Multicolor Dial Analog Leather Strap Wrist Watch For Men",
    brand: "WALRUS",
    description:
      "This Stylish Watch Is Made From Premium Alloy Ensuring Good Product Life. The Watch Features Are; Dial Color : Multi, Strap Color : Brown, Case Color: Black. The Watch Dimensions Are; Case Size:40Mm, Strap Size: 22Mm, Dial Size: 36Mm. There Is Also A Replacement Warranty Of 12 Months From The Manufacturer. Walrus Is A Brand From The House Of Runway Creation Pvt Ltd, A Reknown Wristwatch & Fashion Accessory Manufacturer Based In Sahibabad Industrial Area, U.P. With A Customer Base Of Over 10 Million Customer Across The Globe. The Company Has Its Roots From The Year 2011 And Owns Brands: Laurels (Leather Accessory), Elliot, Walrus, Austere. It Has Over 1000+ Designer Products Across Various Categories. The Company Is Known For Its Novel Designs, Quality And Reliable Aftersale Service.",
    price: 260,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/ef575e8837d065a1683c022d2077d342/955x850/66264f7523af7f87a4cd970907665def7bb9780c_64935812.jpg",
    category: "Fashion",
  },
  {
    name: "Urban Gear Foldable Memory Foam Travel PillowBuddy 2.0",
    brand: "URBAN GEAR",
    description: "Foldable Memory Foam Neck Pillow - BUDDY 2.0",
    price: 330,
    countInStock: 10,
    imageUrl:
      "https://imagesm.plexussquare.in/URBANGEAR/Images/14-08-2020/1597387003835.jpg",
    category: "Travel",
  },
  {
    name: "Traveldoo Chord And Charger Organizer (Small)",
    brand: "TRAVELDOO",
    description:
      "Organize and protect your small electronics and other accessories with this Cable Organizer from Traveldoo. The cable organizer is made of durable and water resistant material to keep your accessories safe. The mesh pockets/wire ties keep your cables tangle free and make your trip hassle free.",
    price: 220,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/c75b6f114c23a4d7ea11331e7c00e73c/800x640/6bf8d24411bea41ed6947abf799a228a85e1db23_53530587.jpg",
    category: "Travel",
  },
  {
    name: "NFI essentials Leatherette Cabin Size Travel Duffle Bag Size 50cm (31 Litre) Overnight Leather Travelling Handbag Stylish Sports Gym Bag",
    brand: "NFI",
    description:
      "MATERIAL - We use Highest Quality of Synthetic Leather which is Durable, Long Lasting and tested to ensure they don't peel off in just few months. The leatherrete is also water resistant. Inner fabric lining ensured to have a soft touch feel. We use quality zips and accessories that have a long life. Waterproof - With this unisex duffle bag, you can be rest assured that none of your belongings will be damaged by rain or accidental splashes. The interiors of this water-resistant travel duffle bag remain free from moisture even if you get caught in an unexpected shower. Dimensions: 50 x 25 x 25 cm. Volume Capacity - 31 Litre. Huge Spacious Compartment Design - This stylish yet utilitarian textured leatherette duffle bag can be used for corporate travel as well as to take to the gym. The Large Spacious Compartment is suitable for 3-4 days weekender or business trip, can be used as a carry-on flight bag as well.Content: 1 Unit",
    price: 950,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/f1b6f2857fb6d44dd73c7041e0aa0f19/679x679/baf9481f6446905b7b707d0307110cd81fb87732_64503483.jpg",
    category: "Travel",
  },
  {
    name: "Hammer UltraFlow Electric Toothbrush and 3 Replaceable Brush Heads for Men and Women, 6 Brushing Modes, Rechargeable Battery, Waterproof, Super-Soft Bristles, Electric Toothbrush (Blue)",
    brand: "HAMMER",
    description:
      "Hammer UltaFlow electronic toothbrush has super sonic vibration motor for excellent cleaning experience with 31,000 strokes/minutes. This automatic toothbrush is rechargeable, however, with its large battery, this battery powered toothbrush can be used for up to 30 days. This smart toothbrush with 6 different power modes. It can be operated by both men and women. It has super soft brushes bristles for tooth cleaning and gum protection. Tooth brush is IPX7 rated for water protection. Electric brush comes with 3 extra ultra-soft brush heads.",
    price: 550,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/84117275be999ff55a987b9381e01f96/1024x1024/7e72ec6f482a8d1783c92eb397dbcffa7f966f7e_62977269.jpg",
    category: "Health",
  },
  {
    name: "Healthsense Enhance Electric Facial Roller FR 407",
    brand: "HEALTHSENSE",
    description:
      "The natural rose quartz stone is chemical free with cooling effect on skin and helps relax facial muscles along with reducing dark circles. Suitable for daily usage on face, neck, nose & eye area to improve skin circulation, reduce puffiness & wrinkles. Cambered waterproof metal frame with squeak free handle for durability. Unique rotary switch for easy operation & battery insertion.",
    price: 500,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/afd4836712c5e77550897e25711e1d96/1024x1024/f7be28b10286a53102713896a7ddef199ab17a8f_63514527.jpg",
    category: "Health",
  },
  {
    name: "Philips HP6388 Pen Trimmer for eyebrow & face (White)",
    brand: "PHILIPS",
    description:
      "Shape your eyebrows and remove upper lips hair at home Perfectly trimmed eyebrows with comb attachment Small enough to take everywhere .Battery included Cleaning brush included so you can keep the trimmer hygienic Ideal for quick touch-ups on-the-go.Power Source : 1x AAA Batteries (included) 2 years warranty",
    price: 830,
    countInStock: 10,
    imageUrl:
      "https://d12w9lfqeljony.cloudfront.net/74071a673307ca7459bcf75fbd024e09/1024x1024/20a3fe0d87fe8859919edca8e33ae4589d392b71_59983519.jpg",
    category: "Health",
  },
  {
    name: "MAZORIA Briefcase Foldable Portable Picnic Barbeque, Griller, tandoor with 8 Skewer and 1 Iron Grill",
    brand: "MAZORIA",
    description:
      "It is compact small size with 4 foldable legs, just like a suitcase when folded, dimension (17 length x 10 breath x 17 height with open legs) inches approx",
    price: 1850,
    countInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/516hD0qNPWL.jpg",
    category: "Outdoor",
  },
  {
    name: "F2L Artificial Grass Mats Carpet for Balcony - for Home Decoration - Floor Mat for Living Room Bedroom, Office - Summer Use ( Size- 2 X 5 Feet) Green Color",
    brand: "F2L",
    description:
      "All season usage without any affect from rain or snow. Minimum shedding. Durable and. Can sustain heat and heavy usage Where to use: Can be use indoor and outdoor both. You can use it as carpet inside the house, for landscaping garden, for decorating Balcony etc. Natural appearance: Artificial grass adopted through principles of bionics to provide the exact look and feel of natural grass Different Sizes: We are offering different sizes of Grass Carpet on Amazon. Please match the size with your space before ordering so that it matches your requirement.",
    price: 490,
    countInStock: 10,
    imageUrl: "https://m.media-amazon.com/images/I/61ujx83TxXL._SX679_.jpg",
    category: "Outdoor",
  },
];

module.exports = products;
