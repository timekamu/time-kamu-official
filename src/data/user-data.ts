export interface UserData {
  id: string;
  name: string;
  avatar: string;
  message: string;
  role: string;
}

export const userData: UserData[] = [
  {
    id: "video-editing",
    name: "Video Editing",
    avatar: "/gallery/video-editing.png",
    message: "Transforming raw footage into cinematic visual stories with professional editing, smooth transitions and visual effects.",
    role: "TIME KAMU • Creative Service",
  },
  {
    id: "2d-animation",
    name: "2D Animation",
    avatar: "/gallery/2d-animation.png",
    message: "Bringing imagination to life through expressive animation, character design and visual storytelling.",
    role: "TIME KAMU • Animation",
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    avatar: "/gallery/graphic-design.png",
    message: "Creating stunning thumbnails, posters, digital artwork and unique visual identities.",
    role: "TIME KAMU • Design Studio",
  },
  {
    id: "motion-graphics",
    name: "Motion Graphics",
    avatar: "/gallery/motion-graphics.png",
    message: "Combining dynamic typography, motion effects and creative transitions to create engaging visuals.",
    role: "TIME KAMU • Motion Design",
  },
  {
    id: "creative-projects",
    name: "Creative Projects",
    avatar: "/gallery/creative-projects.png",
    message: "Exploring original ideas, experimental visuals and imaginative projects crafted with passion.",
    role: "TIME KAMU • Creative Vision",
  },
];
