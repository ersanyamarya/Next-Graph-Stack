const dateAfter48Hours = (): Date => {
  const date = new Date()
  date.setHours(date.getHours() + 48)
  return date
}

export { dateAfter48Hours }
