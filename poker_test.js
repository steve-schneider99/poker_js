// Cards will be numbered 1-13(J=11, Q=12, K=13, A=1)
// Suits will be represented by letter(Club=C, Spade=S, Heart=H, Diamond=D)

//test array
var hand = ["d1", "c3", "h6", "s6", "s13"];

function hand_strength(hand) {
  var flush = is_flush(hand);

}

function is_flush(hand) {
  var suits = [];
  // "myCards" is passed in as an array of 5 strings, each string contains 1 letter and 1-2 numbers. Letter is always first
  for (i=0; i < hand.length; i++) {
    //separate suit for flush/straight flush/royal possibilities
    suits.push(hand[i].charAt(0));
  }
  suits.sort();
  if (suits[0] === suits[-1]) {
    return true
  } else {
    return false
  }
}

function is_num_hand(hand) {
  var values = [];
  // grabs value
  for (i=0; i < hand.length; i++) {
    values.push(hand[i].slice(1,3));
  }
  values.sort();

  if (values[0] === values[3]) || (value[1] === values[4]) {
    //confirms 4 of a kind by seeing if 1st and 4th value match, or 2 and 5th value match
    return [4, values[2]]
  } else if (values[0] === values[2]) || (values[1] === values[3]) || (values[2] === values[4]) {
    //confirms 3 of a kind by checking if 1st and 3rd, 2nd and 4th, or 3rd and 5th cards match
    return [3, values[2]]
  }

}
