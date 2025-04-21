// task-1.js

/**
 * Перевіряє, чи помістяться всі товари в контейнер заданого розміру.
 *
 * @param {Object<string, number>} products — ключі: назви товарів; значення: кількість одиниць.
 * @param {number} containerSize — максимальна ємність контейнера (одиниць товарів).
 * @returns {boolean} — true, якщо сумарна кількість товарів ≤ containerSize, інакше false.
 */
function isEnoughCapacity(products, containerSize) {
  const totalItems = Object.values(products).reduce((sum, qty) => sum + qty, 0);
  return totalItems <= containerSize;
}

// Тести для перевірки роботи функції (залишити для ментора):
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
