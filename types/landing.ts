export interface Page {
  template: string;
  theme: string;
  header: Header;
  hero: Hero;
  section: Section;
  feature: Feature;
  cta?: Section;
  testimonial: Section;
  faq?: Section;
  footer: Footer;
  video: Video;
  codes: Codes;
  privacyPolicy: PrivacyPolicy;
  termsOfService: TermsOfService;
  usercase?: Section;
}

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export interface User {
  name?: string;
  email?: string;
  avatar?: Image;
  url?: string;
  target?: string;
  items?: Item[];
}

export interface Header {
  brand?: Brand;
  nav?: Nav;
  login_button?: Button;
  buttons?: Button[];
  disabled?: boolean;
}

export interface Hero {
  title?: string;
  description?: string;
  image?: Image;
  video?: Video;
  tip?: string;
  primary_button?: Button;
  secondary_button?: Button;
  image_position?: ImagePosition;
  text_align?: TextAlign;
  buttons?: Button[];
  show_happy_users?: boolean;
  highlight_text?: string;
  disabled?: boolean;
  show_proof?: boolean;
}
export interface Section extends Item {}


export interface Footer {
  brand?: Brand;
  social?: Social;
  navs?: Nav[];
  copyright?: string;
  qrcode?: Image;
  nav?: Nav;
  buttons?: Button[];
  disabled?: boolean;
  badge_disabled?: boolean;
}

export interface Nav {
  title?: string;
  items: Item[];
}

export interface Item {
  id?: string;
  name?: string;
  title?: string;
  description?: string;
  content?: string;
  type?: string;
  url?: string;
  target?: string;
  icon?: JSX.Element;
  avatar?: Image;
  image?: Image;
  video?: Video;
  theme?: string;
  children?: Item[];
  tip?: string;
  button?: Button;
  image_position?: ImagePosition;
  text_align?: TextAlign;
  items?: Item[];
  buttons?: Button[];
  disabled?: boolean;
  label?: string;
}

export interface Image {
  src: string;
  title?: string;
  status?: string;
}

export interface Video {
  id?: string;
  title: string;
  description: string;
  youtubeId: string;
  disabled?: boolean;
}

export interface Button extends Item {
  theme?: string;
}

export interface Brand {
  title?: string;
  description?: string;
  avatar?: Image;
  url?: string;
}

export interface Social {
  title?: string;
  description?: string;
  items?: Item[];
}

export type ImagePosition = "right" | "left" | "center" | undefined;

export type TextAlign = "left" | "center" | undefined;

export interface Codes {
  title: string;
  activeCodesDescription: string;
  inactiveCodesDescription: string; 
  howTo: {
    title: string;
    description: string;
    description2: string;
    videoId: string;
    image?: {
      src: string;
      alt: string;
    };
    steps: string[];
  };
  activeCodes: CodeReward[];
  expiredCodes: CodeReward[];
  tips: string[];
  usageDescription: string;
  usageDescription1: string;
  usageImage: { 
    src: string;
    alt: string;
  };
  traitTypes: string[];
  fixDescription1: string;
  fixDescription2: string;
  fixImage: { 
    src: string;
    alt: string;
  };
  findDescription1: string;
  socialLinks: {
    title: string;
    url: string;
    icon: string;
  }[];
}

export interface CodeReward {
  code: string;
  reward: string;
}

export interface PrivacyPolicySection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: PrivacyPolicySection[];
  additionalContent?: string;
  cookieTypes?: {
    title: string;
    type: string;
    admin: string;
    purpose: string;
  }[];
}

export interface PrivacyPolicy {
  title: string;
  sections: PrivacyPolicySection[];
  lastUpdated: string;
}

interface TermsOfServiceSection {
  title: string;
  content?: string;
  items?: string[];
  subsections?: TermsOfServiceSection[];
}

export interface TermsOfService {
  title: string;
  lastUpdated: string;
  sections: TermsOfServiceSection[];
}

export interface Feature extends Section {
  // Feature 特有的属性可以在这里添加
}
