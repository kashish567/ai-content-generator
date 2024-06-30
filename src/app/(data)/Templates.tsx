export default [
  {
    name: "title",
    desc: "an ai tool that generates blog title depending on the information of your blog",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on given niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "socialMediaPost",
    desc: "An AI tool that generates engaging social media posts based on given keywords.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/124/124034.png",
    aiPrompt:
      "Generate 5 engaging social media posts in a concise format based on the given keywords and audience.",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter your target audience",
        field: "input",
        name: "audience",
        required: true,
      },
      {
        label: "Enter keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter post format (e.g., text, image, video)",
        field: "input",
        name: "format",
        required: true,
      },
    ],
  },
  {
    name: "emailNewsletter",
    desc: "An AI tool that crafts personalized email newsletters based on user preferences and content.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/281/281769.png",
    aiPrompt:
      "Draft 3 email newsletter content ideas based on the provided theme and audience preferences.",
    slug: "generate-email-newsletter",
    form: [
      {
        label: "Enter the theme of the newsletter",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Enter your target audience",
        field: "textarea",
        name: "audience",
        required: true,
      },
      {
        label: "Enter the main topics to cover",
        field: "textarea",
        name: "topics",
        required: true,
      },
    ],
  },
  {
    name: "productDescription",
    desc: "An AI tool that creates compelling product descriptions for your online store.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3523/3523063.png",
    aiPrompt:
      "Generate 5 product description ideas based on the provided product details and target market.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Enter target market",
        field: "input",
        name: "market",
        required: true,
      },
    ],
  },
  {
    name: "productDescription",
    desc: "An AI tool that creates compelling product descriptions for your online store.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3523/3523063.png",
    aiPrompt:
      "Generate 5 product description ideas based on the provided product details and target market.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
        required: true,
      },
      {
        label: "Enter target market",
        field: "input",
        name: "market",
        required: true,
      },
    ],
  },
  {
    name: "emailNewsletter",
    desc: "An AI tool that crafts personalized email newsletters based on user preferences and content.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/281/281769.png",
    aiPrompt:
      "Draft 3 email newsletter content ideas based on the provided theme and audience preferences.",
    slug: "generate-email-newsletter",
    form: [
      {
        label: "Enter the theme of the newsletter",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Enter your target audience",
        field: "textarea",
        name: "audience",
        required: true,
      },
      {
        label: "Enter the main topics to cover",
        field: "textarea",
        name: "topics",
        required: true,
      },
    ],
  },
];
