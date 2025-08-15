export default function FAQSection() {
  const faqs = [
    {
      question: "Is Creatordesks Meta Verified?",
      answer: "No, Creatordesks is not Meta Verified, but we ensure that all features comply with Meta’s policies.",
    },
    {
      question: "Is Creatordesks free?",
      answer: "We offer both free and premium plans, depending on the features you need.",
    },
    {
      question: "Is there a risk of insta ban while using automation?",
      answer: "We use safe automation methods, but misuse or excessive activity can lead to account restrictions.",
    },
    {
      question: "Do I get referral income on renewals as well?",
      answer: "Yes, our referral program rewards you for renewals and new sign-ups.",
    },
    {
      question: "Can I get a GST invoice?",
      answer: "Absolutely! We provide GST-compliant invoices for all Indian customers.",
    },
  ];

  return (
    <section
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg_footer.png')" }} // Replace with your background image path
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-md overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 text-lg font-medium text-gray-800 flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="ml-2">▼</span>
              </summary>
              <div className="px-4 py-3 text-gray-600 border-t">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
