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
  {
    name: "headlineGenerator",
    desc: "Generates attention-grabbing headlines for articles and blogs.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/2919/2919600.png",
    aiPrompt:
      "Generate 5 headline ideas based on the provided topic and target audience.",
    slug: "generate-headline",
    form: [
      {
        label: "Article Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
  {
    name: "taglineGenerator",
    desc: "Creates catchy taglines for brands and products.",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/3081/3081840.png",
    aiPrompt:
      "Generate 5 tagline ideas based on the provided brand name and key message.",
    slug: "generate-tagline",
    form: [
      {
        label: "Brand Name",
        field: "input",
        name: "brand",
        required: true,
      },
      {
        label: "Key Message",
        field: "textarea",
        name: "message",
        required: true,
      },
    ],
  },
  {
    name: "courseOutlineGenerator",
    desc: "Creates detailed outlines for online courses.",
    category: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/1995/1995574.png",
    aiPrompt:
      "Generate 3 course outline ideas based on the provided topic and learning objectives.",
    slug: "generate-course-outline",
    form: [
      {
        label: "Course Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Learning Objectives",
        field: "textarea",
        name: "objectives",
        required: true,
      },
    ],
  },
  {
    name: "recipeGenerator",
    desc: "Creates personalized recipes based on available ingredients.",
    category: "Cooking",
    icon: "https://cdn-icons-png.flaticon.com/128/1239/1239187.png",
    aiPrompt:
      "Generate 3 recipe ideas using the provided ingredients and dietary preferences.",
    slug: "generate-recipe",
    form: [
      {
        label: "Ingredients",
        field: "textarea",
        name: "ingredients",
        required: true,
      },
      {
        label: "Dietary Preferences",
        field: "input",
        name: "preferences",
        required: false,
      },
    ],
  },
  {
    name: "travelItineraryGenerator",
    desc: "Creates detailed travel itineraries based on destination and interests.",
    category: "Travel",
    icon: "https://cdn-icons-png.flaticon.com/128/927/927567.png",
    aiPrompt:
      "Generate 3 travel itinerary ideas based on the provided destination and interests.",
    slug: "generate-travel-itinerary",
    form: [
      {
        label: "Destination",
        field: "input",
        name: "destination",
        required: true,
      },
      {
        label: "Interests",
        field: "textarea",
        name: "interests",
        required: true,
      },
    ],
  },
  {
    name: "videoScriptGenerator",
    desc: "Creates video scripts for YouTube, TikTok, and other platforms.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/2420/2420372.png",
    aiPrompt:
      "Generate 3 video script ideas based on the provided topic and audience.",
    slug: "generate-video-script",
    form: [
      {
        label: "Video Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "audience",
        required: true,
      },
    ],
  },
];
