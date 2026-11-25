# BMI Calculator

This is my final project for CMPS 510, Principles and Concepts of Software Engineering.

I chose a BMI calculator because I wanted to make a simple web page that works on a computer or phone. Enter your weight in kilograms and your height in meters to see your BMI and its adult category. If a measurement is invalid, the page shows what to correct. The calculator runs in your browser and does not save your measurements.

## Run it locally

1. If your browser allows local files, open `index.html`. In a managed browser, run this command from the project folder and open `http://127.0.0.1:8000/`:

   ```sh
   python3 -m http.server 8000 --bind 127.0.0.1
   ```
2. Enter **70 kg** and **1.75 m**. Select **Calculate BMI** to see **22.9 · Healthy weight**.
3. Change the height to **0** and select **Calculate BMI** again to see the validation message.

![Calculator showing a BMI of 22.9 with the Healthy weight category](docs/screenshot.png)

## Project report

[Short report with five user stories and a diagram (PDF)](docs/bmi-report.pdf)

## Tools and sources

- HTML, CSS, and JavaScript build the page. The app uses no external libraries.
- Chromium and Playwright were used for local browser checks. ReportLab was used to make the PDF.
- I used OpenAI Codex to help build, test, and document my project.
- The adult category thresholds come from the [CDC Adult BMI Calculator](https://www.cdc.gov/bmi/adult-calculator/).
