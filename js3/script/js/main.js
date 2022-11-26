function Calc(){
    var x=document.getElementById('total').value
    var y=document.getElementById('perc').value
    var z=document.getElementById('month').value

    if (x!=0 && y!=0 && z!=0) {
         x=Number(x)
         y=Number(y)
         z=Number(z)
        
        if (x>0 && x<=12000 && y>0 && y<=36) {
                document.getElementById('TotalPayment').innerText=(x+((x*y)/100))
                document.getElementById('Monthly').innerText=((x+((x*y)/100))/z)
        }

    }
}