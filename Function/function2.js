function science(file)
{
    console.log(file.fname + " your addmission confirm in science stream with percentage "+ file.per);
    
}

function commerce(file){
    console.log(file.fname + " your addmission confirm in commerce stream with percentage "+ file.per);
}

function arts(file){
    console.log(file.fname + " your addmission confirm in arts stream with percentage "+ file.per);
}

var percentage = 40;

if(percentage > 90)
{
    science(
            {
                fname:"raghav",
                per:percentage
            }
        )
}
else if(percentage > 70){
    commerce({fname:"prakash",per:percentage})
}
else if(percentage > 50){
    arts({fname:"ravan",per:percentage})
}
else{
    console.log("You need hard work to get your addmission..");
    
}