/*
 * This function is used to dinamically generate darken hover color based on a color 
*/

export function lightenOrFade(hex: string, opacity = 0.2) {
    // Convert hex to rgba
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}