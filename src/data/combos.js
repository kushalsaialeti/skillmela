export const combos = [
    {
        id: '1st-year',
        title: '1ST YEAR ESSENTIALS',
        subtitle: '1st Year Combo',
        price: 199,
        originalPrice: 276,
        savings: 77,
        color: 'purple',
        workshops: [
            {
                id: 'domains',
                name: 'Domains Workshop',
                included: true
            },
            {
                id: 'ai-tools',
                name: 'AI Tools Mastery',
                included: true
            },
            {
                id: 'photoshop',
                name: 'Photoshop Pro',
                included: true
            },
            {
                id: 'culturals',
                name: 'Culturals Access',
                included: true
            }
        ],
        benefits: [
            'Foundation for tech career',
            'AI-powered productivity',
            'Creative design skills',
            'Cultural event access'
        ],
        ideal: 'Perfect for 1st year students starting their tech journey'
    },
    {
        id: 'pro-track',
        title: 'PRO TRACK (2ND & 3RD YR)',
        subtitle: 'Advanced Developer Path',
        price: 199,
        originalPrice: 276,
        savings: 77,
        color: 'cyan',
        workshops: [
            {
                id: 'dsa',
                name: 'DSA Mastery',
                included: true
            },
            {
                id: 'github',
                name: 'GitHub & Version Control',
                included: true
            },
            {
                id: 'photoshop',
                name: 'Photoshop Pro',
                included: true
            },
            {
                id: 'culturals',
                name: 'Culturals Access',
                included: true
            }
        ],
        benefits: [
            'Interview preparation',
            'Professional collaboration',
            'Portfolio building',
            'Cultural networking'
        ],
        ideal: 'Designed for 2nd & 3rd year students preparing for placements'
    }
];

export const getComboById = (id) => {
    return combos.find(combo => combo.id === id);
};
