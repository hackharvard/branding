import { redirect } from '@sveltejs/kit'

/**
 * Redirect /india to the Ashoka brochure PDF
 */
export function load() {
  throw redirect(307, 'https://drive.google.com/file/d/1P7PkhxhnTS4_NUaMsWmm9DgmTnQ_uKGl/view')
}
