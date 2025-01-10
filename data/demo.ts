import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "Spongebob Tower Defense",
      avatar: {
        src: "/imgs/logo.png",
        title: "Spongebob",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "Codes",
          url: "/codes",
          target: "_self",
        },
        {
          title: "Wiki",
          url: "https://spongebobtd.fandom.com/wiki/SpongeBob_Tower_Defense_Wiki",
          target: "_blank",
        },
        {
          title: "Privacy Policy",
          url: "/privacy-policy",
          target: "_self",
        },
        {
          title: "Terms",
          url: "terms-of-service",
          target: "_self",
        },
      ],
    },

  },
  hero: {
    title: "Spongebob Tower Defense",
    description:
      "SpongeBob Tower Defense (TD) is a popular Roblox game developed by Krabby Krew, featuring characters from the beloved SpongeBob SquarePants series. Players defend Bikini Bottom from waves of enemies by strategically placing various characters as units, each with unique abilities. The game includes numerous maps, chapters, and difficulty levels, enhancing the gameplay experience.",
    image: {
      src: "/imgs/tower-defense.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "Play Now",
        url: "https://www.roblox.com/games/123662243100680/SpongeBob-Tower-Defense-Update-1",
        target: "_blank",
      },
      // {
      //   title: "Vote on ProductHunt",
      //   url: "https://www.producthunt.com/posts/pagen",
      //   target: "_blank",
      //   theme: "outline",
      // },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    title: "Game Sections",
    description: "Explore different aspects of Spongebob Tower Defense",
    items: [
      // {
      //   name: "what",
      //   title: "What is Pagen",
      //   description:
      //     "Pagen is an AI landing page generator that simplifies the process of creating effective landing pages. With its intuitive interface and smart algorithms, you can generate pages that convert visitors into customers.",
      //   image: {
      //     src: "/imgs/section1.png",
      //   },
      //   image_position: "left",
      //   text_align: "center",
      //   items: [
      //     {
      //       title: "Landing Page Generator",
      //       description:
      //         "Pagen can help to generate landing page quickly from your idea",
      //     },
      //     {
      //       title: "Page Content Generator",
      //       description:
      //         "Pagen can help to Generate high-quality page content with AI",
      //     },
      //     {
      //       title: "Variety Templates",
      //       description:
      //         "Pagen has multiple built-in page templates to make landing page looks great",
      //     },
      //   ],
      // },
      // {
      //   name: "why",
      //   title: "Why Choose Pagen",
      //   description:
      //     "Pagen stands out with its user-friendly design, powerful AI capabilities, and customizable templates that cater to various industries. It saves you time and enhances your marketing efforts.",
      //   image: {
      //     src: "/imgs/section2.png",
      //   },
      //   image_position: "right",
      //   text_align: "center",
      //   items: [
      //     {
      //       title: "Ship Fast",
      //       description: "Create landing page in seconds",
      //     },
      //     {
      //       title: "Easy to use",
      //       description: "Just need a product name from your idea",
      //     },
      //     {
      //       title: "AI Powered",
      //       description: "Generate high-quality page content with AI",
      //     },
      //   ],
      // },
      {
        name: "how",
        title: "How to play Spongebob Tower Defense",
        description:
          "In SpongeBob Tower Defense, players start by selecting a character and building a defense strategy. The gameplay involves:",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. Character Selection",
            description:
              "Choose from various characters, each with distinct abilities and stats.",
          },
          {
            title: "2. Wave Defense",
            description:
              "Players must withstand progressively challenging waves of enemies by strategically placing their characters along the path.",
          },
          {
            title: "3. Resource Management",
            description:
              "Collect resources to summon new units and upgrade existing ones. Players can earn in-game currency through gameplay or by redeeming codes.",
          },
          {
            title: "4. Boosts and Buffs",
            description:
              " Utilize boosts like Game Speed boosters and Trait Rerolls to enhance gameplay.",
          },
        ],
        buttons: [
          {
            title: "Play Now 👉",
            url: "https://www.roblox.com/games/123662243100680/SpongeBob-Tower-Defense-Update-1",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    id: "feature",
    title: "Key Features of Spongebob Tower Defense",
    description:
      "Explore the powerful features that make Pagen the best choice for landing page creation.",
    items: [
      {
        title: "Diverse Characters",
        description:
          " The game features a wide range of characters from the SpongeBob universe, each with unique traits and abilities",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "Challenging Waves",
        description:
          "As players progress, they face increasingly difficult enemies that require strategic planning and resource management",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "Active Community",
        description:
          "Regular updates and community engagement through social media platforms provide players with new codes and game insights.",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "Visual Appeal",
        description:
          "The game captures the whimsical art style of SpongeBob SquarePants, making it visually engaging for fans.",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
    ],
  },
  cta: {
    title: "Can't wait to use Pagen?",
    description: "Just start from here, make your idea to be seen",
    buttons: [
      {
        title: "Try Now",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "What Users Say About SpongeBob Tower Defense",
    description:
      "Hear from our satisfied users who have played SpongeBob Tower Defense",
    items: [
      {
        name: "Mike Jordan",
        title: "Full-stack Developer",
        description:
          "This game is super fun! I started playing last week and can't put it down. The tower placement strategy is really engaging, and teaming up with friends makes it even better. Plus, the SpongeBob characters and animations are spot on!",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "Sarah Lee",
        title: "Marketing Manager",
        description:
          "Perfect game for quick breaks! I love how easy it is to jump in and play a few rounds. The different maps keep things interesting, and there's always a new strategy to try out. Definitely worth checking out!",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "Tom Smith",
        title: "Entrepreneur",
        description:
          "Never thought a tower defense game could be this addictive! The way they've incorporated SpongeBob characters into the gameplay is genius. I especially love upgrading my towers and trying different combinations. My kids love watching me play too!",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
      {
        name: "Emily Davis",
        title: "Content Creator",
        description:
          "Best tower defense game I've played in ages! The multiplayer mode is where it really shines - nothing beats defending Bikini Bottom with friends. The regular updates keep adding cool new features and towers to try out!",
        avatar: {
          src: "/imgs/user/4.png",
        },
      },
      {
        name: "John Doe",
        title: "Business Owner",
        description:
          "Great way to unwind after work! The difficulty ramps up nicely, and there's always a new challenge to tackle. Love how the developers keep adding new content and listening to player feedback.",
        avatar: {
          src: "/imgs/user/5.png",
        },
      },
      {
        name: "Lisa White",
        title: "Freelancer",
        description:
          "Such a fun twist on the tower defense genre! The special events are always exciting, and earning new characters keeps me coming back. If you're a SpongeBob fan or just love strategy games, you've got to try this!",
        avatar: {
          src: "/imgs/user/6.png",
        },
      },
    ],
  },
  faq: {
    id: "faq",
    title: "Common Questions About Spongebob Tower Defense",
    description: "Everything you need to know about playing Spongebob Tower Defense!",
    items: [
      {
        title: "What's Spongebob Tower Defense all about?",
        description: "It's a super fun Roblox game where you get to play with your favorite Spongebob characters! Your job is to protect Bikini Bottom by placing characters as defenders to stop the bad guys from getting through.",
      },
      {
        title: "How do I get started?",
        description: "Just hop onto Roblox, search for 'Spongebob Tower Defense', and hit Play! Don't worry if you're new - the game has a helpful tutorial that'll show you all the basics.",
      },
      {
        title: "How do the codes work?",
        description: "It's super easy! Just click the 'Codes' button in the main menu, type in a working code, and click 'Redeem'. Boom - free rewards!",
      },
      {
        title: "Where can I find working codes?",
        description: "The best way is to follow the game's social media accounts. You can also check gaming websites like Sportskeeda and Eurogamer - they usually post the newest codes right away!",
      },
      {
        title: "What cool stuff can I get from codes?",
        description: "All sorts of awesome things! You can get in-game money, special items, new characters to play with, and power-ups that'll help you progress faster. It's like getting free presents!",
      },
      {
        title: "Can I play with my friends?",
        description: "You bet! The game has multiplayer, so you and your friends can team up to defend Bikini Bottom together. It's way more fun with friends!",
      },
      {
        title: "How do I get new characters?",
        description: "There are lots of ways! You can earn them by playing the game and collecting coins, using codes, or completing special missions and challenges. Keep playing and you'll unlock more and more characters!",
      },
      {
        title: "Does the game get new stuff?",
        description: "All the time! The developers are always adding cool new things like levels, characters, challenges, and special events. There's always something new to check out!",
      },
      {
        title: "Got any tips for winning?",
        description: "Here's a pro tip: Start by making your basic towers stronger early in the game. Put your best characters where lots of enemies bunch up together, and mix up different types of towers - some to slow enemies down, others to deal big damage. And always keep some money saved up for emergencies!",
      },
      {
        title: "Do I need to pay to play?",
        description: "Nope! The game is totally free to download and play on Roblox. While you can buy some extra stuff to speed things up or get special characters, you don't need to spend anything to have fun!",
      },
      {
        title: "Which characters can I play with?",
        description: "All your Bikini Bottom favorites are here! You start with SpongeBob and Patrick, and can get awesome characters like karate expert Sandy, grumpy Squidward, and the money-obsessed Mr. Krabs. Each one has their own special abilities and can get stronger as you play. Keep an eye out for super rare characters like Mermaid Man and the crazy DoodleBob - you can unlock them through special events!",
      }
    ],
  },
  footer: {
    brand: {
      title: "SpongeBob Tower Defense",
      description:
        "Join SpongeBob and friends in the ultimate tower defense game of 2025! Strategically protect Bikini Bottom with endless updates and multiplayer fun.",
      avatar: {
        src: "/imgs/logo.png",
        title: "SpongeBob Tower Defense",
      },
      url: "https://pagen.so",
    },
    badge_disabled: false,
    copyright: "© 2025 • SpongeBob Tower Defense All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/aipagen",
          target: "_blank",
        },
        {
          title: "ProductHunt",
          url: "https://www.producthunt.com/posts/pagen",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/ZUSutBR4Pv",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/+PCy10CEWOvA3Zjdl",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@pagen.so",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "",
          children: [
            {
              title: "Video",
              url: "#video",
              target: "_self",
            },
            {
              title: "Features",
              url: "#feature",
              target: "_self",
            },
            {
              title: "FAQS",
              url: "#faq",
              target: "_self",
            }
          ],
        },
        // {
        //   title: "Friends",
        //   children: [
        //     {
        //       title: "ThinkAny",
        //       url: "https://thinkany.ai",
        //       target: "_blank",
        //     },
        //     {
        //       title: "HeyBeauty",
        //       url: "https://heybeauty.ai",
        //       target: "_blank",
        //     },
        //     {
        //       title: "GPTs Works",
        //       url: "https://gpts.works",
        //       target: "_blank",
        //     },
        //   ],
        // },
        {
          title: "Services",
          children: [
            {
              title: "Privacy Policy",
              url: "/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
  video: {
    id: "video",
    title: "Spongebob Tower Defense Video",
    description: "Watch this quick gameplay overview to see the exciting tower defense action in Bikini Bottom!",
    youtubeId: "tvfcLbLRdGs",
  },
  codes: {
    title: "Spongebob Tower Defense Codes",
    activeCodesDescription: "Here's a list of all active codes for SpongeBob Tower Defense. These codes don't have expiration dates, but they could become inactive at any time.",
    inactiveCodesDescription: "Unfortunately, the following codes for SpongeBob Tower Defense are no longer valid.",
    howTo: {
      title: "How to Redeem Codes",
      description: "You can easily redeem SpongeBob Tower Defense codes by following these simple steps:",
      description2: "You can watch the video below to easily learn how to redeem SpongeBob Tower Defense codes:",
      videoId: "0NorgWUChbk",
      image: {
        src: "/imgs/how-to-redeem-codes.png",
        alt: "How to redeem codes in Spongebob Tower Defense"
      },
      steps: [
        "Launch Spongebob Tower Defense in Roblox",
        "Click on the \"Codes\" button in the left menu",
        "Enter the code exactly as shown (codes are case-sensitive)",
        "Click \"Redeem\" to claim your rewards"
      ]
    },
    activeCodes: [
      {
        code: "OPCodeForReal",
        reward: "2000 Gems, 5 Magic Conches, and 5 Trait Rerolls"
      },
      {
        code: "ImReadyImReady",
        reward: "1000 Gems and 1 x2 Gems"
      },
      {
        code: "BoostJuice",
        reward: "10 Aged Patties, 2 x2 XP, and 1 x2 Gems"
      }
    ],
    expiredCodes: [
      {
        code: "100KGoofyGoobers",
        reward: "10 Pretty Patties, 5 Trait Rerolls, and 2 Magic Conches"
      },
      {
        code: "GemsOnGems",
        reward: "2000 Gems"
      },
      {
        code: "NowThisIsOP",
        reward: "5 Trait Rerolls and 2 Magic Conches"
      },
      {
        code: "OneUp",
        reward: "5 Pretty Patties, 3 Aged Patties, and x2 XP"
      },
      {
        code: "25KHooray",
        reward: "500 Gems, 3 Trait Rerolls, and 1 Magic Conch"
      }
    ],
    tips: [
      "Codes are case-sensitive, so enter them exactly as shown",
      "Active codes expire over time, so use them quickly",
      "Follow the official social media channels for new codes",
      "Each code can only be used once per account"
    ],
    usageDescription: "Trait Rerolls are Mythic resources that help boost your top units. You can get them through the free codes. Right now, there are eight different types of Trait Rerolls in the game, each offering a unique bonus. To find the Traits area, head into the Summon zone, walk into the Summon cave, and turn right. You’ll spot the red blip for Sandy Cheeks' Traits there.",
    usageDescription1: "Here are all the Trait types you can get using rerolls, along with the chances of obtaining each one:",
    usageImage: {
      src: "/imgs/trait-usage.png",
      alt: "trait-usage"
    },
    traitTypes: [
      "Strike - Increases unit's damage - 26%",
      "Reach - Increases unit's range - 26%",
      "Surge - Increases unit's attack speed - 26%",
      "Scholar - Increases unit's XP gain - 12%",
      "Pursuit - Greatly increases unit's range - 6%",
      "Wealth - Reduces unit's upgrade cost - 2.5%",
      "Vortex - Greatly increases unit's attack speed - 1%",
      "Secret Formula - Bikini Bottom's greatest and strongest mystery - 0.5%"
    ],
    fixDescription1: "If you try to use an inactive code, you'll see the \"Invalid Code!\" error message in the code box. Make sure to double-check the code for any typos or spelling mistakes before entering it and clicking the \"Redeem\" button",
    fixDescription2: "Roblox codes are case-sensitive, so it's best to copy and paste them rather than typing them manually to avoid any mistakes.",
    fixImage: {
      src: "/imgs/code-invalid.png",
      alt: "code-invalid"
    },
    findDescription1: "You can find new codes by following the official SpongeBob Tower Defense social media channels. We'll post new codes there as soon as they're available.",
    socialLinks: [
      {
        title: "Roblox official page",
        url: "https://www.roblox.com/games/123662243100680/SpongeBob-Tower-Defense",
        icon: "🎮"
      }
    ]
  },
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "January 07, 2025",
    sections: [
      {
        title: "Introduction",
        content: "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.\n\nWe use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator."
      },
      {
        title: "Interpretation and Definitions",
        content: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        subsections: [
          {
            title: "Interpretation",
            content: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
          },
          {
            title: "Definitions",
            content: "For the purposes of this Privacy Policy:",
            items: [
              "<strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.",
              "<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
              "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to spongebob tower defense.",
              "<strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
              "<strong>Country</strong> refers to: China",
              "<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
              "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
              "<strong>Service</strong> refers to the Website.",
              "<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
              "<strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
              "<strong>Website</strong> refers to spongebob tower defense, accessible from <a href=\"https://spongebobtowerdefense.cc/\" rel=\"external nofollow noopener\" target=\"_blank\">https://spongebobtowerdefense.cc/</a>",
              "<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
            ]
          }
        ]
      },
      {
        title: "Collecting and Using Your Personal Data",
        subsections: [
          {
            title: "Types of Data Collected",
            subsections: [
              {
                title: "Personal Data",
                content: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
                items: [
                  "Email address",
                  "Usage Data"
                ]
              },
              {
                title: "Usage Data",
                content: "Usage Data is collected automatically when using the Service.\n\nUsage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.\n\nWhen You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.\n\nWe may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."
              },
              {
                title: "Tracking Technologies and Cookies",
                content: "We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:",
                items: [
                  "<strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.",
                  "<strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity)."
                ],
                additionalContent: "Cookies can be \"Persistent\" or \"Session\" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href=\"https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking\" target=\"_blank\">Free Privacy Policy website</a> article.\n\nWe use both Session and Persistent Cookies for the purposes set out below:",
                cookieTypes: [
                  {
                    title: "Necessary / Essential Cookies",
                    type: "Session Cookies",
                    admin: "Us",
                    purpose: "These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services."
                  },
                  {
                    title: "Cookies Policy / Notice Acceptance Cookies",
                    type: "Persistent Cookies",
                    admin: "Us",
                    purpose: "These Cookies identify if users have accepted the use of cookies on the Website."
                  },
                  {
                    title: "Functionality Cookies",
                    type: "Persistent Cookies",
                    admin: "Us",
                    purpose: "These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website."
                  }
                ]
              }
            ]
          },
          {
            title: "Use of Your Personal Data",
            content: "The Company may use Personal Data for the following purposes:",
            items: [
              "<strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.",
              "<strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
              "<strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
              "<strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
              "<strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
              "<strong>To manage Your requests:</strong> To attend and manage Your requests to Us.",
              "<strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
              "<strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience."
            ]
          }
        ]
      },
      {
        title: "Sharing of Your Personal Data",
        content: "We may share Your personal information in the following situations:",
        items: [
          "<strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
          "<strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
          "<strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
          "<strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.",
          "<strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
          "<strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent."
        ]
      },
      {
        title: "Retention of Your Personal Data",
        content: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.\n\nThe Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods."
      },
      {
        title: "Transfer of Your Personal Data",
        content: "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.\n\nYour consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.\n\nThe Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information."
      },
      {
        title: "Delete Your Personal Data",
        content: "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.\n\nOur Service may give You the ability to delete certain information about You from within the Service.\n\nYou may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.\n\nPlease note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so."
      },
      {
        title: "Disclosure of Your Personal Data",
        subsections: [
          {
            title: "Business Transactions",
            content: "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy."
          },
          {
            title: "Law enforcement",
            content: "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency)."
          },
          {
            title: "Other legal requirements",
            content: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
            items: [
              "Comply with a legal obligation",
              "Protect and defend the rights or property of the Company",
              "Prevent or investigate possible wrongdoing in connection with the Service",
              "Protect the personal safety of Users of the Service or the public",
              "Protect against legal liability"
            ]
          }
        ]
      },
      {
        title: "Security of Your Personal Data",
        content: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."
      },
      {
        title: "Children's Privacy",
        content: "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.\n\nIf We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information."
      },
      {
        title: "Links to Other Websites",
        content: "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.\n\nWe have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."
      },
      {
        title: "Changes to this Privacy Policy",
        content: "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.\n\nWe will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.\n\nYou are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."
      },
      {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, You can contact us:",
        items: [
          "By email: hi@spongebobtowerdefense.cc"
        ]
      }
    ]
  },
  termsOfService: {
    title: "Terms and Conditions",
    lastUpdated: "January 07, 2025",
    sections: [
      {
        title: "Introduction",
        content: "Please read these terms and conditions carefully before using Our Service."
      },
      {
        title: "Interpretation and Definitions",
        subsections: [
          {
            title: "Interpretation",
            content: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
          },
          {
            title: "Definitions",
            content: "For the purposes of these Terms and Conditions:",
            items: [
              "<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
              "<strong>Country</strong> refers to: China",
              "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to Spongebob Tower Defense.",
              "<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
              "<strong>Service</strong> refers to the Website.",
              "<strong>Terms and Conditions</strong> (also referred as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <a href=\"https://www.freeprivacypolicy.com/free-terms-and-conditions-generator/\" target=\"_blank\">Free Terms and Conditions Generator</a>.",
              "<strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
              "<strong>Website</strong> refers to Spongebob Tower Defense, accessible from <a href=\"https://spongebobtowerdefense.cc\" rel=\"external nofollow noopener\" target=\"_blank\">https://spongebobtowerdefense.cc</a>",
              "<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
            ]
          }
        ]
      },
      {
        title: "Acknowledgment",
        content: "These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.\n\nYour access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.\n\nBy accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.\n\nYou represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.\n\nYour access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service."
      },
      {
        title: "Links to Other Websites",
        content: "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.\n\nThe Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.\n\nWe strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit."
      },
      {
        title: "Termination",
        content: "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.\n\nUpon termination, Your right to use the Service will cease immediately."
      },
      {
        title: "Limitation of Liability",
        content: "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.\n\nTo the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\n\nSome states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."
      },
      {
        title: "\"AS IS\" and \"AS AVAILABLE\" Disclaimer",
        content: "The Service is provided to You \"AS IS\" and \"AS AVAILABLE\" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.\n\nWithout limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.\n\nSome jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law."
      },
      {
        title: "Governing Law",
        content: "The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws."
      },
      {
        title: "Disputes Resolution",
        content: "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company."
      },
      {
        title: "For European Union (EU) Users",
        content: "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident."
      },
      {
        title: "United States Legal Compliance",
        content: "You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a \"terrorist supporting\" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties."
      },
      {
        title: "Severability and Waiver",
        subsections: [
          {
            title: "Severability",
            content: "If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect."
          },
          {
            title: "Waiver",
            content: "Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach."
          }
        ]
      },
      {
        title: "Translation Interpretation",
        content: "These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute."
      },
      {
        title: "Changes to These Terms and Conditions",
        content: "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.\n\nBy continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service."
      },
      {
        title: "Contact Us",
        content: "If you have any questions about these Terms and Conditions, You can contact us:",
        items: [
          "By email: hi@spongebobtowerdefense.cc"
        ]
      }
    ]
  }
};
