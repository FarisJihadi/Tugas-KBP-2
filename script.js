const divs = document.querySelectorAll("div");
divs.forEach((div) => {
  div.style.backgroundColor = "#FCFAEE";
});

const anchor = document.querySelector("a");
anchor.setAttribute("href", "https://www.google.com");

// 3. Gunakan loop untuk memodifikasi elemen <li>
const listItems = document.querySelectorAll("li"); // Seleksi semua elemen <li>

// Gunakan loop forEach untuk mengakses setiap elemen <li>
listItems.forEach((item, index) => {
  item.textContent = `Item ${index + 1}`;
  item.style.backgroundColor = `hsl(${index * 300}, 75%, 80%)`;
  item.style.fontSize = `${16 + index * 2}px`;
  item.style.fontFamily = "SF Pro";
  item.style.color = "#1A1A1D";
});
