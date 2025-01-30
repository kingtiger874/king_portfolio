/* eslint-disable */
function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

const list = [
  {
    id: 1,
    image: images["hotel.jpg"],
    title: "iOS 17 Launcher",
    github: "https://github.com/sediqullahbadakhsh/hotel-agent-front-end",
    live: "https://infinite-falls-52470.herokuapp.com/v1/most_recent",
    tech: ["React", "Redux", "Rails"],
    date: "9.24.2022",
    description:
      "Do you like the iPhone? but don’t want to switch from android to iPhone. No worries, Simply download this free iOS Launcher 17 app on your Android phone, and this app can give a similar experience as an iPhone or real iOS phone on your Android device. This Launcher gives the iPhone theme for Android devices.",
  },
  {
    id: 2,
    image: images["space.jpg"],
    title: "iOS Lock Screen",
    github: "https://github.com/sediqullahbadakhsh/space-travelers",
    live: "https://space-travelers-fbclh.vercel.app/",
    tech: ["JS", "React", "Redux"],
    date: "9.24.2022",
    description:
      "Lock screen and notifications with beautiful iOS style on Android device",
  },
  {
    id: 3,
    image: images["budget.jpg"],
    title: "Dynamic Island",
    github: "https://github.com/sediqullahbadakhsh/budget-app",
    live: "https://hidden-scrubland-51470.herokuapp.com/",
    tech: ["Ruby", "Rails", "SQL"],
    date: "9.24.2022",
    description:
      "Change punch hole camera into dynamic island iOS 16 iphone notification style",
  },
  {
    id: 3,
    image: images["and_4.jpg"],
    title: "iOS Note",
    github: "https://github.com/sediqullahbadakhsh/budget-app",
    live: "https://hidden-scrubland-51470.herokuapp.com/",
    tech: ["Ruby", "Rails", "SQL"],
    date: "9.24.2022",
    description:
      "iOS Note is a small and fast notetaking app for making notes, handwriting, todolist, or just any plain text content.",
  },
];

export default list;
