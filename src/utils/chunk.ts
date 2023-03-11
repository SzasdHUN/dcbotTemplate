export function chunk<T>(items: T[], chunk: number): T[][] {
    const chunks: T[][] = []
    
    for(let i = 0; i < items.length; i++) {
        chunks.push(items.slice(i, i+ chunk));
    }
    
    return chunks;
}