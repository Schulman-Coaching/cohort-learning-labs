/** Only non-personal campaign tags are forwarded to Calendly. No cookies or local storage. */
export type CampaignParams = Record<string, string | string[] | undefined>
export function campaignQuery(params: CampaignParams): string {
  const clean = new URLSearchParams()
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content']) {
    const value = params[key]
    if (typeof value === 'string' && /^[a-z0-9_-]{1,80}$/i.test(value)) clean.set(key, value)
  }
  return clean.toString()
}
export function bookingHref(params: CampaignParams): string {
  const query = campaignQuery(params)
  return `/contact${query ? `?${query}` : ''}#book`
}
