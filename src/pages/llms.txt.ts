import { en } from "@/i18n/dictionaries/en"
import { llmsIndex } from "@/lib/llms"
import { markdown } from "@/lib/responses"

export const GET = () => markdown(llmsIndex(en))
