import { parseISO, format } from 'date-fns'
import { ja } from 'date-fns/locale'

interface ConvertDateProps {
	dateISO: string
}

export default function ConvertDate({ dateISO }: ConvertDateProps) {
	return (
		<time dateTime={dateISO}>
			{format(parseISO(dateISO), 'yyyy\u5E74MM\u6708dd\u65E5', {
				locale: ja,
			})}
		</time>
	)
}
