export const isUrl = (str: string) => {
    try {
        new URL(str);
        return true;
    } catch (e) {
        return false;
    }
}