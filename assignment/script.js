var names=new Array();
names[0]="yaakov";
names[1]="chris";
names[2]="albert";
names[3]="wendy";
names[4]="Reginald";
names[5]="jake";
names[6]="christian";
names[7]="eric";
names[8]="Nancy";
names[9]="ivan";


for (var i = 0; i <names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
	   console.log("Goodbye "+ names[i])
    }
    else{
    	console.log("Hello "+ names[i])
    }   
}