
// Assume prayTimes is already defined

import axios from "axios";

export default function getCalculationMethod() {
    let method;
    if (Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0].toLowerCase() === "egypt") {
        method = "Egypt";
    } else if (Intl.DateTimeFormat().resolvedOptions().timeZone.split("/")[0].toLowerCase() === "egypt") {
        method = "Egypt";
    }

    console.log(method);


    return method;
}
