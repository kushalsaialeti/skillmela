export const culturals = [
    {
        id: 'beatbox',
        title: 'BEATBOX BATTLE',
        description: 'Vocal percussion showdown',
        date: 'FEB 15',
        time: '18:00',
        venue: 'MAIN STAGE',
        category: 'MUSIC',
        icon: '🎤'
    },
    {
        id: 'digital-art',
        title: 'DIGITAL ART',
        description: 'Live digital illustration',
        date: 'FEB 16',
        time: '14:00',
        venue: 'ART LAB',
        category: 'VISUAL',
        icon: '🎨'
    },
    {
        id: 'code-jam',
        title: 'CODE JAM',
        description: '24-hour hackathon',
        date: 'FEB 17',
        time: '09:00',
        venue: 'TECH HUB',
        category: 'TECH',
        icon: '💻'
    },
    {
        id: 'standup',
        title: 'STANDUP OPEN MIC',
        description: 'Comedy night sessions',
        date: 'FEB 18',
        time: '19:00',
        venue: 'AUDITORIUM',
        category: 'PERFORMANCE',
        icon: '🎭'
    }
];

export const getCulturalById = (id) => {
    return culturals.find(cultural => cultural.id === id);
};
