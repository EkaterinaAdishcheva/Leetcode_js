/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


function checkSubstring(s1_letters_qnt, s2_letters_qnt) {
    let status = true;
    let key = "";
    let value = 0;
    for ([key, value] of s1_letters_qnt) {
        if (s2_letters_qnt.has(key) == false) {
            status = false;
            break;
        }
        if (s2_letters_qnt.get(key) != value ) {
            status = false;
            break;
        }
    }
    return [status, key]
}

var checkInclusion = function(s1, s2) {
    if (s2.length < s1.length) {
        return false;
    } 

    s1_letters_qnt = new Map();
    s2_letters_qnt = new Map();

    let i = s1.length;
    while (i--) {
        if( s1_letters_qnt.has(s1[i]) )
        {
            let qnt = s1_letters_qnt.get(s1[i]);
            s1_letters_qnt.set(s1[i], ++qnt);
        } else {
            s1_letters_qnt.set(s1[i], 1);
        }
    }

    for (i = 0; i < s1.length; i ++) {
        if( s2_letters_qnt.has(s2[i]) )
        {
            let qnt = s2_letters_qnt.get(s2[i]);
            s2_letters_qnt.set(s2[i], ++qnt);
        } else {
            s2_letters_qnt.set(s2[i], 1);
        }
    }

    let status = false, key = "";
    [status, key] = checkSubstring(s1_letters_qnt, s2_letters_qnt);
    if (status) {
        return true;
    }
    for (i = s1.length; i < s2.length; i ++) {
        let qnt = s2_letters_qnt.get(s2[i - s1.length]);
        s2_letters_qnt.set(s2[i - s1.length], --qnt);

        if( s2_letters_qnt.has(s2[i]) )
        {
            let qnt = s2_letters_qnt.get(s2[i]);
            s2_letters_qnt.set(s2[i], ++qnt);
        } else {
            s2_letters_qnt.set(s2[i], 1);
        }
        if (s2[i - s1.length] == key || s2[i] == key) {
            [status, key] = checkSubstring(s1_letters_qnt, s2_letters_qnt);
            if (status) {
                return true;
            }
        }
    }

    return false;
};

s1 = "ab";
s2 = "eidbaooo";

console.log(checkInclusion(s1, s2));