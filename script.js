const currentUTCTime = document.querySelector('[data-testid="curentUTCTime"]')

const currentUTCTimeInMilliseconds = new Date().getTime()

currentUTCTime.textContent = currentUTCTimeInMilliseconds
