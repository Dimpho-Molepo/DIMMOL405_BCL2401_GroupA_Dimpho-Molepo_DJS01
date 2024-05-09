const TIME_CONVERTION_FACTOR = 3600 // converts seconds to hours

/** The function newDistanceCalculation calculates the distance the Mars Climate 
 * Orbiter has travelled in a certain time and when it has a given velocity. The
 * distance covered is measured in 'km'. The function ensures that parameters have 
 * the correct units.
 * 
 * @param {object} props 
 * @param {object} props.velocity
 * @param {object} props.distance
 * @param {object} props.time
 * @param {number} props.velocity.velocityValue
 * @param {string} props.velocity.velocityUnits
 * @param {number} props.distance.distanceValue
 * @param {string} props.distance.distanceUnits
 * @param {number} props.time.timeValue
 * @param {string} props.time.timeUnits
 * @returns {number}
 */

const newDistanceCalculation = (props) => {
    const { distance, velocity, time } = props;
    const { distanceValue,  distanceUnits} = distance;
    const { velocityValue, velocityUnits } = velocity;
    let { timeValue, timeUnits } = time;

    if (velocityUnits !== 'km/h') throw new Error('Velocity units should be "km/h"')
    if (distanceUnits !== 'km') throw new Error('Distance units should be "km"')
    if (timeUnits !== 's') {
        throw new Error('Time units should be "s"');
    } else{
        timeValue /= TIME_CONVERTION_FACTOR;
    }

    return distanceValue + velocityValue * timeValue;
}

export default newDistanceCalculation;