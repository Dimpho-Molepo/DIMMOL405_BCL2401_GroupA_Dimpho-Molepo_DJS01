# DJS01: Mars Climate Orbiter Challenge

The Mars Climate Orbiter incident in 1999 is a stark reminder of the importance of precision in space missions, highlighting how a simple unit mismatch led to the loss of the spacecraft. This challenge seeks to simulate similar challenges in a spacecraft navigation system, emphasising the need for accuracy in calculations.

## Project Overview

In this challenge we were tasked to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

![mars](https://github.com/Dimpho-Molepo/DIMMOL405_BCL2401_GroupA_Dimpho-Molepo_DJS01/assets/136012291/0be48774-5b5d-4566-ac16-60d583ddfe08)

## Problem Areas to Address

1. **Unit Mismatch**: The provided functions fail to convert units correctly, leading to calculation inaccuracies.
2. **Parameter Misalignment**: Parameters are not handled in a way that prevents or highlights the potential for unit mismatch errors, leading to possible confusion.

## Challenges

The only way to debug and correct the provided functions is to understand the problem areas and how they are being handled.The major challenge I faced while doing this project was trying the calculations more robust to different types of unexpected errors. I created different scripts to make the code more concise and more readable and to also seperate the different calculations. The was also another small challenge which was converting the acceleration from meters per squared second to kilometer per squared hour but it was just a minor issue nothing too daunting. To resolve this challenge I initiallized a convertionFactor variable and used it to convert the acceleration from meters per squared second to kilometer per squared hour. I used object destructuring and props to make the code less redundant making it a bit easier to maintain.

## Learning Outcomes 

1. Understand the importance of unit conversions in calculations.
2. Understand the importance of parameter clarity in calculations.
3. Understand the importance of debugging and testing in calculations.
4. Refactor and correct functions to address unit mismatches and parameter misalignments.
5. Be able to make the code readability for easier debugging.
6. Understand object destructuring and the use of props to improve code readability and performance.

## Author
Dimpho Molepo