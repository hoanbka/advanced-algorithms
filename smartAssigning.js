function smartAssigning(names, statuses, projects, tasks) {

    let tmp
    for (let i = 0; i < statuses.length; i++) {
        if (!statuses[i]) {
            if (!tmp) tmp = [tasks[i], projects[i], names[i]];
            else {
                if (tmp[0] < tasks[i]) continue;
                else if (tmp[0] == tasks[i]) {
                    if (tmp[1] < projects[i]) continue;
                    else if (tmp[1] > projects[i]) {
                        tmp = [tasks[i], projects[i], names[i]];
                    }
                } else {
                    tmp = [tasks[i], projects[i], names[i]];
                }
            }
        }
    }
    return tmp[2]
}

