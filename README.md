# BMI Calculator

This is my final project for CMPS 510, Principles and Concepts of Software Engineering.

I chose a BMI calculator because I wanted to make a simple web page that works on a computer or phone. Choose **Metric** for kilograms and meters or **Imperial** for pounds, feet, and inches. The calculator shows your BMI and its adult category. If a measurement is invalid, the page shows what to correct. The calculator runs in your browser and does not save your measurements.

## Try the calculator

[Open the calculator on GitHub Pages](https://ferll2712.github.io/BMI-calculator/)

1. Choose a measurement system above the form. **Metric** uses kilograms and meters. **Imperial** uses pounds, whole feet, and any extra inches. Enter **0** in the inches field if your height is an exact number of feet.
2. Enter your measurements and select **Calculate BMI**. For example, **70 kg** and **1.75 m** gives **22.9**. In Imperial mode, **154 lb**, **5 ft**, and **9 in** gives **22.7**. Both examples are in the Healthy weight category.
3. If you change systems, enter your measurements again. The page clears the old values and result so you do not mix units.

![The Imperial tab selected, with 154 lb, 5 ft, and 9 in entered and a BMI result of 22.7](docs/screenshot.png)

## Project report

[Short report with five user stories and a diagram (PDF)](docs/bmi-report.pdf)

## Tools and sources

- HTML, CSS, and JavaScript build the page. The app uses no external libraries.
- Chromium and Playwright were used for local browser checks. ReportLab was used to make the PDF.
- I used OpenAI Codex to help build, test, and document my project.
- The adult category thresholds come from the [CDC Adult BMI Calculator](https://www.cdc.gov/bmi/adult-calculator/).
