import { test, expect } from '@playwright/test';
import path from 'path';

test('Individual', async ({ page, isMobile }) => {
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  
  if (isMobile) {
    await page.waitForTimeout(4000);
    await page.getByRole('button').filter({ hasText: 'menu' }).click();
    await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('textbox', { name: 'Name' }).type('Care');
    await page.getByRole('textbox', { name: 'Email' }).type('Care@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-input-25').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).fill('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: '₹7552 /Yr' }).click();


  } else {
    await page.waitForTimeout(2000); 
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.waitForTimeout(1000);
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  await page.waitForTimeout(7000);

  // Form filling with mobile considerations
  await page.getByRole('textbox', { name: 'Email' }).type('Care@gmail.com');
  await page.getByRole('textbox', { name: 'Name' }).type('Care Test');

  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-17').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();

  await page.getByRole('button', { name: '₹ 7552/Yr' }).click();
  }


  if (isMobile) {
    await page.evaluate(() => window.scrollTo(0, 0)); // Scroll to top for dropdown visibility
  }

  await page.waitForTimeout(3000);
  await page.getByText('Other', { exact: true }).click();
  await page.getByLabel('Identity Proof Type').getByText('Identity Proof Type').click();
  await page.getByText('PAN', { exact: true }).click();
  await page.getByText('Address Proof TypeAddress').click();
  await page.getByText('Voter ID').click();
  
  // Mobile-specific file upload handling
  const uploadFile = path.join(__dirname, '../assets/Arunkumar.jpg');
  
  for (let i = 0; i < 2; i++) {
    const fileInput = await page.locator('input[type="file"]').nth(i);
    // if (isMobile) await fileInput.scrollIntoViewIfNeeded();
    await fileInput.setInputFiles(uploadFile);
    // await page.waitForTimeout(isMobile ? 2000 : 1000);
  }

  // Mobile-specific button handling
  const submitButton = page.getByRole('button', { name: 'Submit' });
//   if (isMobile) await submitButton.scrollIntoViewIfNeeded();
  await submitButton.click();
  
  await page.locator('#cdk-accordion-child-17').getByText('TitleTitle *').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('test');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('s');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('08062002');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('free@gmail.com');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.locator('#mat-input-32').fill('34');
  await page.locator('#mat-input-33').fill('anna nagar ');
  await page.locator('#mat-input-34').fill('627005');
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-value-23').getByText('City').click();
  await page.waitForTimeout(2000);
  await page.getByText('Palayamkottai').click();

  // Mobile-specific checkbox handling
  const checkbox = page.locator('.mat-checkbox-inner-container').first();
  if (isMobile) await checkbox.scrollIntoViewIfNeeded();
  await checkbox.click();

  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();

  await page.getByRole('strong').click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
  await page.locator('#cdk-accordion-child-23 div').filter({ hasText: /^Weight\(Kg\) \*$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');

  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(1).click();
  await page.locator('span.mat-button-wrapper:has-text("Next")').nth(2).click();

  await page.getByRole('textbox', { name: 'Name of Nominee' }).type('nominee');
  await page.getByRole('combobox', { name: 'Relationship with Insured' }).locator('div').nth(3).click();
  await page.getByText('MOTHER', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Bank Account No' }).fill('237200021786');
  await page.getByRole('textbox', { name: 'IFSC Code' }).fill('IOBA0002345');
  await page.locator('#cdk-accordion-child-19').getByRole('button', { name: 'Next' }).click();

  // Enhanced mobile button handling for final submission
  const copyLinkButton = page.getByRole('button', { name: 'Copy Link' });
  if (isMobile) await copyLinkButton.scrollIntoViewIfNeeded();
  await copyLinkButton.click();
  
  const payButton = page.getByRole('button', { name: 'Pay by Customer' });
  if (isMobile) await payButton.scrollIntoViewIfNeeded();
  await payButton.click();
});