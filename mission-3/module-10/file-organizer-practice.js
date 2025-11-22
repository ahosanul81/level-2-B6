const fs = require("fs");
const path = require("path");

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

const sourceDir = path.join(__dirname, "data", "random-files");
const managedDir = path.join(__dirname, "data", "managed-folders");
const fileManagement = () => {
  fs.mkdirSync(sourceDir, { recursive: true });
  sampleFiles.forEach((file) => {
    fs.writeFileSync(path.join(sourceDir, file), `file ${file} added`);
  });
  console.log("--------Random file directors are created----------");

  fs.mkdirSync(managedDir, { recursive: true });
  for (let category of Object.keys(categories)) {
    fs.mkdirSync(path.join(managedDir, category));
  }
  console.log("--------Managed category folders are created----------");
};
// fileManagement();

const getCategory = (fileName) => {
  const ext = path.extname(fileName);
  let hashMap = {};
  for (let [category, extension] of Object.entries(categories)) {
    extension.forEach((extension) => {
      if (!hashMap[extension]) {
        hashMap[extension] = category;
      }
    });
  }
  return hashMap[ext];
};
// console.log(getCategory("phone.png"));

const manageFile = () => {
  const files = fs.readdirSync(sourceDir);
  if (files.length === 0) {
    return "no file found";
  }
  for (let file of files) {
    const filePath = path.join(sourceDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      continue;
    }
    const category = getCategory(file);
    const destinationDir = path.join(managedDir, category);
    const destinationPath = path.join(destinationDir, file);
    fs.renameSync(filePath, destinationPath);
  }
};
manageFile();
