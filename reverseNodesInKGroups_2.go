// Singly-linked lists are already defined with this interface:
// type ListNode struct {
//   Value interface{}
//   Next *ListNode
// }
//
func reverseNodesInKGroups(l *ListNode, k int) *ListNode {
    slice := convert(l)
    // fmt.Println(slice)
    
    ans := make([] int, 0)
    for i := 0; i< len(slice); i+=k {
        end := i + k
        end = min(end, len(slice))
        sub := slice[i : end]
        // fmt.Println(sub)
        if len(sub) == k {
            ans = append(ans, reverse(sub)...)
        }else{
            ans = append(ans, sub...)
        }
    }
    
    // fmt.Println(ans)
    var list *ListNode
    // list = nil
    
    for i := len(ans)-1; i >= 0; i--{
        
        temp := &ListNode{}
        temp.Value = ans[i]
        temp.Next = nil
        
        if list == nil {
            list = temp
            continue
        }else{
            temp.Next = list
            list = temp
        }
    }
    
    return list
}

func convert(l *ListNode) []int{
    slice := make([]int, 0)
    
    currNode := l
    for currNode != nil {
        value := currNode.Value.(int)
        slice = append(slice, value)
        currNode = currNode.Next
    }
    
    return slice
}

func reverse(arr []int) [] int{
    low := 0
    high := len(arr) - 1
    
    for low < high{
        arr[low], arr[high] = arr[high], arr[low]
        low ++
        high --
    }
    
    return arr
}

func min(a, b int) int {
    if a < b {
        return a
    }
    
    return b
}

