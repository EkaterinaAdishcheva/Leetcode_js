/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connectNode = function(node) {
    if (node.left !== null ) {
        pointerL = node.left;
        pointerR = node.right;
        connectNode(pointerL)
        connectNode(pointerR)
        temp = pointerL.right;
        pointerL.right = pointerR
        while(temp !== null) {
            pointerL = temp
            pointerR = pointerR.left; 
            connectNode(pointerL)
            connectNode(pointerR)
            temp = pointerL.right;
            pointerL.right = pointerR;    
        }
    }   
 }   
 var connect = function(root) {
    connectNode(root);
};