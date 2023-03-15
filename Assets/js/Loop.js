//For
for (let i = 0; i < 5; i++) {
    console.log(`Iterasi ke ${i}`);
}

//Do..While
let i = 0;

do{
    console.log(`Iterasi ke ${i}`);
    i+=1;
} while (i<5);

//While
let j = 0;
while (j<5) {
    console.log(`Iterasi ke ${1}`);
    j++;
}

//break
for (let i = 0; i < 5; i++) {
    if (i==3){
        break;
    }
    console.log(`Iterasi ke ${i}`);
}

//Continue
for (let i = 0; i < 5; i++){
    if(i == 3){
        continue;
    }
    console.log(`Iterasi ke ${i}`);
}