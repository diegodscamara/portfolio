import type { Locale } from "../config"
import { en, type Dictionary } from "./en"
import { es } from "./es"
import { fr } from "./fr"
import { pt } from "./pt"

const dictionaries: Record<Locale, Dictionary> = { en, pt, fr, es }

export const getDictionary = (locale: Locale) => dictionaries[locale]
export type { Dictionary }
