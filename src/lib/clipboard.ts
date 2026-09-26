export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Clipboard is blocked on insecure origins and some embedded browsers.
    console.warn("Clipboard write failed", err)
    return false
  }
}
