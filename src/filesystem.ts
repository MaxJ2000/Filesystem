import { stringify } from "querystring";
import { EROFS } from "constants";

interface IData {
  content: string;
  name: string;
  type: string;
  child: IData[];
}
interface IREG {
  mutiCMD: RegExp;
  paraCMD: RegExp;
}
let REG: IREG = {
  mutiCMD: /^(?<CMD>[\w\d\-\_\?]+)\ *(?<params>((?<pre>[^\-\\\/\w\d\s\n\r]?)[^\"]*\k<pre>)*)?/,
  paraCMD: /(?:\s*[-]*)([\./\w\d\-\_\?]+)/g,
}
class Data implements IData {
  type: "dir" | "file";
  content: string;
  name: string;
  child: Data[];
  getChild: (name: string) => Data | null;
  getFather(): Data {
    throw new Error('You have been in the root!');
  };
  constructor(type: 'file' | 'dir', name: string, content: string = '') {
    this.type = type;
    this.name = name;
    this.content = content;
    this.child = [];
    this.getChild = () => { return null };
  }
}
export default class Filesystem {
  rootDirObj: Data;
  curDirObj: Data;
  curDir: string;
  constructor() {
    this.rootDirObj = new Data('file', 'home');
    this.curDirObj = this.rootDirObj;
    this.curDir = '/home';
    this.loadData();
  }
  getInput(inputText: string): string {
    let displayString: string;
    displayString = '0';
    let execResult: RegExpExecArray | null;
    function switchCase(this: Filesystem): void {
      if (execResult = REG.mutiCMD.exec(inputText)) {
        let groups = execResult.groups;
        if (groups) {
          switch (groups.CMD) {
            case 'cd': displayString = this.cd(groups.params); break;
            case 'ls': displayString = this.ls(groups.params); break;
            case 'echo': displayString = this.echo(groups.params); break;
            case 'mkdir': displayString = this.mkdir(groups.params); break;
            case 'rm': displayString = this.rm(groups.params); break;
            case 'cp': displayString = this.cp(groups.params); break;
            case 'touch': displayString = this.touch(groups.params); break;
            case 'cat': displayString = this.cat(groups.params); break;
            default:
              throw new Error('Illegal Input!');
          }
        } else {
          throw new Error('Illegal Input!');
        }
      }
    }
    try {
      switchCase.bind(this)();
      localStorage.setItem('filesystem', JSON.stringify(this.rootDirObj));
    } catch (displayError) {
      console.log(this.curDirObj.name);
      return displayError.toString();
    }
    console.log(this.curDirObj.name);
    return displayString;
  }
  public loadData(): void {
    let dataString: string | null = localStorage.getItem('filesystem');
    if (dataString) {
      this.rootDirObj = JSON.parse(dataString);
      this.curDirObj = this.rootDirObj;
      this.addDirFunc();
    } else {
      this.rootDirObj = new Data('dir', 'home');
    }
  }
  addDirFunc(where: Data = this.curDirObj): void {
    function getChild(this: Data, name: string): Data {
      for (let child of this.child) {
        if (child.name === name) {
          return child;
        }
      }
      throw new Error(`File'${name}' not found!`);
    }
    function setFather(father: Data): () => Data {
      function getFather(father: Data): () => Data {
        return () => {
          return father;
        }
      }
      return getFather(father);
    }
    function recursiveAddFunc(nowDir: Data) {
      for (let dir of nowDir.child) {
        dir.getChild = getChild;
        dir.getFather = setFather(nowDir);
        if (dir.child.length) {
          recursiveAddFunc(dir);
        }
      }
    }
    (this.rootDirObj).getChild = getChild;
    (this.rootDirObj).getFather = () => {
      throw new Error('You have been in the root!');
    }
    recursiveAddFunc(where);
    return;
  }
  parsePath(pathString: string): Data {
    let parseResult: Data | null;
    parseResult = null;
    let pathArray: string[] = pathString.split('/');
    for (let path of pathArray) {
      switch (path) {
        case '..': if (parseResult) {
          parseResult = parseResult.getFather();
          break;
        } else {
          parseResult = this.curDirObj.getFather();
          break;
        }
        case '.': if (parseResult) {
          break;
        } else {
          parseResult = this.curDirObj;
          break;
        }
        default: if (parseResult) {
          parseResult = parseResult.getChild(path);
        } else {
          if (this.rootDirObj.name === path) {
            parseResult = this.rootDirObj;
          } else {
            parseResult = this.curDirObj.getChild(path);
          }
        }
      }
    }
    return <Data>parseResult;
  }
  ls(para: string | undefined): string {
    let returnString: string;
    let nameArray: string[] = [];
    let displayHidden: boolean = false;
    let match: RegExpExecArray | null;
    if (para) {
      while (match = REG.paraCMD.exec(para)) {
        switch (match[1]) {
          case 'a':
          case 'A': displayHidden = true; break;
          default: break;
        }
      }
    }
    for (let childObj of this.curDirObj.child) {
      if (displayHidden === true) {
        nameArray.push(childObj.name)
      } else {
        if (childObj.name[0] != '.') {
          nameArray.push(childObj.name);
        }
      }
    }
    returnString = nameArray.join('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
    return returnString;
  }
  echo(para: string): string {
    let returnString: string;
    returnString = para;
    return returnString;
  }
  mkdir(para: string): string {
    if (!para) {
      return '0';
    }
    let pathArray: string[] = para.split('/');
    let operateDirObj: Data;
    let name: string | undefined = pathArray.pop();
    if (pathArray.length === 0) {
      operateDirObj = this.curDirObj;
    } else {
      operateDirObj = this.parsePath(pathArray.join('/'));
    }
    for (let child of operateDirObj.child) {
      if (child.name === name) {
        throw new Error(`${name} have been existed!`);
      }
    }
    operateDirObj.child.push(new Data('dir', <string>name));
    this.addDirFunc(operateDirObj);
    return '0';
  }
  touch(para: string): string {
    let pathArray: string[] = para.split('/');
    let operateDirObj: Data;
    let name: string = <string>pathArray.pop();
    if (pathArray.length === 0) {
      operateDirObj = this.curDirObj;
    } else {
      operateDirObj = this.parsePath(pathArray.join('/'));
    }
    for (let child of operateDirObj.child) {
      if (child.name === name) {
        throw new Error(`${name} have been existed!`);
      }
    }
    operateDirObj.child.push(new Data('file', name));
    return '0';
  }
  cd(pathString: string): string {
    if (!pathString) {
      throw new Error('Illegal Input!');
    }
    this.curDirObj = this.parsePath(pathString);
    return '0';
  }
  cp(para: string): string {
    let returnString: string;
    let cpItem: Data;
    let toHere: Data;
    let path: RegExpExecArray | null;
    let aimName: string | undefined;
    let toHereArray: string[];
    let toHerePath: string;
    if (!para) {
      throw new Error('Illegal Input!');
    }
    REG.paraCMD.lastIndex = 0;
    if (path = REG.paraCMD.exec(para)) {
      cpItem = this.parsePath(path[1]);
      if(cpItem.type==='dir'){
        throw new Error(`Can't copy Direcion`);
      }
    } else {
      throw Error('para 1 Illegal!');
    }
    if (path = REG.paraCMD.exec(para)) {
      toHereArray = path[1].split('/');
      aimName = toHereArray.pop();
      toHerePath = toHereArray.join('/');
      if (aimName) {
        toHere = this.parsePath(toHerePath);
        for (let child of toHere.child) {
          if (child.name === aimName) {
            throw Error(`${aimName} already existed!`);
          }
        }
        toHere.child.push(new Data(cpItem.type, aimName, cpItem.content));
        this.addDirFunc(toHere);
      } else {
        throw Error('para 2 Illegal!');
      }
    }else{
      throw Error('para 2 Illegal!');
    }
    REG.paraCMD.lastIndex = 0;
    return '0';
  }
  rm(para: string): string {
    let recursiveRemove: boolean = false;
    let match: RegExpExecArray | null;
    let operateDirObj: Data;
    if (para) {
      while (match = REG.paraCMD.exec(para)) {
        switch (match[1]) {
          case 'r':
          case 'R': recursiveRemove = true; break;
          default: REG.paraCMD.lastIndex = 0;
            operateDirObj = this.parsePath(match[1]);
            if (operateDirObj.child.length !== 0 && recursiveRemove === false) {
              return `Warning: use "\\r" option to recursive delete!`;
            } else {
              if (operateDirObj == this.rootDirObj) {
                throw new Error("You can't delete home!");
              } else {
                let operateDirObjFather: Data = operateDirObj.getFather()
                operateDirObjFather.child.forEach((curObj, index) => {
                  if (curObj === operateDirObj) {
                    operateDirObjFather.child.splice(index, 1);
                    return;
                  }
                })
              }
            }
            return '0';
        }
      }
    }
    return '0';
  }
  cat(pathString: string): string {
    let returnString: string;
    return '0';
  }
}

