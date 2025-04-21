// task-3.js

const profile = {
  username: "Jacob",
  playTime: 300,

  /**
   * Змінює ім’я профілю на нове.
   * @param {string} newName — нове ім’я для username
   */
  changeUsername(newName) {
    this.username = newName;
  },

  /**
   * Додає до playTime вказану кількість годин.
   * @param {number} hours — кількість годин для додавання
   */
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  /**
   * Повертає рядок з інформацією про профіль.
   * @returns {string} — "<Username> has <amount> active hours!"
   */
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};

// Тести для перевірки роботи (залишити для ментора):
console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
