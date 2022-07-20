/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var overlapNode = function(node1, node2) {
    let node = null; 
    if (node1 !== null) {
        if (node2 !== null) {
            node = new TreeNode(node1.val);
            node.val += node2.val
            node.left = overlapNode(node1.left, node2.left);
            node.right = overlapNode(node1.right, node2.right);
        } else {
            node = node1
        }
    }
    else if (node2 !== null) {
        node = node2
    }
    return node;
}

var mergeTrees = function(root1, root2) {
    let root = overlapNode(root1, root2);
    return root;
};