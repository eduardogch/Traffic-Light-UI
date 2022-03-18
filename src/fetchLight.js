export const lightsColors = ["red", "yellow", "green"];

export const fetchLight = (color) => {
  return new Promise((resolve, reject) => {
    switch (color) {
      default:
        reject("No Color");
        break;
      case "yellow":
        resolve("red");
        break;
      case "green":
        resolve("yellow");
        break;
      case "red":
        resolve("green");
        break;
    }
  });
};

export const fetchRandomLight = () => {
  return new Promise((resolve, reject) => {
    try {
      const random = Math.floor(Math.random() * lightsColors.length);
      resolve(lightsColors[random]);
    } catch (error) {
      reject("No Color");
    }
  });
};
