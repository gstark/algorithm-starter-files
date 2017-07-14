/*** 1 ***/
let expectedArrayCombos = [
  [ 'a', 'a' ], [ 'a', 'b' ], [ 'a', 'c' ], [ 'a', 'd' ],
  [ 'b', 'a' ], [ 'b', 'b' ], [ 'b', 'c' ], [ 'b', 'd' ],
  [ 'c', 'a' ], [ 'c', 'b' ], [ 'c', 'c' ], [ 'c', 'd' ],
  [ 'd', 'a' ], [ 'd', 'b' ], [ 'd', 'c' ], [ 'd', 'd' ]
]

QUnit.config.collapse = true
QUnit.test("arrayCombos", function(assert) {
  assert.deepEqual(arrayCombos(), expectedArrayCombos)
})


/*** 2 ***/
let expectedNavigateRushHour500  = "The time of day is 500, I'm going through the city.",
    expectedNavigateRushHour800  = "The time of day is 800, I'm going around the city.",
    expectedNavigateRushHour1700 = "The time of day is 1700, I'm going around the city.",
    expectedNavigateRushHour2000 = "The time of day is 2000, I'm going through the city."

QUnit.test("navigateRushHour", function(assert) {
  assert.deepEqual(navigateRushHour(500),  expectedNavigateRushHour500,  'navigateRushHour(500)')
  assert.deepEqual(navigateRushHour(800),  expectedNavigateRushHour800,  'navigateRushHour(800)')
  assert.deepEqual(navigateRushHour(1700), expectedNavigateRushHour1700, 'navigateRushHour(1700)')
  assert.deepEqual(navigateRushHour(2000), expectedNavigateRushHour2000, 'navigateRushHour(1800)')
})



/*** 3 ***/
QUnit.test("factorial", function(assert) {
  assert.deepEqual(factorial(2), 2,   'factorial(2)')
  assert.deepEqual(factorial(4), 24,  'factorial(4)')
  assert.deepEqual(factorial(6), 720, 'factorial(6)')
})


/*** 4 ***/
QUnit.test("interp", function(assert) {
  assert.deepEqual(interpolate(1, 2, 4), [1, 1.25, 1.5, 1.75, 2], 'interpolate(1, 2, 4)')
})
