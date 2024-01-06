
ar={"alaplap_asus_rog":86590,"alaplap_gigabyte":41690,"alaplap_msi":56690,"alaplap_asus_tuf":88790,"alaplap_asrock":61390,
"cpu_i5_12400":59490,"cpu_i5_14600":129190,"cpu_i7":174790,"cpu_i5_12600":110090,"cpu_i9":258790,
"ram_fury16":14590,"ram_fury32":34990,"ram_hyperx":48310,"ram_corsair":48590,"ram_gskill":63090,
"gpu_asus":68990,"gpu_giga":103390,"gpu_msi":116690,"gpu_intel":110090,"gpu_asrock":102090,
"ssd_990":43690,"ssd_870":38090,"ssd_fury":25990,"ssd_700":69290,"ssd_as22":50290,
"mon_msi":113290,"mon_sam":210490,"mon_lg":95000,"mon_aoc24":101890,"mon_aoc34":126990,
"bill_steel":23490,"bill_hyperx":43190,"bill_logi":131290,"bill_razer":37990,"bill_asus":62990,
"eger_logi":19990,"eger_python":8190,"eger_corsair":52290,"eger_asus":28990,"eger_hyperx":34890,
};

console.log(ar["alaplap_asus_rog"]);
alapar=undefined;
cpuar=undefined;
ramar=undefined;
gpuar=undefined;
ssdar=undefined;
moniar=undefined;
billar=undefined;
egerar=undefined;
ossz=0;

function showProductDescription(productType) {
    // Megkeressük az összes radio gombot
    var radioButtons = document.getElementsByName(productType);

    // Végigmegyünk az összes radio gombon
    for (var i = 0; i < radioButtons.length; i++) {
        // Ellenőrizzük, hogy melyik gomb van kiválasztva
        if (radioButtons[i].checked) {
            // Kiválasztott termék leírásának megjelenítése
            var description = document.getElementById('kivalasztott'+productType);
            const termekId = radioButtons[i].id;
            description.innerHTML = productType + ":" + termekId + " - " + ar[termekId] +" Ft";
            if(productType=="alaplap"){
                alapar= ar[termekId];
            }
            if(productType=="cpu"){
                cpuar= ar[termekId];
            }
            if(productType=="ram"){
                ramar= ar[termekId];
            }
            if(productType=="gpu"){
                gpuar= ar[termekId];
            }
            if(productType=="ssd"){
                ssdar= ar[termekId];
            }
            if(productType=="monitor"){
                moniar= ar[termekId];
            }
            if(productType=="bill"){
                billar= ar[termekId];
            }
            if(productType=="eger"){
                egerar= ar[termekId];
            }
            ossz=updateTotal();
            break; // Kilépünk a ciklusból, mivel megtaláltuk a kiválasztott term
        }
    }
    var total = document.getElementById('ossz');
    total.innerHTML = "Végösszeg: " + ossz + " Ft";
}

function Purchase() {
    if (checkComplete() == false) {
        alert("Nem fejeződött be a rendelés");
    }
    else{
        alert("Sikeres megrendelés!");
    }
}

function updateTotal(){
    let total=0
    if(alapar){
        total=total + alapar
    }
    if(cpuar){
        total=total + cpuar
    }
    if(ramar){
        total=total + ramar
    }
    if(gpuar){
        total=total + gpuar
    }
    if(ssdar){
        total=total + ssdar
    }
    if(moniar){
        total=total + moniar
    }
    if(billar){
        total=total + billar
    }
    if(egerar){
        total=total + egerar
    }
    return total;
}

function checkComplete(){
    if(alapar===undefined){
        return false;
    }
    if(cpuar===undefined){
        return false;
    }
    if(ramar===undefined){
        return false;
    }
    if(gpuar===undefined){
        return false;
    }
    if(ssdar===undefined){
        return false;
    }
   
    return true;
}

let ertekelesek=[0,0,0,0,0,0]

function Ertekeles() {
    y = Number(document.getElementById("star").value)
    CsillagKiir(y)
    ertekelesek[aktualis]=y;
}

function CsillagKiir(x)
{
    document.getElementById("csillag").innerHTML=""
    z = '<img src="kepek/star.png">'
    for (let i=0;i<x;i++)
    {
        document.getElementById("csillag").innerHTML += z
    }
}