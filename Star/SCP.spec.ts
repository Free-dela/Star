import { test, expect } from '@playwright/test';
import path from 'path';
import readline from 'readline';

test('SCP', async ({ page }) => {
  // Initial navigation and login
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  
  await page.waitForTimeout(2000); 
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
  await page.waitForTimeout(1000);
  await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  await page.waitForTimeout(2000);

  const nameInput = page.getByRole('textbox', { name: 'Name' });
  await nameInput.waitFor({ state: 'visible', timeout: 45000 });
  await nameInput.fill('Test');
  
  const emailInput = page.getByRole('textbox', { name: 'email' });
  await emailInput.waitFor({ state: 'visible' });
  await emailInput.fill('Free@gmail.com');
  
  const phoneInput = page.getByRole('textbox', { name: 'phone Number' });
  await phoneInput.waitFor({ state: 'visible' });
  await phoneInput.fill('8531913069');
  
  const nextButton = page.getByRole('button', { name: 'Next' });
  await nextButton.waitFor({ state: 'visible' });
  await nextButton.click();

  await page.locator('#mat-input-17').type('25');
  await page.locator('#mat-input-19').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
 
  await page.waitForSelector('button:has-text("₹ 14904/Yr")');
  await page.getByRole('button', { name: '₹ 14904/Yr' }).click();
  
  // Add explicit wait before interacting with title dropdown
  await page.waitForTimeout(2000);

  const titleCombobox = page.getByRole('combobox', { name: 'Title Title' });
  await titleCombobox.waitFor({ state: 'visible' });
  await titleCombobox.locator('span').click();
  
  // Wait for dropdown options to be visible
  await page.waitForTimeout(1000);
  const msOption = page.getByText('Ms', { exact: true });
  await msOption.waitFor({ state: 'visible' });
  await msOption.click();
  
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
  await page.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
  await page.getByText('Chennai').click();
  await page.waitForTimeout(2000);
  await page.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
  await page.getByText('Perambur Barracks').click();
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
  
  // Fix radio button click by using the label instead of the circle
  await page.waitForTimeout(2000);
  await page.locator('#mat-radio-64').click();
  
  await page.getByRole('textbox', { name: 'PAN Number' }).fill('gjkpm0846p');
  await page.getByRole('button', { name: 'Submit' }).click();
 
  const imagePath = path.join(__dirname, '../assets/Arunkumar.jpg');
  
  const fileInput = await page.locator('input[type="file"]').first();
  await fileInput.setInputFiles(imagePath);

  const fileInput1 = await page.locator('input[type="file"]').nth(1);
  await fileInput1.setInputFiles(imagePath);

  const fileInput2 = await page.locator('input[type="file"]').nth(2);
  await fileInput2.setInputFiles(imagePath);

  await page.locator('#mat-checkbox-17').click();

  await page.locator('span.mat-button-wrapper:has-text("Submit")').click();

  await page.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
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
  
  // Add small delay before next actions
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Copy Link' }).click();
  await page.getByRole('button', { name: 'Pay by Customer' }).click();
});
