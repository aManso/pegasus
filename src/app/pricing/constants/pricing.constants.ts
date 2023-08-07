export type PRICING_TYPES_TYPE = 'BASIC' | "STANDARD" | "PREMIUM"

export interface PRICING_TYPES_INTERFACE {[key: string]: PRICING_TYPES_TYPE}

export const PRICING_TYPES: PRICING_TYPES_INTERFACE = {
    BASIC: 'BASIC',
    STANDARD: 'STANDARD',
    PREMIUM: 'PREMIUM',
}

export const PRICING_DETAILS_URL = '/details';
export const PRICING_SELECT_URL = '/select';