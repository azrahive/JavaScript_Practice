

const personName= "Proyash";
const age= 25
const jobType= "Government";
const salery= 30000;

if(personName=="Proyash"){
    if(age>=23){
        console.log("cheler boyosh bhalo");
       
        if(jobType=="Government"){
            console.log("WOW!! Government job!!!");
            if(salery>=50000){
            console.log("Abbu ami proyash ke biye korte raji");
            }
            else if(salery<=50000){
            console.log("Salery kom, ei biye hobe na");
            }
        }
    }
        else if(age<=23){
        console.log("kochi chele biye korbo na");
        }
       
    else if(jobType=="Non-Government"){
        
        console.log("ummmm...Non-Government chole! khrap nah...");
         if(salery>=50000){
            console.log("Non-Government to ki hoise salery bhalo...");
            }
            else if(salery<=50000){
                console.log("Non-Government .. abr salery o kom!!chiiiii");
            }
    }
}
else{
    console.log("patro pochondo na");
}
