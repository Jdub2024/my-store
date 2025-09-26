// pages/api/products.js
export default function handler(req, res) {
  res.status(200).json([
    {
      id: "aff-5best",
      name: "5 Best Weight Loss",
      price: "See Offer",
      image: "/images/5best.jpg",
      link: "https://5bestweightloss.com/?id=68d695c1ac517ed67474c4a2",
      description:
        "Discover the top five science-backed weight loss strategies in one powerful offer. Expert tips and premium resources for fast, sustainable results."
    },
    {
      id: "aff-mitolyn",
      name: "Mitolyn Metabolism Support",
      price: "See Offer",
      image: "/images/mitolyn.jpg",
      link: "https://mitolyn.com/science/?affiliate=cellular20",
      description:
        "Boost energy and support a healthy metabolism with this advanced, science-driven supplement."
    },
    {
      id: "ebook-broke-bonds",
      name: "Broke Bonds: Lies, Deceit, Betrayal",
      price: 18,
      image: "/images/broke-bonds.jpg",
      link: "/checkout/broke-bonds",
      description:
        "A dark romantasy of forbidden magic, rebellion, and a love that could destroy a kingdom. Book One of the Broke Bonds Saga."
    },
    {
      id: "ebook-digital-growth-planner",
      name: "Digital Growth Planner",
      price: 17,
      image: "/images/digital-growth-planner.jpg",
      link: "/checkout/digital-growth-planner",
      description:
        "Plan, track, and scale your online business with this step-by-step growth and productivity system."
    },
    {
      id: "ebook-iphone-entrepreneur",
      name: "The iPhone Entrepreneur",
      price: 15,
      image: "/images/iphone-entrepreneur.jpg",
      link: "/checkout/iphone-entrepreneur",
      description:
        "Launch and grow a profitable business using nothing but your iPhone and free online tools."
    },
    {
      id: "ebook-entrepreneur-guide",
      name: "Entrepreneur’s Guide to Success",
      price: 14,
      image: "/images/entrepreneur-guide.jpg",
      link: "/checkout/entrepreneur-guide",
      description:
        "Essential strategies, habits, and mindset shifts every entrepreneur needs to build a thriving business."
    },
    {
      id: "ebook-grow-business-dm",
      name: "Grow Your Business with Digital Marketing",
      price: 16,
      image: "/images/grow-business-dm.jpg",
      link: "/checkout/grow-business-dm",
      description:
        "A practical playbook for using social media, SEO, and online ads to reach more customers and increase revenue."
    },
    {
      id: "ebook-ultimate-coaching",
      name: "The Ultimate Coaching Guide",
      price: 18,
      image: "/images/ultimate-coaching.jpg",
      link: "/checkout/ultimate-coaching",
      description:
        "Design, market, and deliver powerful coaching programs with proven frameworks and tools."
    },
    {
      id: "ebook-ai-integrated-tech",
      name: "AI Integrated Technology",
      price: 12,
      image: "/images/ai-integrated-tech.jpg",
      link: "/checkout/ai-integrated-tech",
      description:
        "Learn how to harness artificial intelligence to automate tasks, boost productivity, and stay ahead in a tech-driven market."
    }
  ]);
}
