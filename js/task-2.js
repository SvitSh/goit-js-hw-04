// task-2.js

/**
 * Обчислює середньодобову кількість калорій за тиждень.
 *
 * @param {Array<{ day: string, calories: number }>} days — масив об’єктів із днем тижня та калоріями.
 * @returns {number} — середньодобове значення калорій (ціле число), або 0 якщо масив порожній.
 */
function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  const totalCalories = days.reduce((sum, { calories }) => sum + calories, 0);
  // Округлюємо вниз до цілого (середнє точно ділиться на 1 за умовою завдання)
  return Math.floor(totalCalories / days.length);
}

// Тести для перевірки роботи функції (залишити для ментора):
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
