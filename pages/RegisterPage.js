class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('input[ng-model="FirstName"]');
    this.lastName = page.locator('input[ng-model="LastName"]');
    this.address = page.locator('textarea[ng-model="Adress"]');
    this.email = page.locator('input[ng-model="EmailAdress"]');
    this.phone = page.locator('input[ng-model="Phone"]');
    this.maleRadio = page.locator('input[value="Male"]');
    this.cricketCheckbox = page.locator('#checkbox1');
    this.skillsDropdown = page.locator('#Skills');
    this.countryDropdown = page.locator('#country');
    this.yearDropdown = page.locator('#yearbox');
    this.monthDropdown = page.locator('select[ng-model="monthbox"]');
    this.dayDropdown = page.locator('#daybox');
    this.password = page.locator('#firstpassword');
    this.confirmPassword = page.locator('#secondpassword');
    this.uploadInput = page.locator('#imagesrc');
    this.submitBtn = page.locator('#submitbtn');
    this.validationDialog = page;
  }

  async fillForm(user) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.address.fill(user.address);
    await this.email.fill(user.email);
    await this.phone.fill(user.phone);
    await this.maleRadio.check();
    await this.cricketCheckbox.check();
    await this.skillsDropdown.selectOption(user.skill);
    await this.countryDropdown.selectOption(user.country);
    await this.yearDropdown.selectOption(user.year);
    await this.monthDropdown.selectOption(user.month);
    await this.dayDropdown.selectOption(user.day);
    await this.password.fill(user.password);
    await this.confirmPassword.fill(user.password);
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async getValidationMessageForCountry() {
  return await this.countryDropdown.evaluate(el => el.validationMessage);
}

  async submit() {
    await this.submitBtn.click();
  }

}

module.exports = { RegisterPage };
