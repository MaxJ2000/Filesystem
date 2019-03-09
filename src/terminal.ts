import Filesystem from './filesystem';
const filesystem = new Filesystem();
export default class Terminal {
  rootDiv: Element;
  stdout: Element;
  stdin: Element;
  inputElement: HTMLInputElement;
  inputText: string;
  recordInputText: string[];
  recordInputTextNum: number;
  displayString: string;
  constructor(rootDiv: Element) {
    this.rootDiv = rootDiv;
    this.stdout = <Element>this.rootDiv.querySelector('.stdout');
    this.stdin = <Element>this.rootDiv.querySelector('.stdin');
    this.inputElement = <HTMLInputElement>this.stdin.querySelector('.stdinInput');
    this.inputText = '';
    this.displayString = '';
    this.recordInputText = [];
    this.recordInputTextNum = 0;
  }
  getEnter(): void {
    this.inputText = this.inputElement.value;
    console.log(this.inputText);
    this.recordInputText.push(this.inputElement.value);
    this.recordInputTextNum = this.recordInputText.length;
    this.inputElement.value = '';
    this.displayString = filesystem.getInput(this.inputText);
    this.addStdin();
  }
  getArrow(action: 'up' | 'down'): void {
    let focuseNum: number;
    function add(this: Terminal): number {
      if (this.recordInputTextNum < this.recordInputText.length - 1) {
        this.recordInputTextNum++;
      }
      return this.recordInputTextNum;
    }
    function reduce(this: Terminal): number {
      if (this.recordInputTextNum > 0) {
        this.recordInputTextNum--;
      }
      return this.recordInputTextNum;
    }
    if (this.recordInputText.length === 0) {
      return;
    }
    if (action === 'up') {
      this.inputElement.value = this.recordInputText[reduce.bind(this)()];
    } else {
      if (this.recordInputTextNum !== this.recordInputText.length) {
        this.inputElement.value = this.recordInputText[add.bind(this)()];
      }
    }
    // focuseNum = this.recordInputText[this.recordInputTextNum].length - 1;
    // this.inputElement.focus();
    // this.inputElement.setSelectionRange(focuseNum, focuseNum);
  }
  addStdin(): void {
    if (this.displayString === '0') {
      this.displayString = '';
    } else {
      this.displayString = `<div>${this.displayString}</div><br/>`;
    }
    this.stdout.innerHTML = `${this.stdout.innerHTML}
    <div>[root@MaxJ ~]  ${this.inputText}</div>
    ${this.displayString}`;
  }
  addListener(): void {
    this.inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.getEnter();
      }
      if (e.key === 'ArrowDown') {
        this.getArrow('down');
      }
      if (e.key === 'ArrowUp') {
        this.getArrow('up');
      }
    })
  }
  initial(): void {
    this.addListener();
  }
}
