import File from "./file";
import Folder from "./folder";

const file1: File = new File("file1.txt");
const file2: File = new File("file2.txt");
const file3: File = new File("file3.txt");
const file4: File = new File("file4.txt");

const folder1: Folder = new Folder("folder1");
folder1.add(file1);
folder1.add(file2);
const folder2: Folder = new Folder("folder2");
folder2.add(file3);
folder2.add(file4);

const folder: Folder = new Folder("all_folders");
folder.add(folder1);
folder.add(folder2);
folder.show();
folder.move();
// folder1.show();
// folder1.move();
// console.log("-------------------------------------------");
// folder2.show();
// folder2.move();
// file1.show();
// file1.move();
// file2.show();
// file2.move();
