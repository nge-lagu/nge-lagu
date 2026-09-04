document.addEventListener("DOMContentLoaded", () => {
  // 1. Logika Form Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Tambahkan logika verifikasi login di sini
      console.log("Login berhasil disubmit");
    });
  }

  // 2. Navigasi Sidebar
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Beralih tampilan menu/halaman
      console.log("Navigasi ke:", link.textContent);
    });
  });

  // 3. Kontrol Audio Player
  const playBtn = document.getElementById("playBtn");
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      console.log("Memutar atau menghentikan musik");
    });
  }
});
