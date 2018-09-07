//83. Remove Duplicates from Sorted List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    //如果输入一个空的链表，直接返回一个空链表
    if(head == null){
        return head;
    }
    //lead 和 follow 是两个移动的指针，在原链表上移动
    //res_lead 和 res_follow是两个移动的指针，在新链表上移动
    //res记录了新链表的表头
    
    let lead = head;
    let follow = head.next;
    let res_lead = head;
    let res_follow = res_lead.next;
    const res = res_lead;
    
    //当原链表前后两个节点不相同时，把后一个结点搬到新链表上，如果前后相同，则指移动原链表的指针，新链表指针不动
    while(follow != null){
        if(follow.val != lead.val){
        res_follow = follow;
        res_lead.next = res_follow;
        res_lead = res_lead.next;
        
    }
        lead = lead.next;
        follow = follow.next;
    }
    //将新链表res_lead指针之后的尾巴砍掉
    res_lead.next = null;
    
    return res;
    
    
};

