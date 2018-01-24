function jadval(num){
    var l = "";
    var c = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= 10; j++) {
            l = (i * j);
            if (l.length >= 2) {
                c+=l + " ";
            }
            else{
                c+=l + "  ";
            }
        }
        c+= '\n';
    }
    console.log(c);
}

jadval(10);