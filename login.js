function toggleForm() {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
    
    const overlayContent = document.querySelector('.overlay-content');
    if (container.classList.contains('active')) {
        overlayContent.querySelector('h2').textContent = 'Sudah punya akun?';
        overlayContent.querySelector('p').textContent = 'Silakan login untuk melanjutkan!';
        overlayContent.querySelector('button').textContent = 'Login';
    } else {
        overlayContent.querySelector('h2').textContent = 'Belum punya akun?';
        overlayContent.querySelector('p').textContent = 'Daftar sekarang untuk bergabung dengan kami!';
        overlayContent.querySelector('button').textContent = 'Register';
    }
}

// Tambahkan fungsi handleLogin
function handleLogin(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit default
    
    // Anda bisa menambahkan validasi login di sini jika diperlukan
    
    // Arahkan ke halaman index.html
    window.location.href = "beranda.html";
}