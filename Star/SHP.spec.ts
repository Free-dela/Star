import { test, expect } from '@playwright/test';
import path from 'path';
import readline from 'readline';

test('SHP', async ({ page, isMobile }) => {
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
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Name' }).type('test ');
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-25').type('25');
  await page.locator('#mat-input-27').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('button', { name: '₹12930 /Yr' }).click();

  } else {
    await page.waitForTimeout(2000); 
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').hover();
    await page.waitForTimeout(1000);
    await page.locator('span.horizontal-menu-title:has-text("Online Insurance")').click();

  await page.getByRole('link', { name: 'Health Insurance', exact: true }).click();
await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Name' }).type('test ');
    await page.getByRole('textbox', { name: 'Email' }).type('freedela0912@gmail.com');
    await page.getByRole('textbox', { name: 'Mobile Number' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('8531913069');
    await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#mat-input-17').type('25');
  await page.locator('#mat-input-19').type('25');
  await page.getByRole('textbox', { name: 'PIN CODE' }).type('600012');
  await page.getByRole('button', { name: 'Proceed' }).click();
     await page.getByRole('button', { name: '₹ 12930/Yr' }).click();

  }  
      if (isMobile) {
           await page.evaluate(() => window.scrollTo(0, 0)); 
           // Scroll to top for better dropdown visibility
      }

      await page.waitForTimeout(5000);
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
      await page.getByLabel('1PROPOSER DETAILS').getByLabel('City *').getByText('City').click();
      await page.getByText('Chennai').click();
      await page.waitForTimeout(2000);
      await page.getByLabel('1PROPOSER DETAILS').getByLabel('Area *').getByText('Area').click();
      await page.getByText('Perambur Barracks').click();



      const currentDate = new Date();
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

      await page.locator('#mat-input-51').type(formattedDate);

      await page.waitForTimeout(2000);


      await page.locator('span.mat-button-wrapper:has-text("Next")').nth(0).click();

      const radioButton = page.locator('#mat-radio-52');
      await radioButton.waitFor({ state: 'visible', timeout: 60000 });
      await radioButton.click({ force: true });
      await page.getByRole('textbox', { name: 'PAN Number' }).type('gjkpm0846p');
      await page.getByRole('button', { name: 'Submit' }).click();
    
      const imagePath = path.join(__dirname, '../assets/Arunkumar.jpg');
      
      for (let i = 0; i < 3; i++) {
        const fileInput = await page.locator('input[type="file"]').nth(i);
        // if (isMobile) await fileInput.scrollIntoViewIfNeeded();
        await fileInput.setInputFiles(imagePath);
        await page.waitForTimeout(isMobile ? 2000 : 1000);
      }

      // await page.pause();

      const checkbox = page.locator('#mat-checkbox-17');
      if (isMobile) await checkbox.scrollIntoViewIfNeeded();
      await checkbox.click();

      await page.waitForTimeout(2000);

      await page.locator('span.mat-button-wrapper:has-text("Submit")').click();
    
      await page.getByLabel('2INSURED DETAILS').getByText('Same as proposer').click();
      await page.getByRole('textbox', { name: 'Height(cms)' }).type('170');
      await page.getByRole('textbox', { name: 'Weight(kgs)' }).type('70');
      await page.getByRole('button', { name: '2.INSURED DETAILS' }).click();
      await page.waitForTimeout(2000);
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
      await page.locator('#mat-input-80').type('Nominee');
      await page.locator('#mat-input-81').type('25');
      await page.getByLabel('3NOMINEE DETAILS').getByLabel('', { exact: true }).locator('span').click();
      await page.getByText('Brother', { exact: true }).click();
      await page.locator('#mat-input-82').fill('100');
      await page.waitForTimeout(4000);
      await page.getByLabel('3NOMINEE DETAILS').getByRole('button', { name: 'Next' }).click();
    
      const copyLinkButton = page.getByRole('button', { name: 'Copy Link' });
      if (isMobile) await copyLinkButton.scrollIntoViewIfNeeded();
      await copyLinkButton.click();
  
      const payButton = page.getByRole('button', { name: 'Pay by Customer' });
      if (isMobile) await payButton.scrollIntoViewIfNeeded();
      await payButton.click();
  
});
