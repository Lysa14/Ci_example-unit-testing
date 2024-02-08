export function ft_division(str: string, nb: number): number {
    const sz = str.length;

    if (sz == 0 || nb == 0) {
        return (0);
    }
    return (sz / nb);
}