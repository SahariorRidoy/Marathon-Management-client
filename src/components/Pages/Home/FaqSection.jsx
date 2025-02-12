import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const faqs = [
    {
      question: "How do I register for a marathon?",
      answer:
        "To register for a marathon, visit the marathon details page and click on the 'Register Now' button. Fill out the registration form, and submit your details.",
    },
    {
      question: "What is the best way to train for a marathon?",
      answer:
        "Training for a marathon should include long runs, interval training, strength training, and cross-training. Make sure to gradually increase your distance, stay hydrated, and fuel your body with proper nutrition.",
    },
    {
      question: "Can I participate if I have no prior marathon experience?",
      answer:
        "Yes, anyone can participate in a marathon. It's important to train and prepare yourself in advance. Beginners are encouraged to join, but they should follow a suitable training plan to avoid injury.",
    },
    {
      question: "What happens if I can't complete the marathon?",
      answer:
        "If you're unable to finish the marathon, don't worry. You will still receive a finisher's medal, and we will offer support along the way. Just focus on completing your best race!",
    },
   
    {
      question: "How do I track my progress during the marathon?",
      answer:
        "You can track your progress using the official marathon app or through race timing chips provided at the event. There will also be mile markers along the course to help you monitor your time.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section id="faq" className="max-w-[1320px] mx-auto pt-12 bg-gray-100">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2 text-gray-500">
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.7.3l6 6a1 1 0 11-1.4 1.4L10 5.4l-5.3 5.3a1 1 0 11-1.4-1.4l6-6A1 1 0 0110 3z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 17a1 1 0 01-.7-.3l-6-6a1 1 0 011.4-1.4L10 14.6l5.3-5.3a1 1 0 011.4 1.4l-6 6a1 1 0 01-.7.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
