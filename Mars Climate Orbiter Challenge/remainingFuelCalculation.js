/** The function remainingFuelCalculation calculates the fuel the Mars Climate Orbiter
 * has burned over the distance it has travelled. It checks if the varibles have the 
 * correct units else it throws an error to ensure that the correct results are obtained. 
 * 
 * @param {object} props 
 * @param {object} props.fuel
 * @param {object} props.fuelBurnRate
 * @param {object} props.time
 * @param {number} props.fuel.fuelValue
 * @param {string} props.fuel.fuelUnits
 * @param {number} props.fuelBurnRate.fuelBurnRateValue
 * @param {string} props.fuelBurnRate.fuelBurnRateUnits
 * @param {number} props.time.timeValue
 * @param {string} props.time.timeUnits
 * @returns {number}
 */

const remainingFuelCalculation = (props) => {
    const { fuel, fuelBurnRate, time} = props;
    const { fuelValue, fuelUnits} = fuel;
    const { fuelBurnRateValue, fuelBurnRateUnits} = fuelBurnRate;
    const {timeValue, timeUnits} = time;

    if (timeUnits !== 's') throw new Error('Time units should be "s"')
    if (fuelUnits !== 'kg') throw new Error('Fuel units should be "kg"')
    if (fuelBurnRateUnits !== 'kg/s') throw new Error ('Fuel burn rateshould be in "kg/s"')

    return fuelValue - fuelBurnRateValue * timeValue;
}

export default remainingFuelCalculation;