const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsDiv = document.getElementById("results");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    searchBooks(query);
  } else {
    alert("Please enter a search term.");
  }
});

async function searchBooks(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayResults(data.items || []);
  } catch (error) {
    console.error("Error fetching data:", error);
    resultsDiv.innerHTML =
      "<p>Error fetching data. Please try again later.</p>";
  }
}

function displayResults(books) {
  if (books.length === 0) {
    resultsDiv.innerHTML =
      "<p>No books found. Try a different search term.</p>";
    return;
  }

  resultsDiv.innerHTML = books
    .map((book) => {
      const title = book.volumeInfo.title || "No Title Available";
      const author = book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author";
      const coverUrl = book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://via.placeholder.com/150x200?text=No+Cover";
      const pdfLink = book.accessInfo.pdf
        ? book.accessInfo.pdf.downloadLink
        : "";
      const previewLink = book.volumeInfo.previewLink || "";

      return `
            <div class="book">
                <img src="${coverUrl}" alt="${title}" class="book-cover">
                <h3>${title}</h3>
                <p><strong>Author:</strong> ${author}</p>
                ${
                  pdfLink
                    ? `<a href="${pdfLink}" target="_blank" class="download-button">Download PDF</a>`
                    : "<p>No PDF available</p>"
                }
                ${
                  previewLink
                    ? `<a href="${previewLink}" target="_blank" class="read-button">Read Online</a>`
                    : ""
                }
            </div>
        `;
    })
    .join("");
}
