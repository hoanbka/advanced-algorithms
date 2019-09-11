// https://app.codesignal.com/challenge/QZWG4EFmpmuJzz3dS
import (
    "strings"
)

func reversedSumOfDigits(p int, n int) string {
    if n == 1 {
        if p <= 9 {
            return strconv.Itoa(p)
        }
        
        return "-1"
    }
    
    start := "1" + repeat("0", n - 1)
    slice := string2Array(start)
    
    if p == sum(slice) && len(slice) == n {
        return strings.Join(slice,"")
    }
    
    flag := false
    curr := 0
    index := len(slice) - 1
    
    for curr < p && index >= 0 {
        if p - curr >= 10 {
            slice[index] = "9"
            curr += 9
            
        }else{
            tmp := p - curr
            if index != 0{
                tmp -= 1
            }
            
            slice[index] = strconv.Itoa(tmp)
            flag = true
            break
        }
        
        index --
    }
    
    if flag == true {
        return strings.Join(slice, "")
    }
    return "-1"
}

func repeat(s string, n int) string {
    str := ""
    for i:=0; i< n ;i++{
        str += s
    }
    
    return str
}

func string2Array(s string) [] string {
    slice := make([] string, 0)
    
    for i:= 0; i< len(s);i++{
        slice = append(slice, string(s[i]))
    }
    
    return slice
}

func sum(arr []string) int{
    ans := 0
    for i :=0;i < len(arr);i++{
        tmp, _ := strconv.Atoi(arr[i])
        ans += tmp
    }
    return ans
}