/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultThingy = null;
    let resultHead = null;

    let currentNode = l1;
    let currentNode2 = l2;
    let carryNum = 0;
    while (currentNode !== null) {
        const num1 = currentNode.val;
        const num2 = currentNode2.val;

        let newResult = carryNum + num1 + num2;
        if (newResult >= 10) {
            const onlyTens = Math.floor(newResult / 10);
            carryNum = onlyTens;
            newResult -= onlyTens * 10;
        } else {
            carryNum = 0;
        }

        const newNode = new ListNode(newResult, null);
        if (resultThingy) {
            resultThingy.next = newNode;
        } else {
            resultHead = newNode;
        }
        resultThingy = newNode;

        currentNode = currentNode.next;
        currentNode2 = currentNode2.next;
    }

    return resultHead;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

let result = addTwoNumbers(l1, l2);

while (result !== null) {
    console.log(result.val);
    result = result.next;
}
