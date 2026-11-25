# Presentation and publishing guide

## How the calculator works

**HTML** creates the form and the area where the result appears. Each field has a label with its unit.

**CSS** controls colors, spacing, and layout. On a narrow phone screen, the two fields appear one above the other.

**JavaScript** runs when the user submits the form. It reads the two numbers and checks them. The calculator accepts weights from 1 to 700 kg and heights from 0.5 to 3 m. These limits are a design choice to catch typing mistakes, such as entering height in centimeters.

When both values are valid, JavaScript divides the weight by the height squared. For 70 kg and 1.75 m, the calculation is 70 ÷ (1.75 × 1.75). The page shows 22.9 and Healthy weight. It uses the original number to choose the category and rounds the number only for display.

When a value is invalid, the page clears the old result, shows a message near the field, and moves the cursor to the first field that needs a correction.

## A short demo to practise

1. Enter 70 kg and 1.75 m. Select **Calculate BMI** and explain the result.
2. Enter 175 for height and calculate again. Point to the message and explain that the field uses meters.
3. Correct the height to 1.75 and press Enter. Show that the normal result returns.
4. Explain that adult BMI is a screening measure and that a full health assessment needs more information.

## Publish with GitHub Pages

1. Add the completed workspace files to the `main` branch of the GitHub repository. Include `index.html`, `style.css`, `script.js`, `README.md`, and the files in `docs/`. Keep `index.html` at the repository root.
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/ (root)**, then save.
3. Wait for deployment to finish. Open the address shown in **Settings → Pages** in a private browser window. Try the sample calculation, one invalid input, and a narrow window.
4. Add `docs/bmi-report.pdf` to the end of the live site address and open it in the same private window. Check that the PDF opens without signing in. Open the repository link there too.
5. Paste the verified website, repository, and report links into the **Final Project** tab on the course site.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
