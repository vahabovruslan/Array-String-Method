var MyArr=["Arxitektura"]
newArr=MyArr.toString()
var check=prompt("Deyer daxil edin")
var result=0
for (let i = 0; i < newArr.length; i++) {
    if (check===newArr[i]) {
        result++
    }
    
}
alert(result)