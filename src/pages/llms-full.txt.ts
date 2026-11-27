import { en } from "@/i18n/dictionaries/en"
import { llmsFull } from "@/lib/llms"
import { markdown } from "@/lib/responses"

// Durations like "1 yr 2 mos" are computed at build time; rebuild to refresh them.
export const GET = () => markdown(llmsFull(en))
