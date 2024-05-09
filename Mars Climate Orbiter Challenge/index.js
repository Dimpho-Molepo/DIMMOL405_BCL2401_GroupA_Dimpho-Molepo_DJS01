import calculateNewVelocity from "./calculateNewVelocity.js";
import remainingFuelCalculation from "./remainingFuelCalculation.js";
import newDistanceCalculation from "./newDistanceCalculation.js";

// const newDistance = distance + velocity * (time / time); //calcultes new distance
// const remainingFuel = fuel - fuelBurnRate * time; //calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors

const newVelocity = calculateNewVelocity({
  velocity: {
    velocityValue: 10000,
    velocityUnits: "km/h",
  },
  acceleration: {
    accelerationValue: 3,
    accelerationUnits: "m/s^2",
  },
  time: {
    timeValue: 3600,
    timeUnits: "s",
  },
}); //calculates new velocity based on acceleration

const newDistance = newDistanceCalculation({
  time: {
    timeValue: 3600,
    timeUnits: "s",
  },
  distance: {
    distanceValue: 0,
    distanceUnits: "km",
  },
  velocity: {
    velocityValue: 10000,
    velocityUnits: "km/h",
  }
});

const remainingFuel = remainingFuelCalculation({
    time: {
        timeValue: 3600,
        timeUnits: "s",
      },
      fuel: {
        fuelValue: 5000,
        fuelUnits: "kg",
      },
      fuelBurnRate: {
        fuelBurnRateValue: 0.5,
        fuelBurnRateUnits: "kg/s",
      }
})


console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
