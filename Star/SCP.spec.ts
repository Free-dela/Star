import { test, expect } from '@playwright/test';
import readline from 'readline';

test('SCP', async ({ page }) => {
  // Initial navigation and login
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  
  // Navigate to Health Insurance section with better waits
  await page.waitForLoadState('networkidle');
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  await page.waitForTimeout(1000); // Small delay after hover
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  
  // Wait for page load and form visibility
  await page.waitForLoadState('networkidle');
  
  // Fill in initial form with proper waits
  await page.getByRole('textbox', { name: 'Name' }).fill('Test');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'email' }).type('Free@gmail.com');
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'phone Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-17').type('25');
  await page.locator('#mat-input-19').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
 
  await page.waitForSelector('#mat-select-value-5');
  await page.locator('#mat-select-value-5').getByText('(+5 others)').click();
  await page.getByText('Star Health', { exact: true }).click();
  await page.waitForSelector('button:has-text("₹ 14904/Yr")');
  await page.getByRole('button', { name: '₹ 14904/Yr' }).click();
  await page.getByRole('combobox', { name: 'Title Title' }).locator('span').click();
  await page.getByText('Ms', { exact: true }).click();
  await page.getByRole('textbox', { name: 'First Name' }).type('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).type('W');
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
  await page.getByRole('textbox', { name: 'PAN Number' }).fill('gjkpm0846p');
  await page.getByRole('button', { name: 'Submit' }).click();
 
  const imagePath = 'C:/Users/Tecdata/Desktop/IntegrationScripts/assets/Arunkumar.jpg';

  const fileInput = await page.locator('input[type="file"]').first();
  await fileInput.setInputFiles(imagePath);

  const fileInput1 = await page.locator('input[type="file"]').nth(1);
  await fileInput1.setInputFiles(imagePath);

  const fileInput2 = await page.locator('input[type="file"]').nth(2);
  await fileInput2.setInputFiles(imagePath);

  await page.locator('span.mat-button-wrapper:has-text("Submit")').click();

  await page.locator('#mat-checkbox-12 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
  await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
  await page.locator('#mat-radio-27 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click();
  await page.getByRole('textbox', { name: 'Pregnancy Due Date (DD/MM/' }).click();
  await page.getByRole('textbox', { name: 'Pregnancy Due Date (DD/MM/' }).fill('09/06/2025');
  await page.getByRole('button', { name: '1.INSURED DETAILS' }).click();
  await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).type('Test H');
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  await page.getByRole('combobox', { name: 'Gender Gender' }).locator('span').click();
  await page.getByRole('option', { name: 'Female' }).locator('span').click();
  await page.getByRole('textbox', { name: 'Height(cms)' }).click();
  await page.getByRole('textbox', { name: 'Height(cms)' }).fill('160');
  await page.getByRole('textbox', { name: 'Weight(kgs)' }).click();
  await page.getByRole('textbox', { name: 'Weight(kgs)' }).fill('60');
  await page.getByRole('combobox', { name: 'Occupation Occupation' }).locator('span').click();
  await page.getByText('Housewives').click();
  await page.getByLabel('2INSURED DETAILS').getByText('Relationship with ProposerRelationship with Proposer *').click();
  await page.getByText('SPOUSE', { exact: true }).click();
  await page.getByLabel('2INSURED DETAILS').getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('3NOMINEE DETAILS').locator('div').filter({ hasText: /^Name of Nominee$/ }).nth(3).click();
  await page.locator('#mat-input-78').press('CapsLock');
  await page.locator('#mat-input-78').fill('N');
  await page.locator('#mat-input-78').press('CapsLock');
  await page.locator('#mat-input-78').fill('Nominee');
  await page.locator('#mat-input-79').click();
  await page.locator('#mat-input-79').fill('25');
  await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
  await page.getByText('Sister').click();
  await page.getByLabel('3NOMINEE DETAILS').locator('div').filter({ hasText: /^% Of the Claim$/ }).nth(3).click();
  await page.locator('#mat-input-80').fill('100');
  await page.waitForTimeout(10000);
  await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
  
  // Add explicit wait for checkbox visibility
  await page.waitForSelector('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container', { state: 'visible', timeout: 30000 });
  await page.locator('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  
  // Add small delay before next actions
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Copy Link' }).click();
  await page.getByRole('button', { name: 'Pay by Customer' }).click();
});
