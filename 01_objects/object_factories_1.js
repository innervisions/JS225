function makeCar(rate, brakingRate) {
  return {
    speed: 0,
    rate,
    breakingRate,

    accelerate() {
      this.speed += this.rate;
    },

    brake() {
      this.speed -= this.breakingRate;
      if (this.speed < 0) this.speed = 0;
    },
  };
}
