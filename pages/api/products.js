// pages/api/products.js
export default function handler(req, res) {
  const products = [
    {
      id: 1,
      title: "The Ultimate Coaching Guide",
      price: 29.00,
      description:
        "A step-by-step guide to building a profitable coaching business. Includes proven strategies and actionable tips."
    },
    {
      id: 2,
      title: "Grow Your Business with Digital Marketing",
      price: 25.00,
      description:
        "Essential tactics to expand your brand online. Learn SEO, social media, and ads without wasting budget."
    },
    {
      id: 3,
      title: "Digital Growth Planner",
      price: 22.00,
      description:
        "Blueprints and systems to scale your digital presence. Plan, track, and optimize every campaign."
    },
    {
      id: 4,
      title: "The iPhone Entrepreneur",
      price: 20.00,
      description:
        "Launch and grow a business using only your smartphone and free tools. Perfect for entrepreneurs on the move."
    },
    {
      id: 5,
      title: "Entrepreneur's Guide to Success",
      price: 18.00,
      description:
        "A concise roadmap for starting and scaling a profitable business from scratch."
    },
    {
      id: 6,
      title: "AI Integrated Technology",
      price: 26.00,
      description:
        "Discover how artificial intelligence can automate and grow your business faster than ever."
    }
  ];

  res.status(200).json(products);
      }
