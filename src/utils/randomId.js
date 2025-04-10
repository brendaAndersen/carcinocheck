export function generateRandomId() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    const randomLetters = Array.from({ length: 4 }, () =>
        letters[Math.floor(Math.random() * letters.length)]
    ).join('');

    const randomNumbers = Array.from({ length: 4 }, () =>
        numbers[Math.floor(Math.random() * numbers.length)]
    ).join('');

    return randomLetters + randomNumbers;
}