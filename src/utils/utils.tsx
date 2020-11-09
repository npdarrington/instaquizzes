export const randomizeAnswer = (answers: string[]) => {
  Math.floor(Math.random() * answers.length);
}
