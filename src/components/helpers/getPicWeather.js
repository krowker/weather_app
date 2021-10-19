// const mistPic = 'https://images.unsplash.com/photo-1585508889431-a1d0d9c5a324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
// const smokePic = 'https://images.unsplash.com/photo-1625135966225-a01cb9fd9969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
// const hazePic = 'https://images.unsplash.com/photo-1533708985023-a9726305e9c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80'
// const dustPic = 'https://images.unsplash.com/photo-1511514323702-88e7e52f5223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
// const fogPic = 'https://images.unsplash.com/photo-1598492071522-08e6de03c749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
// const ashPic = 'https://images.unsplash.com/photo-1572211419533-6a9cfe736cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
// const squallPic = 'https://images.unsplash.com/photo-1561553873-e8491a564fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80'
// const tornadoPic = 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
// const clearPic = 'https://images.unsplash.com/photo-1558418294-9da149757efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
// const cloudsPic = 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
// const snowPic = 'https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
// const rainPic = 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
// const drizzlePic = 'https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
// const thunderstormPic = 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80'

function getPicWeather(input = 'clear') {
   const mistPic = 'https://images.unsplash.com/photo-1585508889431-a1d0d9c5a324?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
   const smokePic = 'https://images.unsplash.com/photo-1625135966225-a01cb9fd9969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'
   const hazePic = 'https://images.unsplash.com/photo-1533708985023-a9726305e9c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80'
   const dustPic = 'https://images.unsplash.com/photo-1511514323702-88e7e52f5223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
   const fogPic = 'https://images.unsplash.com/photo-1598492071522-08e6de03c749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
   const ashPic = 'https://images.unsplash.com/photo-1572211419533-6a9cfe736cfc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
   const squallPic = 'https://images.unsplash.com/photo-1561553873-e8491a564fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80'
   const tornadoPic = 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
   const clearPic = 'https://images.unsplash.com/photo-1558418294-9da149757efe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
   const cloudsPic = 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
   const snowPic = 'https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
   const rainPic = 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
   const drizzlePic = 'https://images.unsplash.com/photo-1576234699886-7eb7f11aecb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'
   const thunderstormPic = 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80'

   switch (input) {
      case 'mist':
         return mistPic
         break
      case 'smoke':
         return smokePic
         break
      case 'haze':
         return hazePic
         break
      case 'dust':
         return dustPic
         break
      case 'fog':
         return fogPic
         break
      case 'ash':
         return ashPic
         break
      case 'squall':
         return squallPic
         break
      case 'tornado':
         return tornadoPic
         break
      case 'thunderstorm':
         return thunderstormPic
         break
      case 'clouds':
         return cloudsPic
         break
      case 'snow':
         return snowPic
         break
      case 'rain':
         return rainPic
         break
      case 'drizzle':
         return drizzlePic
         break
      default:
         return clearPic
   }
}

export default getPicWeather