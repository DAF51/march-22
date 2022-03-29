class StopWatch {
  #startTime 
  #endTime 
  #duration 
  #running

  constructor() {
    this.#startTime =0
    this.#endTime = 0
    this.#duration = 0
    this.#running = 0
  }
  
  start() {
    if(this.#running)
      throw console.error("The timer is already running")
    else {
      this.#running = true
      this.#startTime = new Date()
      return
    }
  }

  stop() {
    if(!this.#running){
      throw console.error("The timer is already stopped")
    } else {
      this.#running =false
      this.#endTime = new Date()
      //You divide seconds by 1000, because it's going to return miliseconds
      const seconds = ((this.#endTime.getTime() - this.#startTime.getTime())/1000)
      this.#duration += seconds
      return this.#duration
    }
  }

  reset() {
    this.#startTime = null;
    this.#endTime = null;
    this.#running = false;
    this.#duration = 0;
  }

  get duration(){
    return this.#duration
  }

  
}

let sw = new StopWatch

