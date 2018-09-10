function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1
	}

	let i = s.length - 1
	let aIndex = bIndex = -1

	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
    let substr = s.substring(i, i++)

    if (substr == a) aIndex = i
    if (substr == b) bIndex = i

    i--
	}

	if (aIndex != -1) {
    if (bIndex == -1) return aIndex
    else return Math.max(aIndex, bIndex)
	}

	if (bIndex != -1) return bIndex
	else return -1
}
