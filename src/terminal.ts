import Filesystem from './filesystem';
const filesystem = new Filesystem();
export default class Terminal {
  rootDiv: Element;
  stdout: Element;
  stdin: Element;
  inputElement: HTMLInputElement;
  inputText: string;
  displayString: string;
  constructor(rootDiv: Element) {
    this.rootDiv = rootDiv;
    this.stdout = <Element>this.rootDiv.querySelector('.stdout');
    this.stdin = <Element>this.rootDiv.querySelector('.stdin');
    this.inputElement = <HTMLInputElement>this.stdin.querySelector('.stdinInput');
    this.inputText='';
    this.displayString='';
  }
  getEnter():void {
    this.inputText = this.inputElement.value;
    console.log(this.inputText);
    this.inputElement.value = '';
    this.displayString = filesystem.getInput(this.inputText);
    this.addStdin();
  }
  addStdin():void {
    if(this.displayString==='0'){
      this.displayString='';
    }else{
      this.displayString=`<div>${this.displayString}</div><br/>`;
    }
    this.stdout.innerHTML = `${this.stdout.innerHTML}
    <div>[root@MaxJ ~]  ${this.inputText}</div>
    ${this.displayString}`;
  }
  addListener():void {
    this.inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.getEnter();
      }
    })
  }
  initial():void{
    this.addListener();
  }
}
