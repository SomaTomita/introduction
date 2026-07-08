import { useRouter } from 'next/router'
import { dictionaries, type Dictionary } from './dictionary'
import { resolveLocale } from './i18n'

export function useDictionary(): Dictionary {
	const { locale } = useRouter()
	return dictionaries[resolveLocale(locale)]
}
