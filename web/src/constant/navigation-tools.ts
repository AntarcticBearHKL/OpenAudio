import { Music2 } from "lucide-react";

export const navigationTools = [
    {
        slug: "audio",
        icon: Music2,
    },
] as const;

export type NavigationToolSlug = (typeof navigationTools)[number]["slug"];
