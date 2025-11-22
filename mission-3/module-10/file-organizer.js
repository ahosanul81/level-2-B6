const fs = require("fs");
const path = require("path");

const sourceDirectory = path.join(__dirname, "output", "messy-files");
const organizedDirectory = path.join(__dirname, "output", "organized");
const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".webp"],
  documents: [".pdf", ".docx", ".doc", ".txt", ".pptx"],
  videos: [".mp4", ".mov", ".avi", ".mkv"],
  audio: [".mp3", ".wav", ".aac"],
  compressed: [".zip", ".rar", ".7z"],
  others: [],
};
const sampleFiles = [
  "profile.jpg",
  "document.pdf",
  "presentation.pptx",
  "notes.txt",
  "image.png",
  "report.docx",
  "music.mp3",
  "video.mp4",
  "archive.zip",
  "logo.webp",
];

function initializeDirectories() {
  if (!fs.existsSync(sourceDirectory)) {
    fs.mkdirSync(sourceDirectory, { recursive: true });
    sampleFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDirectory, file), `content of  ${file}`);
    });
  }
  console.log("messy directory files are created");
  if (!fs.existsSync(organizedDirectory)) {
    fs.mkdirSync(organizedDirectory, { recursive: true });
  }
  Object.keys(categories).forEach((category) => {
    const categoryPath = path.join(organizedDirectory, category);
    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });
}
// initializeDirectories();

const getCategory = (fileName) => {
  const ext = path.extname(fileName).toLowerCase();
  let hashMap = {};
  for (let [category, extensions] of Object.entries(categories)) {
    extensions.forEach((extension) => {
      if (hashMap[extension] !== category) {
        hashMap[extension] = category;
      }
    });
  }

  return hashMap[ext] ? hashMap[ext] : "others";
};
// console.log(getCategory("profile.jpg"));

const organizeFiles = () => {
  console.log("File organizer \n");
  console.log("source: ", sourceDirectory);
  console.log("Destination: ", organizedDirectory);
  console.log("\n " + "-".repeat(50) + "\n");

  const files = fs.readdirSync(sourceDirectory);
  if (files.length === 0) {
    return "No file found";
  }
  console.log(`finds ${files.length} files to organize \n`);
  const stats = {
    total: 0,
    byCategory: {},
  };
  files.forEach((file) => {
    const sourcePath = path.join(sourceDirectory, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const category = getCategory(file);
    const destinationDirectory = path.join(organizedDirectory, category);
    const destinationPath = path.join(destinationDirectory, file);
    fs.copyFileSync(sourcePath, destinationPath);
    stats.total++;
    stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

    console.log(`${file}`);
    console.log(`${category}`);
    console.log(`${stat.size}`);
  });
};

function help() {
  console.log(`
        File organizer --usage
        command
        init -- create files
        organize -- organize file into categories

        example:
        node file-organizer init
        node file-organizer organize
        `);
}

const command = process.argv[2];
switch (command) {
  case "init":
    initializeDirectories();
    break;
  case "organize":
    organizeFiles();
    break;
  default:
    help();
    break;
}
