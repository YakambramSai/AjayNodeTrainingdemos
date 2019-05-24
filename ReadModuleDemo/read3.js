process.stdout.write("Enter name: ");
process.stdin.on("readable",function(){
    var data=process.stdin.read();
    if(data){
        console.log("Name:"+data);
    }
    });