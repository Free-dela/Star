import { test, expect } from '@playwright/test';
const path = require('path');

test('ICICI Elevate', async ({ page }) => {

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
  await page.waitForTimeout(5000);
  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  await page.waitForLoadState('networkidle');
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
    
  await page.locator('#mat-input-17').click();
  await page.locator('#mat-input-17').fill('25');
  await page.locator('#mat-input-19').click();
  await page.locator('#mat-input-19').fill('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).click();
  await page.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
  
  await page.getByRole('button', { name: '₹ 9514/Yr' }).click();
  await page.waitForTimeout(2000);

  await page.getByText('OVD Upload').click();
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('freedela0912@gmail.com');
  await page.locator('div').filter({ hasText: /^Mobile No \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Mobile No *' }).fill('8531913066');
  await page.getByLabel('Address Proof *').getByText('Address Proof *').click();
  await page.getByText('AADHAAR').click();

  const imagePath = path.join(__dirname, '../assets/Arunkumar.jpg');
  
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Choose File' }).click()
  ]);
  await fileChooser.setFiles(imagePath);

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(2000);

  await page.getByLabel('1PROPOSER DETAILS').getByText('Title *Title *').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('icici');
  await page.getByLabel('1PROPOSER DETAILS').getByLabel('Gender *').getByText('Gender *').click();
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('freedela0912@gmail.com');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913066');
  await page.locator('div').filter({ hasText: /^Annual Income \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Annual Income *' }).fill('300000');
  await page.getByLabel('1PROPOSER DETAILS').getByLabel('Occupation *').getByText('Occupation *').click();
  await page.getByText('Administrator').click();
  await page.getByRole('textbox', { name: 'Address 1 *' }).click();
  await page.getByRole('textbox', { name: 'Address 1 *' }).fill('23');
  await page.getByRole('textbox', { name: 'PIN Code *' }).click();
  await page.getByRole('textbox', { name: 'PIN Code *' }).fill('600012');
  await page.getByRole('textbox', { name: 'State' }).click();
  await page.waitForTimeout(2000);

  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();
  await page.waitForTimeout(2000);

  await page.locator('.mat-checkbox-inner-container').first().click();
  await page.getByRole('combobox', { name: 'Height(feet) * Height(feet) *' }).locator('span').click();
  await page.getByText('5', { exact: true }).click();
  await page.getByRole('combobox', { name: 'Height(inch) * Height(inch) *' }).locator('span').click();
  await page.getByRole('option', { name: '5' }).locator('span').click();
  await page.getByRole('textbox', { name: 'Weight(kg) *' }).click();
  await page.getByRole('textbox', { name: 'Weight(kg) *' }).fill('70');
  await page.waitForTimeout(1000);
  
  await page.getByRole('button', { name: '1.INSURED DETAILS' }).click();
  await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
  await page.getByLabel('2.INSURED DETAILS').getByText('Title *Title *').click();
  await page.getByText('Ms', { exact: true }).click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('First Name *').click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('Last Name *').click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('Last Name *').fill('spouse');
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121999');
  await page.getByLabel('2.INSURED DETAILS').locator('div').filter({ hasText: /^Relationship with Proposer \*Relationship with Proposer \*$/ }).first().click();
  await page.getByText('Spouse').click();
  await page.getByRole('combobox', { name: 'Occupation * Occupation *' }).locator('span').click();
  await page.getByText('Engineer (Office duties only)').click();
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
  await page.getByRole('region', { name: '2.INSURED DETAILS' }).getByLabel('Mobile Number *').fill('8531913069');
  await page.getByLabel('2.INSURED DETAILS').getByText('Height(feet) *Height(feet) *').click();
  await page.getByRole('option', { name: '5' }).first().click();
  await page.getByRole('combobox', { name: 'Height(inch) * Height(inch) *' }).locator('span').click();
  await page.getByRole('option', { name: '3' }).first().click();
  await page.getByRole('textbox', { name: 'Weight(kg) *' }).fill('60');
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(1).click();

  await page.getByRole('textbox', { name: 'Name of Nominee *' }).type('Nominee');
  await page.locator('#mat-input-63').type('09121999');
  await page.getByLabel('Relationship with Nominee *').getByText('Relationship with Nominee *').click();
  await page.getByText('Brother', { exact: true }).click();
  await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();

  await expect(page.getByLabel('4SUMMARY').locator('label')).toContainText('I hereby declare all the details provided above are correct');
  await page.getByRole('button', { name: 'Copy Link' }).click();
  await page.getByRole('button', { name: 'Pay by Customer' }).click();
});