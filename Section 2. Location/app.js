console.log(window.location.href);
console.log(document.location.search);

// setTimeout(() => {
//   location.replace("https://www.javascripttutorial.net");
// }, 3000);

console.log(location.search);

const urlParams = new URLSearchParams(location.search);
console.log(urlParams.has("type"));

for (const [key, value] of urlParams) {
  console.log(`${key} : ${value}`);
}

// Redirect to a new URL
const apps = {
  android: "https://play.google.com/",
  ios: "https://www.apple.com/store",
};

const platform = () => {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) return "Windows Phone";
  if (/android/i.test(userAgent)) return "Android";
  if (/ipad|iPhone|iPod/i.test(userAgent) && !window.MSStream) return "iOS";
  return null;
};

const redirect = () => {
  let os = platform();
  if (os in apps) {
    location.replace(apps[os]);
  } else {
    const message = document.querySelector(".message");
    message.innerHTML = "Your os is not supported";
  }
};
redirect();

// window.onload = function () {
//   location.href = "https://www.javascripttutorial.net/";
// };
