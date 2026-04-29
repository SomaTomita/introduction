type LogLevel = 'info' | 'warn' | 'error'

function emit(level: LogLevel, scope: string, message: string, error?: unknown): void {
	if (process.env.NODE_ENV === 'test') {
		return
	}

	const payload = {
		level,
		scope,
		message,
		...(error instanceof Error
			? { error: { name: error.name, message: error.message, stack: error.stack } }
			: error !== undefined
				? { error }
				: {}),
	}

	if (level === 'error') {
		console.error(JSON.stringify(payload))
	} else if (level === 'warn') {
		console.warn(JSON.stringify(payload))
	} else {
		console.info(JSON.stringify(payload))
	}
}

export const logger = {
	info: (scope: string, message: string) => emit('info', scope, message),
	warn: (scope: string, message: string, error?: unknown) => emit('warn', scope, message, error),
	error: (scope: string, message: string, error?: unknown) => emit('error', scope, message, error),
}
