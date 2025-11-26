class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="bg-black/40 backdrop-blur-sm border-b border-gray-800/50">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" class="text-xl font-bold text-white">Cosmic Sip</a>
          <div class="hidden md:flex gap-6 items-center">
            <a href="#products" class="text-gray-300 hover:text-white">Products</a>
            <a href="#story" class="text-gray-300 hover:text-white">Our Story</a>
            <a href="#gallery" class="text-gray-300 hover:text-white">Gallery</a>
            <a href="#" class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm">Shop</a>
          </div>
          <button id="mobile-menu-button" class="md:hidden text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <div id="mobile-menu" class="md:hidden hidden px-6 pb-4">
          <a href="#products" class="block py-2 text-gray-300">Products</a>
          <a href="#story" class="block py-2 text-gray-300">Our Story</a>
          <a href="#gallery" class="block py-2 text-gray-300">Gallery</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);