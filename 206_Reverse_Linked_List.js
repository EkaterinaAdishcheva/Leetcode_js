/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let result = new ListNode();
    let current = head;
    const nodes = [];
    var i = 0;
    while (current) {
        nodes[i] = current; 
        current = current.next;
        i ++;
    }
    current = result;
    for (var k = i - 1; k >= 0; k ++ ) {
        current.next = nodes[i];
        current = current.next;
    }
    return result.next;
};
