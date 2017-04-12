function getInput() {
    var input = $('textarea').val()
    return input
}

function calcUniqueWords(array) {
    // http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
    var uniqueList = array.filter(function(item, pos) {
        return array.indexOf(item) == pos;
    })
    return uniqueList.length
}

function getAverageLength(array) {
    var total = 0
    for(i=0; i < array.length; i++) {
        total += array[i].length
    }
    return total / array.length
}

function modifyHTML(wordCount, words, average) {
    $('.text-report').removeClass('hidden')
    $('.js-word-count').text(wordCount)
    $('.js-unique-words-count').text(words)
    $('.js-average-word-length').text(average)
}

$(document).ready(function() {
    $('form').on('submit', function(event) {
        var userInput = getInput()
        var splitInput = userInput.split(" ")
        var splitInputLength = splitInput.length
        var uniqueWords = calcUniqueWords(splitInput)
        var average = getAverageLength(splitInput)

        modifyHTML(splitInputLength, uniqueWords, average)

        return false
    })
}) //end of document.ready()
