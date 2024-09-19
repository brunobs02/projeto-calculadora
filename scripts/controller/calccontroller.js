class CalcController {
  constructor() {
    this._displayCalcEl = document.querySelector("#display");
    this._dateEl = document.querySelector("#data");
    this._timeEl = document.querySelector("#hora");
    this._currentDate;
    this.initialize();
    this.initButtonsEvents();
  }

  initialize() {
    this.setDisplayDateTime();

    setInterval(() => {
      this.setDisplayDateTime();
    }, 1000);
  }

  initButtonsEvents() {
    let buttons = document.querySelectorAll("#buttons > g, #parts > g");

    buttons.forEach((btn, index) => {
      btn.addEventListener("click", (e) => {
        console.log(btn.className.baseVal.replace("btn-", ""));
      });
    });
  }

  setDisplayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString("pt-BR");
    this.displayTime = this.currentDate.toLocaleTimeString("pt-BR");
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayDate(data) {
    this._dateEl.innerHTML = data;
  }

  set displayTime(hora) {
    this._timeEl.innerHTML = hora;
  }

  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(valor) {
    this._displayCalcEl.innerHTML = valor;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(valor) {
    this._currentDate = valor;
  }
}
