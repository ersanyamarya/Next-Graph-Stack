export function randomTokenGenerate(length: number): string {
  let token = ''
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    token += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
  }

  return token
}
