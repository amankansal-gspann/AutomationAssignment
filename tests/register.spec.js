const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { RegisterPage } = require('../pages/RegisterPage');

test('End-to-End Registration Flow with Validation and File Upload', async ({ page }) => {
  const homePage = new HomePage(page);
  const registerPage = new RegisterPage(page);
  await homePage.goto();
  await homePage.enterEmail('aman.kansal@example.com');

  const userData = {
    firstName: 'Aman',
    lastName: 'Kansal',
    address: 'New Delhi, India',
    email: 'aman.kansal@example.com',
    phone: '9876543210',
    skill: 'Java',
    country: 'India',
    year: '2001',
    month: 'November',
    day: '11',
    password: 'Aman@123'
  };

  await registerPage.fillForm(userData);
  await registerPage.uploadFile('tests/test-data/test.png');
  await expect(registerPage.firstName).toHaveValue(userData.firstName);
  await expect(registerPage.lastName).toHaveValue(userData.lastName);
  await expect(registerPage.address).toHaveValue(userData.address);
  await expect(registerPage.email).toHaveValue(userData.email);
  await expect(registerPage.phone).toHaveValue(userData.phone);
  await expect(registerPage.skillsDropdown).toHaveValue(userData.skill);
  await expect(registerPage.yearDropdown).toHaveValue(userData.year);
  await expect(registerPage.monthDropdown).toHaveValue(userData.month);
  await expect(registerPage.dayDropdown).toHaveValue(userData.day);
  await expect(registerPage.password).toHaveValue(userData.password);
  await expect(registerPage.confirmPassword).toHaveValue(userData.password);

  await registerPage.submit();
  await expect(await registerPage.getValidationMessageForSkills())
  .toContain('Please select an item in the list');

});
