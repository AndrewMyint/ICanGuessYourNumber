import ClinkedList from "./ClinkedList";

ClinkedList.prototype.createNode = function (id) {
  var newNode = {};
  newNode.id = id;
  newNode.card = [];
  newNode.next = null;
  newNode.previous = null;
  return newNode;
};

ClinkedList.prototype.push = function (id) {
  var newNode = this.createNode(id);
  if (!this.head) {
    newNode.next = newNode.previous = newNode;
    this.head = newNode;
  } else {
    var last = this.head.previous;
    newNode.next = this.head;
    newNode.previous = last;
    last.next = newNode;
    this.head.previous = newNode;
  }
};

const generateRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const randomize = (array) => {
  var num = generateRandomNum(1, 200);
  if (array.includes(num)) {
    num = randomize(array);
  }
  return num;
};

function createCLink() {
  var Clink = new ClinkedList();
  Clink.push(1);
  Clink.push(2);
  Clink.push(3);
  return Clink.head;
}

export const createDeck = () => {
  var deck = [];
  for (var i = 0; i < 21; i++) {
    var num = randomize(deck);
    deck.push(num);
  }
  return deck;
};

export const distributeCard = (deck) => {
  var head = createCLink();
  for (var i = 0; i < deck.length; i++) {
    head.card.push(deck[i]);
    head = head.next;
  }
  return head;
};

export const changedHead = (head, num) => {
  var temp = head;
  for (var i = 1; i < num; i++) {
    temp = temp.next;
  }
  head = temp.previous;
  return head;
};

export const takeBackTheCards = (head) => {
  var deck = [];
  var temp = head;
  do {
    deck = deck.concat(temp.card);
    temp = temp.next;
  } while (temp != head);
  return deck;
};
