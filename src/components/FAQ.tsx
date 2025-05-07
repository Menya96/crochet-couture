import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const sampleFAQs: FAQItem[] = [
  {
    question: 'What materials do you use for your crochet products?',
    answer: 'We use high-quality, eco-friendly yarns and threads, including organic cotton, bamboo, and merino wool. Each product description includes specific material details.',
  },
  {
    question: 'How do I care for my crochet items?',
    answer: 'To ensure longevity, hand wash your crochet items in cold water with mild detergent and lay them flat to dry. Avoid wringing or twisting the fabric.',
  },
  {
    question: 'Do you offer custom orders?',
    answer: 'Yes, we do! If you have a specific design or color in mind, please contact us with your requirements, and we’ll be happy to create a custom piece for you.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase for unused and undamaged items. Please contact our customer service team to initiate a return.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, PayPal, and other secure payment options. All transactions are processed through a secure payment gateway.',
  },
  {
    question: 'Can I change or cancel my order after it’s been placed?',
    answer: 'If you need to change or cancel your order, please contact us as soon as possible. We will do our best to accommodate your request if the order has not yet been processed.',
  },
  {
    question: 'Do you have a physical store?',
    answer: 'Currently, we operate exclusively online. However, we occasionally participate in local craft fairs and pop-up shops. Follow us on social media for updates on our events.',
  },

];

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='bg-accentGold min-h-screen py-4 md:py-12'>
      <h1 className='text-center md:text-5xl text-3xl font-bold text-secondaryBrown mb-8'>Frequently Asked Questions (FAQs)</h1>
      <div className='faq-container px-4 md:px-12'>
        {items.map((item, index) => (
          <div key={index} className='faq-item border-b border-primaryGreen py-4'>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={() => handleItemClick(index)}
            >
              <h3 className='text-xl md:text-2xl font-bold text-primaryGreen pr-4'>{item.question}</h3>
              <div>
                {activeIndex === index ? (
                  <FaMinus className='text-secondaryBrown text-xl' />
                ) : (
                  <FaPlus className='text-secondaryBrown text-xl' />
                )}
              </div>
            </div>
            {activeIndex === index && (
              <p className='font-bold text-gray-700 mt-2'>{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;