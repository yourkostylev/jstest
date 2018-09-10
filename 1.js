function drawRating(vote) {
  if (vote >= 0 && vote <= 100) {
    const FILLED = '★'
    const EMPTY = '☆'
    const ROW_LENGTH = 5

    let filledAmount = Math.round((vote / 100) * ROW_LENGTH)
    filledAmount = filledAmount > 0 ? filledAmount : 1
    let emptyAmount = ROW_LENGTH - filledAmount
    let rating = []

    for (let i = 0; i < filledAmount; i++) rating.push(FILLED)
    for (let i = 0; i < emptyAmount; i++) rating.push(EMPTY)

    return rating.join('')
  } else return undefined
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
console.log(drawRating(105)); // invalid value
