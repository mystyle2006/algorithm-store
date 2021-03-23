const folderName = 'New Folder';

function generateNewFolderName(existingFolders) {
  if (!existingFolders.includes(folderName)) return folderName;

  let i = 2;
  while(true) {
    if (!existingFolders.includes(`${folderName} (${i})`)) {
      return `${folderName} (${i})`;
    }

    i += 1;
  }
}

console.log(generateNewFolderName(["New Folder"]));