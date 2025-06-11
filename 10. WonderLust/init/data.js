const places = [
  {
    title: "Eiffel Tower",
    description: "Iconic iron tower with city views.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 1000,
    location: "Paris",
    country: "France"
  },
  {
    title: "Great Wall of China",
    description: "Historic fortification winding over hills.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    price: 1020,
    location: "Beijing",
    country: "China"
  },
  {
    title: "Taj Mahal",
    description: "Marble mausoleum by the river.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    price: 1040,
    location: "Agra",
    country: "India"
  },
  {
    title: "Statue of Liberty",
    description: "Famous symbol of freedom on Liberty Island.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    price: 1060,
    location: "New York",
    country: "USA"
  },
  {
    title: "Colosseum",
    description: "Ancient Roman gladiatorial arena.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    price: 1080,
    location: "Rome",
    country: "Italy"
  },
  {
    title: "Machu Picchu",
    description: "Stunning Inca ruins in the Andes.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    price: 1100,
    location: "Cusco Region",
    country: "Peru"
  },
  {
    title: "Christ the Redeemer",
    description: "Giant statue overlooking the city.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 1120,
    location: "Rio de Janeiro",
    country: "Brazil"
  },
  {
    title: "Sydney Opera House",
    description: "Famous sail‑like performing arts venue.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    price: 1140,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "Pyramids of Giza",
    description: "Ancient pyramids on the desert plateau.",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450",
    price: 1160,
    location: "Giza",
    country: "Egypt"
  },
  {
    title: "Santorini",
    description: "Picturesque island with blue‑domed churches.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1180,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Stonehenge",
    description: "Ancient stone circle in the countryside.",
    image: "https://images.unsplash.com/photo-1505144808419-dbbe13e0e232",
    price: 1200,
    location: "Wiltshire",
    country: "UK"
  },
  {
    title: "Banff National Park",
    description: "Majestic mountain lake landscape.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    price: 1220,
    location: "Alberta",
    country: "Canada"
  },
  {
    title: "Angkor Wat",
    description: "Large temple complex and symbol of Cambodia.",
    image: "https://images.unsplash.com/photo-1511466150745-5c0329b480af",
    price: 1240,
    location: "Siem Reap",
    country: "Cambodia"
  },
  {
    title: "Yellowstone National Park",
    description: "First national park full of geysers and wildlife.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 1260,
    location: "Wyoming",
    country: "USA"
  },
  {
    title: "Acropolis of Athens",
    description: "Ancient citadel overlooking the city.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    price: 1280,
    location: "Athens",
    country: "Greece"
  },
  {
    title: "Grand Canyon",
    description: "Vast canyon carved by the Colorado River.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1300,
    location: "Arizona",
    country: "USA"
  },
  {
    title: "Petra",
    description: "Ancient rock‑cut city of sandstone.",
    image: "https://images.unsplash.com/photo-1528782299748-6eef55b2ec6e",
    price: 1320,
    location: "Ma'an Governorate",
    country: "Jordan"
  },
  {
    title: "Serengeti National Park",
    description: "Wildlife-rich reserve in Tanzania.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    price: 1340,
    location: "Mara Region",
    country: "Tanzania"
  },
  {
    title: "Mount Fuji",
    description: "Sacred snow-capped volcano.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    price: 1360,
    location: "Honshu",
    country: "Japan"
  },
  {
    title: "Venice Canals",
    description: "Historic waterways and gondolas.",
    image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699",
    price: 1380,
    location: "Venice",
    country: "Italy"
  },
  {
    title: "Great Barrier Reef",
    description: "Largest coral reef with marine biodiversity.",
    image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d",
    price: 1400,
    location: "Queensland",
    country: "Australia"
  },
  {
    title: "Moscow Kremlin",
    description: "Fortress with palaces and cathedrals.",
    image: "https://images.unsplash.com/photo-1511044568932-338cba3050a3",
    price: 1420,
    location: "Moscow",
    country: "Russia"
  },
  {
    title: "Chichen Itza",
    description: "Mayan pyramid and archaeological site.",
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    price: 1440,
    location: "Yucatán",
    country: "Mexico"
  },
  {
    title: "Uluru (Ayers Rock)",
    description: "Massive sandstone monolith in desert.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab",
    price: 1460,
    location: "Northern Territory",
    country: "Australia"
  },
  {
    title: "Neuschwanstein Castle",
    description: "Fairytale castle in the mountains.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    price: 1480,
    location: "Bavaria",
    country: "Germany"
  },
  {
    title: "Bagan Temples",
    description: "Thousands of Buddhist temples across plains.",
    image: "https://images.unsplash.com/photo-1501983397328-113bc32e80fd",
    price: 1500,
    location: "Bagan",
    country: "Myanmar"
  },
  {
    title: "Iguaçu Falls",
    description: "Large waterfalls on border of two countries.",
    image: "https://images.unsplash.com/photo-1529347225265-59d51b7390ec",
    price: 1520,
    location: "Paraná",
    country: "Brazil/Argentina"
  },
  {
    title: "Ban Gioc–Detian Falls",
    description: "Scenic falls straddling two countries.",
    image: "https://images.unsplash.com/photo-1509358274697-41e4793a1c1c",
    price: 1540,
    location: "Daxin County",
    country: "Vietnam/China"
  },
  {
    title: "Mount Kilimanjaro",
    description: "Africa’s highest peak, a dormant volcano.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1560,
    location: "Kilimanjaro Region",
    country: "Tanzania"
  },
  {
    title: "Yellow Mountains (Huangshan)",
    description: "Beautiful peaks shrouded in mist.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1580,
    location: "Anhui",
    country: "China"
  },
  {
    title: "Galápagos Islands",
    description: "Unique wildlife and volcanic landscapes.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    price: 1600,
    location: "Galápagos",
    country: "Ecuador"
  },
  {
    title: "Bali Rice Terraces",
    description: "Green terraced fields on slopes.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    price: 1620,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Banff Gondola",
    description: "Scenic ride up Sulphur Mountain.",
    image: "https://images.unsplash.com/photo-1526481280698-3a6f686ff3b1",
    price: 1640,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Bryce Canyon",
    description: "Unique rock formations called hoodoos.",
    image: "https://images.unsplash.com/photo-1526481280698-3a6f686ff3b1",
    price: 1660,
    location: "Utah",
    country: "USA"
  },
  {
    title: "Pamukkale",
    description: "Terraced thermal pools of travertine.",
    image: "https://images.unsplash.com/photo-1505093912269-5b1a5faa2105",
    price: 1680,
    location: "Denizli Province",
    country: "Turkey"
  },
  {
    title: "Blue Lagoon",
    description: "Geothermal spa in a lava field.",
    image: "https://images.unsplash.com/photo-1494844317901-6bf0c00b54da",
    price: 1700,
    location: "Grindavík",
    country: "Iceland"
  },
  {
    title: "Masai Mara",
    description: "Famous for annual wildebeest migration.",
    image: "https://images.unsplash.com/photo-1477555359214-56a368c7499f",
    price: 1720,
    location: "Narok County",
    country: "Kenya"
  },
  {
    title: "Great Ocean Road",
    description: "Scenic coastal drive with rock formations.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1740,
    location: "Victoria",
    country: "Australia"
  },
  {
    title: "Cinque Terre",
    description: "Colorful villages perched on cliffs.",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    price: 1760,
    location: "Liguria",
    country: "Italy"
  },
  {
    title: "Times Square",
    description: "Bustling commercial intersection at night.",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
    price: 1780,
    location: "New York",
    country: "USA"
  },
  {
    title: "Forbidden City",
    description: "Historic palace complex.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1800,
    location: "Beijing",
    country: "China"
  },
  {
    title: "Santorini Sunset Cruise",
    description: "Boat trip with sunset views.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    price: 1820,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Ha Long Bay",
    description: "Limestone karsts in emerald waters.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1840,
    location: "Quảng Ninh",
    country: "Vietnam"
  },
  {
    title: "Seoul Tower",
    description: "Observation tower with city panorama.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    price: 1860,
    location: "Seoul",
    country: "South Korea"
  },
  {
    title: "Cappadocia Hot Air Balloon",
    description: "Float over fairy chimneys at sunrise.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1880,
    location: "Cappadocia",
    country: "Turkey"
  },
  {
    title: "The Louvre",
    description: "World’s largest art museum.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: 1900,
    location: "Paris",
    country: "France"
  },
  {
    title: "Dubai Skyline",
    description: "Modern skyscrapers and luxury.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 1920,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Great Blue Hole",
    description: "Underwater sinkhole in ocean.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
    price: 1940,
    location: "Belize",
    country: "Belize"
  },
  {
    title: "Kruger National Park",
    description: "Huge African game reserve.",
    image: "https://images.unsplash.com/photo-1528782299748-6eef55b2ec6e",
    price: 1960,
    location: "Mpumalanga",
    country: "South Africa"
  },
  {
    title: "Blue Mosque",
    description: "Historic mosque with tiled interior.",
    image: "https://images.unsplash.com/photo-1505093912269-5b1a5faa2105",
    price: 1980,
    location: "Istanbul",
    country: "Turkey"
  },
  {
    title: "Mount Everest Base Camp",
    description: "Gateway to the world’s highest peak.",
    image: "https://images.unsplash.com/photo-1508264165352-258a6c139e18",
    price: 2000,
    location: "Solukhumbu",
    country: "Nepal"
  }
  ];
  
module.exports = {data: places};
  
module.exports = {data: places};