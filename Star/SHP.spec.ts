import { test, expect } from '@playwright/test';
import readline from 'readline';

test('SHP', async ({ page }) => {
  
    await page.goto('https://vizzainsurance.com/home');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: '   POS Login' }).click();
    await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
    await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('textbox', { name: 'Name' }).type('Test');
  await page.getByRole('textbox', { name: 'email' }).type('Free@gmail.com');
  await page.getByRole('textbox', { name: 'phone Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-17').type('25');
  await page.locator('#mat-input-19').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
    
    await page.waitForSelector('#mat-select-value-5');
    await page.locator('#mat-select-value-5').click();
    await page.waitForSelector('mat-option:has-text("Star Health")');
    await page.getByText('Star Health', { exact: true }).click();
    await page.getByRole('button', { name: '₹ 12930/Yr' }).click();
    await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
    await page.getByText('Mr', { exact: true }).click();
    await page.getByRole('textbox', { name: 'First Name' }).type('Test');
    await page.getByRole('textbox', { name: 'Last Name' }).type('AA');
    await page.getByLabel('1PROPOSER DETAILS').getByText('OccupationOccupation *').click();
    await page.getByText('PROFESSIONAL-ENGINEER').click();
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
    await page.getByLabel('1PROPOSER DETAILS').locator('div').filter({ hasText: /^Email ID \*$/ }).nth(3).click();
    await page.getByRole('textbox', { name: 'Email ID' }).fill('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Mobile Number' }).type('8531913069');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 1 *').type('2A');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Address 2 *').type('Star Assure');
    await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Pincode *').type('600012');
    await page.waitForTimeout(2000);
  await page.waitForSelector('#mat-select-value-33');
  await page.locator('#mat-select-value-33').click();
  await page.waitForSelector('span.mat-option-text:has-text("Chennai")');
  await page.locator('span.mat-option-text:has-text("Chennai")').click();
  await page.waitForTimeout(2000);
  await page.waitForSelector('#mat-select-value-35');
  await page.locator('#mat-select-value-35').click();
  await page.waitForSelector('span.mat-option-text:has-text("K Block Pattalam")');
  await page.locator('span.mat-option-text:has-text("K Block Pattalam")').click();
    await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
    await page.locator('#mat-radio-64 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
    await page.getByRole('textbox', { name: 'PAN Number' }).type('gjkpm0846p');
    await page.getByRole('button', { name: 'Submit' }).click();
   
    const imagePath = 'C:/Users/Tecdata/Desktop/IntegrationScripts/assets/Arunkumar.jpg';

    const fileInput = await page.locator('input[type="file"]').first();
    await fileInput.setInputFiles(imagePath);

    const fileInput1 = await page.locator('input[type="file"]').nth(1);
    await fileInput1.setInputFiles(imagePath);

    const fileInput2 = await page.locator('input[type="file"]').nth(2);
    await fileInput2.setInputFiles(imagePath);

    await page.locator('span.mat-button-wrapper:has-text("Submit")').click();

    await page.waitForSelector('#mat-checkbox-12');
    await page.locator('#mat-checkbox-12 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
    await page.getByRole('button', { name: '1.INSURED DETAILS' }).click();
    await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
    await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test aa');
    await page.getByLabel('2.INSURED DETAILS').locator('div').filter({ hasText: /^DOB \(DD\/MM\/YYYY\) \*$/ }).nth(3).click();
    await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
    await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
    await page.getByText('Female').click();
    await page.getByLabel('2.INSURED DETAILS').locator('div').filter({ hasText: /^Height\(cms\) \*$/ }).nth(3).click();
    await page.getByRole('textbox', { name: 'Height(cms)' }).fill('160');
    await page.getByLabel('2.INSURED DETAILS').locator('div').filter({ hasText: /^Weight\(kgs\) \*$/ }).nth(3).click();
    await page.getByRole('textbox', { name: 'Weight(kgs)' }).fill('60');
    await page.getByLabel('2INSURED DETAILS').getByText('OccupationOccupation *').click();
    await page.getByText('HOUSEWIVES').click();
    await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
    await page.getByText('SPOUSE', { exact: true }).click();
    await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
    await page.locator('#mat-input-78').click();
    await page.locator('#mat-input-78').fill('Nominee');
    await page.locator('#mat-input-79').click();
    await page.locator('#mat-input-79').fill('25');
    await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
    await page.getByText('Brother', { exact: true }).click();
    await page.locator('#mat-input-80').click();
    await page.locator('#mat-input-80').fill('100');
    await page.waitForTimeout(4000);
    await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
  
    await expect(page.getByRole('heading', { name: 'PROPOSER DETAILS' })).toBeVisible({ timeout: 30000 });
    await expect(page.getByLabel('4SUMMARY').locator('label')).toContainText('I hereby declare all the details provided above are correct');
    await page.locator('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    await page.getByRole('button', { name: 'Copy Link' }).click();
    await page.getByRole('button', { name: 'Pay by Customer' }).click();
  });
