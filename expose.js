function single_select(selector, trim=true) {
    let element = document.querySelector(selector)
    if (element) {
        let text = element.innerHTML
        if (trim) {
            text = text.replace(/\n/g, "")
            start = 0
            while (text[start] == " ") {
                start += 1
            }   
            let stop = text.length-1
            while (text[stop] == " ") {
                stop -= 1
            }
            stop += 1
            return text.slice(start, stop)
        } else {
            return text
        }
    } else {
        return undefined
    }
}

function exportExpose() {
    stack = []
    let link_canonical = document.querySelector("link[rel='canonical']").href
    stack.push(["link_canonical", link_canonical]),
    link_canonical = link_canonical.split("/")
    stack.push(["scout_id", link_canonical[link_canonical.length-1]]),
    stack.push(["expose_title", single_select("#expose-title")]),
    stack.push(["zip_region_and_country", single_select("span.zip-region-and-country")]),
    stack.push(["typ", single_select(".is24qa-typ")]),
    stack.push(["etagenanzahl", single_select(".is24qa-etagenanzahl")]),
    stack.push(["wohnflaeche", single_select(".is24qa-wohnflaeche-ca")]),
    stack.push(["nutzflaeche", single_select(".is24qa-nutzflaeche-ca")]),
    stack.push(["grundstueck", single_select(".is24qa-grundstueck-ca")]),
    stack.push(["bezugsfrei", single_select(".is24qa-bezugsfrei-ab")]),
    stack.push(["zimmer", single_select(".is24qa-zimmer")]),
    stack.push(["schlafzimmer", single_select(".is24qa-schlafzimmer")]),
    stack.push(["badezimmer", single_select(".is24qa-badezimmer")]),
    stack.push(["garage_stellplatz", single_select(".is24qa-garage-stellplatz")]),
    stack.push(["kaufpreis", single_select(".is24qa-kaufpreis")]),
    stack.push(["provision", single_select(".is24qa-provision")]),
    stack.push(["objektzustand", single_select(".is24qa-objektzustand")]),
    stack.push(["baujahr", single_select(".is24qa-baujahr")]),
    stack.push(["modernisierung-,aerung", single_select(".is24qa-modernisierung-sanierung")]),
    stack.push(["denkmalschutzobjekt", single_select(".is24qa-denkmalschutzobjekt")]),
    stack.push(["qualitaet_der_ausstattung", single_select(".is24qa-qualitaet-der-ausstattung")]),
    stack.push(["heizungsart", single_select(".is24qa-heizungsart")]),
    stack.push(["wesentliche_energietraeger", single_select(".is24qa-wesentliche-energietraeger")]),
    stack.push(["energieausweis", single_select(".is24qa-energieausweis")]),
    stack.push(["energieausweistyp", single_select(".is24qa-energieausweistyp")]),
    stack.push(["energieverbrauchskennwert", single_select(".is24qa-energieverbrauchskennwert")]),
    stack.push(["objektbeschreibung", single_select(".is24qa-objektbeschreibung", trim=false)]),
    stack.push(["ausstattung", single_select(".is24qa-ausstattung", trim=false)]),
    stack.push(["lage", single_select(".is24qa-lage", trim=false)]),
    stack.push(["sonstiges", single_select(".is24qa-sonstiges", trim=false)])
    //stack.push(("links", [{"url": tag["href"], "text": tag.text} for tag in soup.select("a.is24-external")]))

    result = {}
    for (const [key, value] of stack) {
        if (value) {
            result[key] = value
        }
    }

    return result
}

window.onload = () => {
    saveBtn = document.createElement("button")
    saveBtn.innerHTML = "Export"

    saveBtn.onclick = () => {
        let result = exportExpose()
        console.log(result)

        let json = JSON.stringify(result, null, 4)
        let blob = new Blob([json], {type: "application/json"})
        let url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${result['scout_id']}.json`

        const clickHandler = () => {
          setTimeout(() => {
            URL.revokeObjectURL(url)
            this.removeEventListener('click', clickHandler)
          }, 150)
        };
        
        a.addEventListener('click', clickHandler, false)
        a.click()
    }

    let criteriaGroup = document.querySelector("div.criteriagroup")
    criteriaGroup.insertBefore(saveBtn, criteriaGroup.firstChild);
}
