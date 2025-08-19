const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.enterBtn = page.locator('#enterimg');
  }

  async goto() {
    await this.page.goto('https://demo.automationtesting.in/');
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
    await this.enterBtn.click();
    await expect(this.page).toHaveURL(/Register/);
  }
}

module.exports = { HomePage };