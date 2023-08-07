import { PrincingDetailsInterface } from "../contracts/pricing.contracts";

export const PRICING_DETAILS_MOCK = {
    BASIC: {
        price: '9',
        isMostPopular: false,
        includedFeatures: [
            'All standard elements included',
            'Over 1800 Components',
            'Best Figma techniques'
        ],
        nonIncludedFeatures: [
            'Up to 10 design editors',
            'Email support'
        ]
    } as PrincingDetailsInterface,
    STANDARD: {
        price: '19',
        isMostPopular: true,
        includedFeatures: [
            'All standard elements included',
            'Over 1800 Components',
            'Best Figma techniques',
            'Up to 10 design editors',
            'Email support'
        ]
    } as PrincingDetailsInterface,
    PREMIUM: {
        price: '29',
        isMostPopular: false,
        includedFeatures: [
            'All standard elements included',
            'Over 1800 Components',
            'Best Figma techniques',
            'Up to 10 design editors',
            'Email support'
        ]
    } as PrincingDetailsInterface,
}