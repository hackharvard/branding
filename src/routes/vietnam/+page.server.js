import { redirect } from '@sveltejs/kit'

/**
 * Redirect /vietnam to LotusHacks PDF
 */
export function load() {
  throw redirect(307, 'https://drive.google.com/file/d/1Sy602C4KxAf5Rtfkl0AVzKCa4d6a2B-t/view?usp=sharing')
}
