export function getTime(date) {
    date = new Date(date);
    const hourStart = date.getHours();
    const MinStart = date.getMinutes();
    const hourend = new Date().getHours();
    const Minend = new Date().getMinutes();
    return {
        hour: hourend - hourStart,
        min : Minend - MinStart
    }
}