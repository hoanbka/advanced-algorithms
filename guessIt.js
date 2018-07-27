guessIt = (s, options) => {
    s = "0" + s + "0"
    let sp = s.split('$'),
        res = [],
        i, j, flag
    for (i in options) {
        t = "0" + options[i] + "0"
        flag = 1
        for (j in sp) {
            k = t.search(sp[j])
            l = k + sp[j].length
            if (k == -1 || l > t.length) {
                flag = 0
                break
            }
            t = t.substr(l);
        }
        if (flag)
            res.push(options[i])
    }
    return res
}

function guessIt(message, options) {
    const query = message.split(/\$+/g),
        last = query.length - 1
    return options.filter(_ => {
        let bound = 0,
            prefix = !query[0] | _.startsWith(query[0]),
            suffix = !query[last] | _.endsWith(query[last])
        return prefix && suffix &&
            query.every(v => {
                const pos = _.indexOf(v, bound)
                bound = pos + v.length
                return pos + 1
            })
    })

}

function guessIt(message, options) {
    function compare(str) {
        let [i, j, x, y] = [0, 0, -1, -1];

        while (i < str.length && j < message.length) {
            if (str[i] === message[j])[i++, j++];
            else if (message[j] === "$")[x, y] = [i, j++];
            else if (y > -1)[i, j] = [++x, y + 1];
            else break;
        }

        while (j < message.length && message[j] === "$") j++;

        return j === message.length;
    }

    return options.filter(compare);
}

function guessIt(message, options) {
    let output = [];
    let regex = "";

    /* If message has only $, then all options are possible */
    if (message == "$") return options;


    /* Split the message by the $ */
    let messageParts = message.split("$");


    /* Go through each options */
    for (let j = 0; j < options.length; j++) {

        let optionString = options[j];
        // console.log("\n" + options[j]);
        let count = 0;

        /* Search for each parts of the message */
        for (let i = 0; i < messageParts.length; i++) {

            if (messageParts[i] == "") {
                // console.log("$ counted. Skip regex.")
                count++;
            } else {
                /* Build the regular expression */
                if (i == 0)
                    regex = RegExp("^" + messageParts[i]);
                else regex = RegExp(messageParts[i]);


                /* If there is a match, remove the matched portion from the string */
                if (regex.test(optionString)) {
                    optionString = optionString.replace(regex, "-");
                    // console.log(" after " + regex + " replacement: " + optionString);
                    optionString = optionString.replace(/.*-/, " ");
                    // console.log("  after .*-: " + optionString);
                    count++;
                } else {
                    // console.log(' ' + regex + ' no match. Stop searching.');
                    break;
                }
            }


            /* The option matches the message */
            if (count == messageParts.length) {
                // console.log("all parts matched...");
                output.push(options[j]);
            }
        }
    }

    return output;
}