import AdobeAnimate from "@/icons/react/AdobeAnimate";
import AfterEffects from "@/icons/react/AfterEffects";
import Audition from "@/icons/react/Audition";
import AutodeskMaya from "@/icons/react/AutodeskMaya";
import Blender from "@/icons/react/Blender";
import CharacterAnimator from "@/icons/react/CharacterAnimator";
import DaVinciResolve from "@/icons/react/DaVinciResolve";
import FinalCut from "@/icons/react/FinalCut";
import Illustrator from "@/icons/react/Ilustrator";
import InDesign from "@/icons/react/InDesign";
import Lightroom from "@/icons/react/Lightroom";
import Photoshop from "@/icons/react/Photoshop";
import PremierePro from "@/icons/react/PremierePro";
import Sketchup from "@/icons/react/Sketchup";
import SonyVegas from "@/icons/react/SonyVegas";
import type { Skill, SkillLevel } from "@/types/skills.type";

export const colors = {
  beginner: "bg-[#809bce] font-semibold",
  intermediate: "bg-[#8fc0a9] font-semibold",
  advanced: "bg-[#d5c6e0] font-semibold"
};

export const levels: SkillLevel[] = [
  { description: "beginner", color: colors.beginner },
  { description: "intermediate", color: colors.intermediate },
  { description: "advanced", color: colors.advanced }
];

export const skills: Skill[] = [
  { name: "Sketchup", icon: Sketchup, level: "beginner" },
  { name: "Autodesk Maya", icon: AutodeskMaya, level: "beginner" },
  { name: "Blender", icon: Blender, level: "beginner" },
  { name: "DaVinci Resolve", icon: DaVinciResolve, level: "beginner" },
  { name: "Premiere Pro", icon: PremierePro, level: "intermediate" },
  { name: "Final cut", icon: FinalCut, level: "intermediate" },
  { name: "Lightroom", icon: Lightroom, level: "intermediate" },
  { name: "InDesign", icon: InDesign, level: "intermediate" },
  { name: "Audition", icon: Audition, level: "intermediate" },
  { name: "Adobe animate", icon: AdobeAnimate, level: "intermediate" },
  { name: "Character animator", icon: CharacterAnimator, level: "intermediate" },
  { name: "Sony vegas", icon: SonyVegas, level: "intermediate" },
  { name: "Photoshop", icon: Photoshop, level: "advanced" },
  { name: "Illustrator", icon: Illustrator, level: "advanced" },
  { name: "After Effects", icon: AfterEffects, level: "advanced" }
];
