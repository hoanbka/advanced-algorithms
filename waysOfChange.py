def waysOfChange(amount):
    candidates = [1, 2, 5, 10]
    if amount == 0:
        return 1
    return combinationSum(candidates, amount)


def combinationSum(candidates, target):
    res = []
    # candidates.sort()
    dfs(candidates, target, 0, [], res)
    return len(res)


def dfs(nums, target, index, path, res):
    if target < 0:
        return  # backtracking
    if target == 0:
        res.append(path)
        return
    for i in range(index, len(nums)):
        dfs(nums, target - nums[i], i, path + [nums[i]], res)


''' dynamic programming '''
def waysOfChange(amount):
    candidates = [1, 2, 5, 10]
    dp = [0] * 10**4
    dp[0] = 1
    for i in range(len(candidates)):
        for s in range(amount + 1):
            if s >= candidates[i]:
                dp[s] = dp[s - candidates[i]] + dp[s]
    return dp[amount]
