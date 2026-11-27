import { manifest } from "@/lib/seo"

export const GET = () => Response.json(manifest())
