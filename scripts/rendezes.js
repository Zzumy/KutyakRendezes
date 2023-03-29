export function megjelenitObj(objektum) {
    let szoveg = 
    `<thead>
        <tr>
            <th>név</th>
            <th>fajta</th>
            <th>kor</th>
        </tr>
    </thead>
    <tbody>`
    for (let ix = 0; ix < objektum.length; ix++) {
        szoveg += 
        `<tr>
                <td>${objektum[ix].nev}</td>
                <td>${objektum[ix].fajta}</td>
                <td>${objektum[ix].kor}</td>
        </tr>`
    }
    $("table").eq(0).html(szoveg+="</tbody>")
}

export function szures(objektum) {
    let lista = rendezObjSzoveg(lista, $("#nev".val()));
    lista = rendezObjSzoveg(lista, $("#fajta".val()));
    lista = rendezObjSzam(lista, $("#kor".val()));
    megjelenitObj(lista);
}

export function rendezObjSzam(objektum, kulcs) {
    objektum.sort(function(a, b){
        return a[kulcs] - b[kulcs];
    });
}

export function rendezObjSzoveg(objektum, kulcs) {
    objektum.sort(function(a, b){
        if (a[kulcs] > b[kulcs]) {
            return 1;
        }else{
            return -1;
        }
    });
}

export function rendezObjektum(lista, kulcs) {
    if (typeof kulcs == "number") {
        rendezesSzamSzerint(lista, kulcs);
    }else{
        rendezObjSzovegSzerint(lista, kulcs);
    }
}
