const calculateHTML = `
                <div class='row'>
                    <div v-data='char' @click='getSymbol' class='row__btn' v-for='char in chars'>
                        <p>{{char}}</p>
                      </div>
                </div>
                   `

const rows = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, '.', '=']
]