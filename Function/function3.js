function science(file)
{
    
    return file.name + " your addmission confirm in science stream with per " + file.per
}

function commerce(file){
    return file.name + " your addmission confirm in commerce stream with per " + file.per
    
}

function arts(file){
    return file.name + " your addmission confirm in arts stream with per " + file.per
    
}

var percentage = 92;
var flag;

if(percentage > 90)
{
    flag = science(
            {
                name:"raghav",
                per:percentage,
                size:"1000kb"
            }
        )
}
else if(percentage > 70){
    flag = commerce({name:"prakash",per:percentage})
}
else if(percentage > 50){
    flag = arts({name:"ravan",per:percentage})
}
else{
    console.log("You need hard work to get your addmission..");
    
}
console.log(flag);


var choice = parseInt(prompt("1 for add \n2 for sub \n3 for mul \n4 for div \n\n\n Enter your choice"))
