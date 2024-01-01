import zod from 'zod'

export const isEmail = zod.string().email("Valid email required")
