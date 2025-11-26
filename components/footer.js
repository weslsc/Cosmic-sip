class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-black/50 border-t border-gray-800/50 py-10 mt-12">
        <div class="container mx-auto px-6 text-center text-gray-400">
          <div class="mb-4">
            <strong class="text-white">Cosmic Sip</strong> — Made with stardust.
          </div>
          <div class="text-sm">
            © ${new Date().getFullYear()} Cosmic Sip · <a href="#" class="text-blue-400">Privacy</a> · <a href="#" class="text-blue-400">Terms</a>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);