import {
  Search,
  Shield,
  Users,
  Wallet,
  Zap,
  Smartphone,
  Rocket,
  Building2,
  UtensilsCrossed,
  Camera,
  MessageCircle,
  ClipboardList,
  Code2,
  CheckCircle2,
  Clock,
  BadgeDollarSign,
  Sparkles,
  MapPin,
  Lock,
  Headphones,
  Star,
  Plus,
  Minus,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Search,
  Shield,
  Users,
  Wallet,
  Zap,
  Smartphone,
  Rocket,
  Building2,
  UtensilsCrossed,
  Camera,
  MessageCircle,
  ClipboardList,
  Code2,
  CheckCircle2,
  Clock,
  BadgeDollarSign,
  Sparkles,
  MapPin,
  Lock,
  Headphones,
  Star,
  Plus,
  Minus,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
};

type Props = {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ name, className, size = 24, strokeWidth = 1.6 }: Props) {
  const Cmp = registry[name];
  if (!Cmp) return null;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} />;
}
