
interface DayTime {
    day: string;
    time: string
}

export function titlize(text: string): string {
    return text.split('_').map((word: string) => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

export function formatTime(rawDate: string): DayTime {
    let date = new Date(rawDate);
    let day = date.toLocaleString('default', { day: 'numeric', month: 'short', year: 'numeric' });
    let time = date.toLocaleString('default', { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' });
    return {
        day,
        time,
    }
}
