const ACCELERATION_CONVERTION_FACTOR = 12960; // converts m/s^2 to km/h^2 (km/h^2 * s^2/m)
const TIME_CONVERTION_FACTOR = 3600 // converts seconds to hours

/** The function calculateNewVelocity calculates the velocity the Mars Climate 
 * Orbiter is travelling in at a certain time and when it has a given acceleration. The
 * velocity that the is travelling in is measured in 'km/h'. The function ensures that parameters have 
 * the correct units.
 * 
 * @param {object} props 
 * @param {object} props.velocity
 * @param {object} props.acceleration
 * @param {object} props.time
 * @param {number} props.velocity.velocityValue
 * @param {string} props.velocity.velocityUnits
 * @param {number} props.acceleration.accelerationValue
 * @param {string} props.acceleration.accelerationUnits
 * @param {number} props.time.timeValue
 * @param {string} props.time.timeUnits
 * @returns {number}
 */

const calculateNewVelocity = (props) => {
    const { velocity, acceleration, time } = props;
    const { velocityValue, velocityUnits } = velocity;
    let { accelerationValue, accelerationUnits } = acceleration;
    let { timeValue, timeUnits } = time;

    try {
        if (velocityUnits !== 'km/h') throw new Error('Velocity units should be "km/h"')
        
        if (accelerationUnits === 'm/s^2') {
            accelerationValue *=  ACCELERATION_CONVERTION_FACTOR;
        } else {
            throw new Error('Acceleration units should be "m/s^2"');
        }
        
        if (timeUnits === 's') {
            timeValue /= TIME_CONVERTION_FACTOR;
        } else {
            throw new Error('Time units should be "s"')
        }
    } catch (error) {
        console.error(error.stack);
    }
    return velocityValue + (accelerationValue * timeValue);
}

export default calculateNewVelocity;