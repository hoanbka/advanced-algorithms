function waysOfChange(target) {
    if (target == 0) return 1;
    let candidates = [1, 2, 5, 10];
    return combinationSum(candidates, target);
}

let combinationSum = function(candidates, target) {
    let res = [];
    candidates.sort((a, b) => a - b);
    dfs(0, 0, []);
    return res.length;

    function dfs(sum, index, tmp) {
        if (sum === target) {
            newTmp = tmp.concat();
            res.push(newTmp);
            return; //pruning
        } else if (sum > target) {
            return; //pruning
        }
        for (let i = index; i < candidates.length; i++) {
            newTmp = tmp.concat();
            newTmp.push(candidates[i]);
            dfs(sum + candidates[i], i, newTmp);
        }
    }
};


/**
 * { item_description }
 */

function waysOfChange(target) {
    if (target == 0) return 1;
    let candidates = [1, 2, 5, 10];
    return solve(candidates, target);
}

function solve(
    candidates,
    remainingSum,
    finalCombinations = [],
    currentCombination = [],
    startFrom = 0,
) {
    if (remainingSum < 0) {
        // By adding another candidate we've gone below zero.
        // This would mean that the last candidate was not acceptable.
        return finalCombinations;
    }

    if (remainingSum === 0) {
        // If after adding the previous candidate our remaining sum
        // became zero - we need to save the current combination since it is one
        // of the answers we're looking for.
        finalCombinations.push(currentCombination.slice());

        return finalCombinations;
    }

    // If we haven't reached zero yet let's continue to add all
    // possible candidates that are left.
    for (let candidateIndex = startFrom; candidateIndex < candidates.length; candidateIndex += 1) {
        const currentCandidate = candidates[candidateIndex];

        // Let's try to add another candidate.
        currentCombination.push(currentCandidate);

        solve(
            candidates,
            remainingSum - currentCandidate,
            finalCombinations,
            currentCombination,
            candidateIndex,
        );

        // BACKTRACKING.
        currentCombination.pop();
    }

    return finalCombinations.length;
}

/**
 * { item_description }
 */

function waysOfChange(target) {
    if (target == 0) return 1;
    let candidates = [1, 2, 5, 10];
    return combinationSum(candidates, target);
}

var combinationSum = function(candidates, target) {
    var result = [],
        temp = [];
    var find = function(target, temp, index) {
        for (var i = index; i >= 0; i--) {
            if (candidates[i] > target) {
                continue;
            } else if (candidates[i] === target) {
                result.push(temp.concat([candidates[i]]));
            } else {
                find(target - candidates[i], temp.concat([candidates[i]]), i);
            }
        }
    }
    find(target, temp, candidates.length - 1);
    return result.length;
};

/**
 * { item_description }
 * DYNAMIC PROGRAMMING
 */

function waysOfChange(target) {
    let candidates = [1, 2, 5, 10];
    let dp = Array(10 ** 4).fill(0);

    dp[0] = 1;
    for (let i = 0; i < candidates.length; i++)
        for (let s = 0; s < target + 1; s++) {
            if (s >= candidates[i]) dp[s] = dp[s - candidates[i]] + dp[s];
        }

    return dp[target]
}