export default function Footer() {
  return (
    <footer className="relative bg-footer-bg border-t border-gray-200 overflow-hidden w-full">
      {/* Footer Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div>
            <div className="space-y-4">
              <h3 className="text-footer-text text-base font-medium">
                Contact us at
              </h3>
              <p className="text-footer-text text-base font-semibold">
                <a
                  href="mailto:info@futuredesks.com"
                  className="hover:underline"
                >
                  info@futuredesks.com
                </a>
              </p>

              {/* Newsletter */}
              <div className="mt-6">
                <form
                  className="relative w-full max-w-md mx-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                    <input
                      type="email"
                      placeholder="name@email.com"
                      className="flex-grow px-6 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h4 className="text-footer-muted text-sm font-medium mb-4">
                Links
              </h4>
              <nav className="space-y-3">
                {["Home", "Features", "Pricing", "Integrations", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-footer-text text-sm hover:text-blue-600"
                    >
                      {link}
                    </a>
                  )
                )}
              </nav>
            </div>

            <div>
              <h4 className="text-footer-muted text-sm font-medium mb-4">
                More Resources
              </h4>
              <nav className="space-y-3">
                {["FAQ", "Blog", "Testimonials", "Terms", "Privacy Policy"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-footer-text text-sm hover:text-blue-600"
                    >
                      {link}
                    </a>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Watermark Below Content */}
<div className="w-full flex justify-center pb-4">
  <span
    className="
      w-full text-center font-normal sm:font-normal md:font-normal lg:font-normal
      select-none whitespace-nowrap bg-clip-text text-transparent
      text-[50px] sm:text-[80px] md:text-[100px] lg:text-[120px]
      scale-y-[1.2] sm:scale-y-[1.2] md:scale-y-[1.2]
      lg:scale-x-[1.5] lg:scale-y-[1]
      -translate-y-2 sm:-translate-y-3
      font-semibold
    "
    style={{
      fontFamily: "Clash Display Variable, sans-serif",
      fontWeight: 500, // slightly heavier for mobile
      fontStyle: "normal",
      lineHeight: "1.08",
      backgroundImage: "linear-gradient(90deg, black, white)",
      opacity: 0.3,
      transformOrigin: "center",
    }}
  >
    FUTUREDESKS
  </span>
</div>




    </footer>
  );
}


