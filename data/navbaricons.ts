interface NavIcons{
    image : string,
    text : string
}

const navIcon : NavIcons[] = [
    {
      image: "../assets/images/menu.png",
      text: "Menu",
    },
    {
      image: require("../assets/images/Myntra_logo.png"),
      text: "Logo",
    },
    {
      image: require("../assets/images/search-symbol.png"),
      text: "Search",
    },
    {
      image: require("../assets/images/notification.png"),
      text: "Notifications",
    },
    {
      image: require("../assets/images/heart.png"),
      text: "Wishlist",
    },
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Bag",
    },
    {
      image: require("../assets/images/back.png"),
      text: "Back",
    },
    {
      image: require("../assets/images/clear.png"),
      text: "Clear",
    },
  ];

  export {NavIcons, navIcon};