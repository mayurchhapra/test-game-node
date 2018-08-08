var troops1={
    E : 100,
    H : 50,
    T : 10
}

var troops2={
    E : 240,
    H : 151,
    T : 30
}

function compareTroops(t1, t2){
    console.log("Added E = ",compareE(t1.E,t2.E));
    // console.log("H = ",compareH(t1.H,t2.H));
};


// pronunciation

// ------------------CONVERT------------------
// Added Horses
function H(E){
    console.log("E = ",E*2);
    troops1.H += (E*2);
    console.log('Updated Troops H = '+troops1.H);
}

//  Added Tank
function T(H){
    troops1.T += (H*3);
    console.log('Update Troops T = '+troops1.T);
}

// ------------------COMPARISION------------------
function compareE(e1,e2){
    result = ((e1*3)/e2);
    if(result > 1){
        H(result);
    }
    else if(result < 1){

    }
    return ((e1*3)/e2);
}
function compareH(h1,h2){
    result = ((h1*3)/h2);
    return ((h1*3)/h2);
}
// function compareE(e1,e2){
//     return ((e1*3)/e2);
// }

compareTroops(troops1,troops2)