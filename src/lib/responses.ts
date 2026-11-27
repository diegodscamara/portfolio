export const markdown = (body: string) => new Response(body, { headers: { "content-type": "text/markdown; charset=utf-8" } })
