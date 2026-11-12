
export interface UserData {
  id: string;
  name: string;
  avatar: string;
  message: string;
  role: string;
  vimeoId?: string;
}

export const userData: UserData[] = [
  {
    id: "video-editing",
    name: "Video Editing",
    avatar: "/testimonials/placeholder-1.png",
    message:
      "Transforming raw footage into engaging visual stories with cinematic cuts, smooth transitions, creative effects and professional finishing.",
    role: "TIME KAMU • Creative Service",
  },
  {
    id: "2d-animation",
    name: "2D Animation",
    avatar: "/testimonials/placeholder-2.png",
    message:
      "Bringing ideas to life through expressive 2D animation, character movement, storytelling and imaginative visual sequences.",
    role: "TIME KAMU • Creative Service",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    avatar: "/testimonials/placeholder-3.png",
    message:
      "Creating eye-catching graphics, thumbnails, social media designs and visual identities that make every idea stand out.",
    role: "TIME KAMU • Creative Service",
  },
  {
    id: "motion-design",
    name: "Motion Design",
    avatar: "/testimonials/placeholder-4.png",
    message:
      "Combining typography, movement, visual effects and creative transitions to produce dynamic motion graphics.",
    role: "TIME KAMU • Creative Service",
  },
  {
    id: "creative-storytelling",
    name: "Creative Storytelling",
    avatar: "/testimonials/placeholder-5.png",
    message:
      "Every frame has a purpose. Turning imagination into meaningful visual experiences through creativity and attention to detail.",
    role: "TIME KAMU • Creative Vision",
  },
];
