import parse from 'html-react-parser'
import type { DOMNode } from 'html-react-parser'
import Image from 'next/image'

interface ConvertBodyProps {
	contentHTML: string
}

export default function ConvertBody({ contentHTML }: ConvertBodyProps) {
	const contentReact = parse(contentHTML, {
		replace: (node: DOMNode) => {
			if ('name' in node && node.name === 'img' && 'attribs' in node) {
				const { src, alt, width, height } = node.attribs
				return (
					<Image
						layout="responsive"
						src={src}
						width={parseInt(width, 10) || 0}
						height={parseInt(height, 10) || 0}
						alt={alt}
						sizes="(min-width: 768px) 768px, 100vw"
					/>
				)
			}
		},
	})
	return <>{contentReact}</>
}
