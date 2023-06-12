function validar() {
    var ret_nombre = validar_nombre();
    var ret_check = validar_check();
    var ret_correo = validar_correo();
    var ret_contraseña = validar_contraseña();
    var ret_direccion = validar_direccion();
    var ret_web = validar_web();
    var ret_telefono = validar_telefono();
    var ret_hobby = validar_hobby();
    var ret_codigo_postal = validar_codigo_postal();

    return  ret_nombre && ret_codigo_postal && ret_check && ret_telefono && ret_correo && ret_contraseña && ret_direccion && ret_web && ret_hobby
}

function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("err_nombre");

    if (nombre == ""){
        div.innerText = "¿ᴄᴏᴍᴏ ꜱᴀʙʀᴇᴍᴏꜱ Qᴜᴇ ᴇʀᴇꜱ ᴛᴜ?";
        div.className = "text-danger";
    return false;

    }else {
    div.innerText = "";
    return true;}
}


function validar_telefono() {
    var str_telefono = document.getElementById("telefono").value;
    var div = document.getElementById("err_telefono");

    str_telefono = str_telefono.trim();


    if (isNaN(str_telefono)){
        div.innerText= "El numero Que ingreso no es Valido";
        div.className = "text-danger";
        return false;
    } else if (str_telefono.length != 9) {
        div.innerText= "Los números de teléfono deben tener 9 dígitos";
        div.className = "text-danger";
        return false;
    } else if (str_telefono[0] != '9') {
        div.innerText= "Los números de móvil deben comenzar con 9.";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}


function validar_hobby() {
    var list = document.getElementById("hobbyList");
    var div = document.getElementById("err_hobby");
    if (list.getElementsByTagName("li").length < 2){
        div.innerText = "Debe ingresar al menos dos aficiones.";
        div.className = "text-danger";
        return false;
    }else{
        div.innerText = "";
        return true;
    }
}


function addHobbyToList() {
    var hobby = document.getElementById("hobby").value;
    if (hobby != '') {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(hobby));
        li.className = "list-group-item";
        document.getElementById("hobbyList").appendChild(li);
        document.getElementById("hobby").value = '';
    }
}

document.getElementById("addHobby").addEventListener('click', function(event){
    event.preventDefault(); 
    addHobbyToList();
});



function validar_correo() {
    var correo = document.getElementById("correo").value;
    var div = document.getElementById("err_correo");

    if (correo == ""){
        div.innerText = "ᴄᴏʀʀᴇᴏ ɴᴏ ᴘᴜᴇᴅᴇ ᴇꜱᴛᴀʀ ᴇɴ ʙʟᴀɴᴄᴏ";
        div.className = "text-danger";
        return false;
    } else if (!correo.includes("@") || !correo.includes(".")) {
        div.innerText = "Por favor, ingrese un correo electrónico válido";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

    


function validar_contraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var conpass = document.getElementById("conpass").value;
    var div = document.getElementById("err_contraseña");
    var div_conpass = document.getElementById("err_conpass");

    var tieneLetra = false;
    var tieneNumero = false;

    for (var i = 0; i < contraseña.length; i++) {
        if (isNaN(contraseña[i])) {
            tieneLetra = true;
        } else {
            tieneNumero = true;
        }
    }

    if (contraseña == "") {
        div.innerText = "ɴᴏ ᴄʀᴇᴏ qᴜᴇ qᴜɪᴇʀᴀꜱ qᴜᴇ ᴀᴄᴄᴇᴅᴀɴ ᴀꜱɪ ᴅᴇ ꜰᴀᴄɪʟ ¿ᴠᴇʀᴅᴀᴅ?";
        div.className = "text-danger";
        return false;

    } else if (contraseña.length < 3 || contraseña.length > 6) {
        div.innerText = "ʟᴏ ᴍiɴɪᴍᴏ ꜱᴏɴ 3 ᴄᴀʀᴀᴄᴛᴇʀᴇꜱ ʏ ᴇʟ ᴍaxɪᴍᴏ ʜᴀꜱᴛᴀ 6, ᴀꜱᴇɢᴜʀᴀᴛᴇ qᴜᴇ ꜱᴇᴀ ᴜɴᴀ ᴄᴏɴᴛʀᴀꜱᴇñᴀ ꜱᴇɢᴜʀᴀ";
        div.className = "text-danger";
        return false;

    } else if (!tieneLetra) {
        div.innerText = "ɴᴏ ᴇꜱ ꜱᴜꜰɪᴄɪᴇɴᴛᴇ ꜱᴇɢᴜʀɪᴅᴀᴅ, ʟᴀ ᴄᴏɴᴛʀᴀꜱᴇñᴀ ᴅᴇʙᴇ ᴄᴏɴᴛᴇɴᴇʀ ᴀʟ ᴍᴇɴᴏꜱ ᴜɴᴀ ʟᴇᴛʀᴀ.";
        div.className = "text-danger";
        return false;

    } else if (!tieneNumero) {
        div.innerText = "ꜱɪɢᴜᴇ ꜱɪɴ ꜱᴇʀ ꜱᴇɢᴜʀᴀ, ʟᴀ ᴄᴏɴᴛʀᴀꜱᴇñᴀ ᴅᴇʙᴇ ᴄᴏɴᴛᴇɴᴇʀ ᴀʟ ᴍᴇɴᴏꜱ ᴜɴ ɴuᴍᴇʀᴏ.";
        div.className = "text-danger";
        return false;

    } else if (contraseña !== conpass) {
        div.innerText = "ʟᴀ ᴄᴏɴꜰɪʀᴍᴀᴄɪoɴ ɴᴏ ᴄᴏɪɴᴄɪᴅᴇ ᴄᴏɴ ʟᴀ ᴄᴏɴᴛʀᴀꜱᴇñᴀ.";
        div_conpass.innerText = "ʟᴀ ᴄᴏɴꜰɪʀᴍᴀᴄɪoɴ ɴᴏ ᴄᴏɪɴᴄɪᴅᴇ ᴄᴏɴ ʟᴀ ᴄᴏɴᴛʀᴀꜱᴇñᴀ."; 
        div.className = "text-danger";
        div_conpass.className = "text-danger"; 
        return false;

    } else {
        div.innerText = "";
        div_conpass.innerText = ""; 
        return true;
    }
}

function validar_web() {
    var web = document.getElementById("web").value;
    var div = document.getElementById("err_web");

    if (web == "" || web.indexOf('.') == -1 || web[0] == '.' || web[web.length-1] == '.') {
        div.innerText = "ɴᴏ ᴛᴇɴɢᴏ ʀᴇɢɪꜱᴛʀᴏꜱ ᴅᴇ ᴇꜱᴀ ᴘᴀɢɪɴᴀ ᴡᴇʙ ᴇɴ ᴍɪ ʙᴀꜱᴇ ᴅᴇ ᴅᴀᴛᴏꜱ, ᴅᴇ ꜱᴇɢᴜʀᴏ ᴛɪᴇɴᴇ ᴀʟɢᴏ ᴍᴀʟ (ᴄᴏᴍᴏ ᴇʟ '.ᴄᴏᴍ' ᴘᴏʀ ᴇᴊᴇᴍᴘʟᴏ)";
        div.className = "text-danger";
    return false;
    } else{
    div.innerText = "";
    return true;}
}


function validar_check() {
    var check = document.getElementById("check").checked;
    var div = document.getElementById("err_check");

    if (!check) {
        div.innerText = "ᴅᴇʙᴇ ᴀᴄᴇᴘᴛᴀʀ ʟᴏꜱ ᴛeʀᴍɪɴᴏꜱ ʏ ᴄᴏɴᴅɪᴄɪᴏɴᴇꜱ";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}


function validar_codigo_postal() {
    var codigo_postal = document.getElementById("postal").value;
    var div = document.getElementById("err_postal");

    if (codigo_postal == "" || codigo_postal.length >= 8 || isNaN(codigo_postal)) {
        div.innerText = "ᴇʟ ᴄᴏᴅɪɢᴏ ᴘᴏꜱᴛᴀʟ ᴅᴇʙᴇ ꜱᴇʀ ᴜɴ ɴuᴍᴇʀᴏ ᴅᴇ ᴍᴀxɪᴍᴏ 7 ᴅɪɢɪᴛᴏꜱ";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");

    if (direccion == ""){
        div.innerText = "ʟᴀ ᴅɪʀᴇᴄᴄɪoɴ ᴇꜱ ᴏʙʟɪɢᴀᴛᴏʀɪᴀ";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}






var c = document.getElementById("c");
var ctx = c.getContext("2d");


c.height = window.innerHeight;
c.width = window.innerWidth;


var matrix = "ぁあぃいぅうぇえぉおがきぎくぐけげこごさざしじすずア尻尾を押すプヘベペホボポマミムメユラルレロヮワヰヱヲンヴヵ";


matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++)
    drops[x] = 1; 



function draw()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#2AFF00" ;
    ctx.font = font_size + "px arial";

    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
    
        ctx.fillText(text, i*font_size, drops[i]*font_size);

       
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        
        drops[i]++;
    }
}

setInterval(draw, 35);
