import calculateNewVelocity from "./calculateNewVelocity.js";
import remainingFuelCalculation from "./remainingFuelCalculation.js";
import newDistanceCalculation from "./newDistanceCalculation.js";

// Props of the given parameters
const props = {
  velocity: {
    velocityValue: 10000,
    velocityUnits: "km/h",
  },
  acceleration: {
    accelerationValue: 3,
    accelerationUnits: "m/s^2",
  },
  distance: {
    distanceValue: 0,
    distanceUnits: "km",
  },
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
  },
};

const newVelocity = calculateNewVelocity(props); //calculates new velocity based on acceleration and time
const newDistance = newDistanceCalculation(props); //calculates new distance based on velocity and time trravelled
const remainingFuel = remainingFuelCalculation(props); //calculates fuel used based on distance travelled and the fuel burn rate

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
