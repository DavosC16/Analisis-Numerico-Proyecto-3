var n: any;

var x: any;

var y: any;

var c = new Array();

var ecSystem = new Array();

var adj = new Array();

var cons = new Array


export function setN(num: any){
    n=num;
}

export function getN(){
    return n;
}

export function setPoints(xP: any, yP:any){
    x=xP;
    y=yP;
}

export function interpolationNewton(){
    let indexPivAct=0;
    let pivAnt=1;

    for(let i=0; i<n; i++){
        c[i]=y[i];
        ecSystem[i]=new Array();
        for(let j=0; j<n; j++){
            ecSystem[i][j]=1;
        }
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            for(let k=0; k<j; k++){
                ecSystem[i][j]=ecSystem[i][j]*(x[i]-x[k]);
            }
        }
    }

    for (let i=0; i<n; i++){
        adj[i]=new Array();
        for (let j=0; j<n; j++){
            if(i==j){
                adj[i][j]=1;
            }
            else {
                adj[i][j]=0;
            }
        }
    }

    for(let k=0; k<n; k++){
        indexPivAct=k;

        for (let i=0; i<n; i++){
            for (let j=0; j<n; j++){
                if(indexPivAct!=i && indexPivAct!=j){
                    ecSystem[i][j] = (((ecSystem[indexPivAct][indexPivAct]*ecSystem[i][j]) - (ecSystem[i][indexPivAct]*ecSystem[indexPivAct][j]))/pivAnt);
                    
                }
                if(indexPivAct!=i){
                    adj[i][j] = (((ecSystem[indexPivAct][indexPivAct]*adj[i][j]) - (ecSystem[i][indexPivAct]*adj[indexPivAct][j]))/pivAnt);
                }
            }

            if(indexPivAct!=i){
                ecSystem[i][indexPivAct] = 0;
            }
        }

        pivAnt=ecSystem[indexPivAct][indexPivAct];
    }

    for(let i=0; i<n; i++){
        cons[i]=0;
        for(let j=0; j<n; j++){
            cons[i]=cons[i] + (c[j]*adj[i][j]);
        }
        cons[i]=cons[i]/pivAnt;
    }
}

export function getPolynomial(){
    let polynomial: string = "f(x)= ";
    polynomial=polynomial+cons[0];
    for(let i=1; i<n; i++){
        polynomial=polynomial+" + "+cons[i];
        for(let j=1; j<=i; j++){
            polynomial=polynomial+"(x-"+x[j-1]+")";
        }
    }

    console.log(polynomial);
    return polynomial;
}

export function getCons(){
    return cons;
}

export function getX(){
    return x;
}