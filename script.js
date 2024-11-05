// 1. Створіть об'єкт "Книга"
let book_1 = {
    title: 'Захар Беркут',
    author: 'Іван Франко',
    year: 1883,
    genre: 'Історична повість',
    pages: 240,
    getInfo: function() {
        return `Назва книги: ${this.title}, автор: ${this.author}, рік: ${this.year}, кількість сторінок: ${this.pages}`;
    }
};

console.log("1. Базова інформація про книгу:");
console.log(book_1.getInfo());

// 2. Додавання нової властивості
book_1.publisher = "Книжковий Клуб";
console.log("\n2. Інформація про книгу з видавництвом:");
console.log({ ...book_1 });

// 3. Видалення властивості
delete book_1.genre;
console.log("\n3. Перевірка видалення властивості 'genre':");
console.log('genre' in book_1); // false

// 4. Створіть вкладений об'єкт
let book_2 = {
    title: 'Майстер і Маргарита',
    author: {
        firstName: 'Михайло',
        lastName: 'Булгаков',
        birthYear: 1891,
        nationality: 'Українець'
    },
    getAuthorInfo: function() {
        return `Автор: ${this.author.firstName} ${this.author.lastName}, народився в ${this.author.birthYear}, національність: ${this.author.nationality}`;
    }
};

console.log("\n4. Інформація про автора:");
console.log(book_2.getAuthorInfo());

// 5. Перебір властивостей
console.log("\n5. Перебір властивостей:");
for (let prop in book_2) {
    console.log(`${prop}: ${book_2[prop]}`);
}

console.log("\nКлючі об'єкта:");
console.log(Object.keys(book_2));

console.log("\nЗначення об'єкта:");
console.log(Object.values(book_2));

// 6. Копіювання об'єкта
let bookCopy = Object.assign(book_2);
bookCopy.title = "Мойсей";
bookCopy.year = 1905;

// 7. Розширення функціоналу
book_2.isModern = function() {
    return this.year > 2000 ? 'Ця книга є сучасною.' : 'Ця книга не є сучасною.';
};

console.log(book_2.isModern());