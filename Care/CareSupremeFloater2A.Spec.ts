import { test, expect } from '@playwright/test';
import path from 'path';

test('Floater 2A', async ({ page, isMobile }) => {
  await page.goto('https://vizzainsurance.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '   POS Login' }).click();
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('9962907312');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin1');
  await page.locator('#main-content').getByRole('button', { name: 'Login' }).click();
  
  if (isMobile) {
    await page.waitForTimeout(4000);
    await page.getByRole('button').filter({ hasText: 'menu' }).click();
    await page.locator('a').filter({ hasText: 'Health Insurance' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Name' }).fill('Care Test');
  await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#mat-input-25').type('40');
  await page.locator('#mat-input-27').type('40');
  await page.locator('#mat-input-29').type('15');
  await page.locator('#mat-input-31').type('10');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: '₹16235 /Yr' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();

  } else {
    await page.waitForTimeout(2000); 
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.waitForTimeout(1000);
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();
    await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
  
  await page.waitForTimeout(7000);
  
  await page.getByRole('textbox', { name: 'Name' }).fill('Care Test');
  await page.getByRole('textbox', { name: 'Email' }).fill('Care@gmail.com');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-17').fill('40');
  await page.locator('#mat-input-19').fill('40');
  await page.locator('#mat-input-21').fill('15');
  await page.locator('#mat-input-23').fill('10');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600010');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: '₹ 16235/Yr' }).click();

  await page.getByRole('button', { name: 'Ok' }).click();

  }

  await page.getByText('Other', { exact: true }).click();
  await page.getByLabel('Identity Proof Type').getByText('Identity Proof Type').click();
  await page.getByText('PAN', { exact: true }).click();
  await page.getByText('Address Proof TypeAddress').click();
  await page.getByText('Voter ID').click();
  
  // Setup file path for uploads
  const uploadFile = path.join(__dirname, '../assets/Arunkumar.jpg');
  
  // Upload Identity Proof
  for (let i = 0; i < 2; i++) {
    const fileInput = await page.locator('input[type="file"]').nth(i);
    // if (isMobile) await fileInput.scrollIntoViewIfNeeded();
    await fileInput.setInputFiles(uploadFile);
    await page.waitForTimeout(isMobile ? 2000 : 1000);
  }
  
  // Mobile-specific handling for buttons
  const submitButton = page.getByRole('button', { name: 'Submit' });
//   if (isMobile) await submitButton.scrollIntoViewIfNeeded();
  await submitButton.click();

  await page.locator('#mat-select-value-31').getByText('Title').click();
  await page.getByText('Mr', { exact: true }).click();
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Last Name *').fill('W');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').type('09121999');
  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Email ID *').fill('test@gmail.com');

  await page.getByRole('tabpanel', { name: 'PROPOSER DETAILS' }).getByLabel('Mobile Number *').fill('8531913067');
  await page.locator('#mat-input-32').fill('3');
  await page.locator('#mat-input-33').fill('4');
  await page.locator('#mat-input-34').fill('600010');
  await page.waitForTimeout(1000);
  await page.locator('#mat-select-value-23').getByText('City').click();
  await page.waitForTimeout(2000);
  await page.getByText('Chennai').click();
  
  // Mobile-specific checkbox handling
  const checkbox = page.locator('.mat-checkbox-inner-container').first();
  if (isMobile) await checkbox.scrollIntoViewIfNeeded();
  await checkbox.click();
  
  await page.locator('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  await page.locator('#cdk-accordion-child-17').getByRole('button', { name: 'Next' }).click();
  await page.getByRole('strong').click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('170');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('70');
  await page.getByRole('button', { name: 'SPOUSE DETAILS' }).click();
  await page.locator('#cdk-accordion-child-24').getByText('TitleTitle *').click();
  await page.getByText('Ms', { exact: true }).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Last Name *').fill('Spouse');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09121985');
  await page.locator('#cdk-accordion-child-24').getByText('Relationship with ProposerRelationship with Proposer *').click();
  await page.getByText('SPOUSE', { exact: true }).click();
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Email ID *').fill('freedela@gmail.com');
  await page.getByRole('region', { name: 'SPOUSE DETAILS' }).getByLabel('Mobile Number *').fill('8531913068');
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('160');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('60');
  await page.getByRole('button', { name: 'SON DETAILS' }).click();
  await page.locator('#cdk-accordion-child-25').getByText('TitleTitle *').click();
  await page.getByRole('option', { name: 'Mr' }).locator('span').click();
 
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('Last Name *').fill('Son');
  await page.getByRole('region', { name: 'SON DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122010');
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('SON', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
  await page.getByRole('button', { name: 'DAUGHTER DETAILS' }).click();
  await page.locator('#cdk-accordion-child-26 div').filter({ hasText: /^TitleTitle \*$/ }).nth(1).click();
  await page.getByRole('option', { name: 'Ms' }).locator('span').click();
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('First Name *').fill('Test');
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('Last Name *').fill('Daughter');
  await page.getByRole('region', { name: 'DAUGHTER DETAILS' }).getByLabel('DOB (DD/MM/YYYY) *').fill('09122015');
  await page.getByRole('combobox', { name: 'Relationship with Proposer' }).locator('span').click();
  await page.getByText('DAUGHTER', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Height(Cm)' }).fill('150');
  await page.getByRole('textbox', { name: 'Weight(Kg)' }).fill('50');
  await page.locator('#cdk-accordion-child-26').getByRole('button', { name: 'Next' }).click();
  await page.locator('#cdk-accordion-child-18').getByRole('button', { name: 'Next' }).click();

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