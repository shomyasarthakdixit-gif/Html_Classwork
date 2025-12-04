// ------------------ Book Data ------------------
let books = [
  { title: "The Alchemist", author: "Paulo Coelho", price: 299, rating: 5 },
  { title: "Atomic Habits", author: "James Clear", price: 499, rating: 4 },
  { title: "The Psychology of Money", author: "Morgan Housel", price: 399, rating: 5 },
  { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", price: 350, rating: 4 },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 450, rating: 5 }
];

// ------------------ Generate Stars ------------------
function starRating(num) {
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars += `<span class="star">★</span>`;
  }
  return stars;
}

// ------------------ Create Book Card ------------------
function createBookCard(book, index) {
  return `
    <div class="col-md-4 col-lg-3">
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="text-muted mb-1">by ${book.author}</p>
          <p class="fw-bold">₹${book.price}</p>
          <p>${starRating(book.rating)}</p>
          <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">Delete</button>
        </div>
      </div>
    </div>
  `;
}

// ------------------ Render Books ------------------
function displayBooks() {
  const bookList = document.getElementById("bookList");
  let output = "";

  // Loop through books
  for (let i = 0; i < books.length; i++) {
    output += createBookCard(books[i], i);
  }

  bookList.innerHTML = output;
}

// ------------------ Search Function ------------------
document.getElementById("searchInput").addEventListener("keyup", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(query) ||
    b.author.toLowerCase().includes(query)
  );

  renderFilteredBooks(filtered);
});

function renderFilteredBooks(list) {
  const bookList = document.getElementById("bookList");
  let output = "";

  for (let i = 0; i < list.length; i++) {
    output += createBookCard(list[i], i);
  }

  bookList.innerHTML = output;
}

// ------------------ Sorting ------------------
document.getElementById("sortSelect").addEventListener("change", () => {
  const choice = document.getElementById("sortSelect").value;

  if (choice === "low-high") {
    books.sort((a, b) => a.price - b.price);
  } else if (choice === "high-low") {
    books.sort((a, b) => b.price - a.price);
  }

  displayBooks();
});

// ------------------ Add Book ------------------
document.getElementById("addBtn").addEventListener("click", () => {
  const title = document.getElementById("titleInput").value;
  const author = document.getElementById("authorInput").value;
  const price = parseInt(document.getElementById("priceInput").value);
  const rating = parseInt(document.getElementById("ratingInput").value);

  if (!title || !author || isNaN(price) || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Please enter valid book details!");
    return;
  }

  books.push({ title, author, price, rating });

  displayBooks();

  // Clear inputs
  document.getElementById("titleInput").value = "";
  document.getElementById("authorInput").value = "";
  document.getElementById("priceInput").value = "";
  document.getElementById("ratingInput").value = "";
});

// ------------------ Delete Book ------------------
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// ------------------ Theme Toggle ------------------
document.getElementById("themeToggle").addEventListener("click", () => {
  const body = document.body;

  body.classList.toggle("dark");
  body.classList.toggle("light");

  const btn = document.getElementById("themeToggle");
  btn.textContent = body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Initial Load
displayBooks();
