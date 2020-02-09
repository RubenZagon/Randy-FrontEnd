export function uniqueId(): string {
  let chars: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return 'xxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, (c) => {
    return chars.charAt(Math.random() * 37);
  })
}
