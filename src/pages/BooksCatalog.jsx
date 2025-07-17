const books = [
  {
    id: "1",
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684347572i/61215320.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    ranking: 5,
  },
  {
    id: "2",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1664407335i/61439223.jpg",
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    ranking: 4,
  },
  {
    id: "3",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1655021200i/61266009.jpg",
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    ranking: 5,
  },
  {
    id: "4",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1684804368i/123000676.jpg",
    title: "The Wager: A Tale of Shipwreck, Mutiny and Murder",
    author: "David Grann",
    ranking: 4,
  },
  {
    id: "5",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1678853784i/62900010.jpg",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    ranking: 4,
  },
  {
    id: "6",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1654151759i/60076770.jpg",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    ranking: 5,
  },
  {
    id: "7",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1678245585i/62291244.jpg",
    title: "Poverty, by America",
    author: "Matthew Desmond",
    ranking: 3,
  },
  {
    id: "8",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1681729424i/75338025.jpg",
    title: "King: A Life",
    author: "Jonathan Eig",
    ranking: 5,
  },
  {
    id: "9",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684332906i/75336829.jpg",
    title: "The Heaven & Earth Grocery Store",
    author: "James McBride",
    ranking: 4,
  },
  {
    id: "10",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684534720i/70104618.jpg",
    title: "The Covenant of Water",
    author: "Abraham Verghese",
    ranking: 5,
  },
  {
    id: "11",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1601004169i/52879287.jpg",
    title: "The Midnight Library",
    author: "Matt Haig",
    ranking: 4,
  },
  {
    id: "12",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1638618302i/59345791.jpg",
    title: "Book Lovers",
    author: "Emily Henry",
    ranking: 4,
  },
  {
    id: "13",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1639908865i/58723527.jpg",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    ranking: 5,
  },
  {
    id: "14",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1680104677i/61822760.jpg",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    ranking: 4,
  },
  {
    id: "15",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1683100654i/62993627.jpg",
    title: "Demon Copperhead",
    author: "Barbara Kingsolver",
    ranking: 5,
  },
  {
    id: "16",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684946387i/63032585.jpg",
    title: "Yellowface",
    author: "R.F. Kuang",
    ranking: 3,
  },
  {
    id: "17",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1678393529i/61194300.jpg",
    title: "Hello Beautiful",
    author: "Ann Napolitano",
    ranking: 4,
  },
  {
    id: "18",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1676378415i/61981881.jpg",
    title: "I Have Some Questions for You",
    author: "Rebecca Makkai",
    ranking: 4,
  },
  {
    id: "19",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684347572i/61215320.jpg",
    title: "The Alchemist",
    author: "Paulo Coelho",
    ranking: 5,
  },
  {
    id: "20",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1664407335i/61439223.jpg",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    ranking: 4,
  },
  {
    id: "21",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1655021200i/61266009.jpg",
    title: "1984",
    author: "George Orwell",
    ranking: 5,
  },
  {
    id: "22",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1684804368i/123000676.jpg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ranking: 5,
  },
  {
    id: "23",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1678853784i/62900010.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    ranking: 4,
  },
  {
    id: "24",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1654151759i/60076770.jpg",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    ranking: 4,
  },
  {
    id: "25",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1678245585i/62291244.jpg",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ranking: 3,
  },
  {
    id: "26",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1681729424i/75338025.jpg",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    ranking: 5,
  },
  {
    id: "27",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684332906i/75336829.jpg",
    title: "Lord of the Flies",
    author: "William Golding",
    ranking: 3,
  },
  {
    id: "28",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684534720i/70104618.jpg",
    title: "Frankenstein",
    author: "Mary Shelley",
    ranking: 4,
  },
  {
    id: "29",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1601004169i/52879287.jpg",
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    ranking: 5,
  },
  {
    id: "30",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1638618302i/59345791.jpg",
    title: "Moby Dick",
    author: "Herman Melville",
    ranking: 3,
  },
  {
    id: "31",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1639908865i/58723527.jpg",
    title: "War and Peace",
    author: "Leo Tolstoy",
    ranking: 5,
  },
  {
    id: "32",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1680104677i/61822760.jpg",
    title: "The Odyssey",
    author: "Homer",
    ranking: 4,
  },
  {
    id: "33",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1683100654i/62993627.jpg",
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    ranking: 4,
  },
  {
    id: "34",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684946387i/63032585.jpg",
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    ranking: 4,
  },
  {
    id: "35",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1678393529i/61194300.jpg",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    ranking: 5,
  },
  {
    id: "36",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1676378415i/61981881.jpg",
    title: "Brave New World",
    author: "Aldous Huxley",
    ranking: 4,
  },
  {
    id: "37",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684347572i/61215320.jpg",
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    ranking: 5,
  },
  {
    id: "38",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1664407335i/61439223.jpg",
    title: "Les Misérables",
    author: "Victor Hugo",
    ranking: 5,
  },
  {
    id: "39",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1655021200i/61266009.jpg",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    ranking: 4,
  },
  {
    id: "40",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1684804368i/123000676.jpg",
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    ranking: 5,
  },
  {
    id: "41",
    cover:
      "https://images-na.ssl-images.com/images/S/compressed.photo.goodreads.com/books/1678853784i/62900010.jpg",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    ranking: 4,
  },
  {
    id: "42",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1654151759i/60076770.jpg",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    ranking: 4,
  },
  {
    id: "43",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1678245585i/62291244.jpg",
    title: "Great Expectations",
    author: "Charles Dickens",
    ranking: 4,
  },
  {
    id: "44",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1681729424i/75338025.jpg",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    ranking: 5,
  },
  {
    id: "45",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684332906i/75336829.jpg",
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    ranking: 5,
  },
  {
    id: "46",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1684534720i/70104618.jpg",
    title: "Dracula",
    author: "Bram Stoker",
    ranking: 4,
  },
  {
    id: "47",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1601004169i/52879287.jpg",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    ranking: 4,
  },
  {
    id: "48",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1638618302i/59345791.jpg",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    ranking: 4,
  },
  {
    id: "49",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1639908865i/58723527.jpg",
    title: "Through the Looking-Glass",
    author: "Lewis Carroll",
    ranking: 3,
  },
  {
    id: "50",
    cover:
      "https://images-na.ssl-images.amazon.com/images/S/compressed.photo.goodreads.com/books/1680104677i/61822760.jpg",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    ranking: 5,
  },
];
import BookCard from "../components/BookCard";

const BooksCatalog = () => {
  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold">Contenido principal</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {books.map((book) => {
          return (
            <BookCard
              cover={book.cover}
              title={book.title}
              author={book.author}
              ranking={book.ranking}
              key={book.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default BooksCatalog;
