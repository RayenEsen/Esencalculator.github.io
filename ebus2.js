
    function Sum1(num1,num2,num3) {
        document.BC1SEMESTER1.result1.value=num1*0.4+num2*0.4+num3*0.2;
    }
    
    function Sum2(x,y,z) {
        document.BC1SEMESTER1.result2.value=x*0.4+y*0.4+z*0.2;
    }
    function Sum3(a,b,c) {
        document.BC1SEMESTER1.result3.value=a*0.4+b*0.4+c*0.2;
    }
    function Sum4(d,e,f) {
        document.BC1SEMESTER1.result4.value=d*0.4+e*0.4+f*0.2;
    }
    function Sum5(g,h,i) {
        document.BC1SEMESTER1.result5.value=g*0.2+h*0.7+i*0.2;
    }
    function Sum6(j,k,l) {
        document.BC1SEMESTER1.result6.value=j*0.2+k*0.7+l*0.2;
    }
    function Sum7(m,n,o) {
        document.BC1SEMESTER1.result7.value=m*0.2+n*0.7+o*0.1;
    }
    function Sum8(p,k,r) {
        document.BC1SEMESTER1.result8.value=p*0.2+k*0.7+r*0.1;
    }
    function Sum9(az,ar,af) {
        document.BC1SEMESTER1.result9.value=az*0.2+ar*0.7+af*0.1;
    }
    function Sum10(qs,qd,qf) {
        document.BC1SEMESTER1.result10.value=qs*0.2+qd*0.7+qf*0.1;
    }

    function Sum11(wx,wc,wv) {
        document.BC1SEMESTER1.result11.value=wx*0.2+wc*0.7+wv*0.1;
    }
    function Sum12(yu,yi,yo) {
        document.BC1SEMESTER1.result12.value=yu*0.2+yi*0.7+yo*0.1;
    }
    function Result()
    {
        var res;
        res=Number(document.BC1SEMESTER1.result1.value*1.5)+Number(document.BC1SEMESTER1.result2.value*1.5)+Number(document.BC1SEMESTER1.result3.value*1.5)+Number(document.BC1SEMESTER1.result4.value*1.5)+Number(document.BC1SEMESTER1.result5.value*3)+Number(document.BC1SEMESTER1.result6.value*1)+Number(document.BC1SEMESTER1.result7.value*1.5)+Number(document.BC1SEMESTER1.result8.value*1)+Number(document.BC1SEMESTER1.result9.value*1)+Number(document.BC1SEMESTER1.result10.value*1)+Number(document.BC1SEMESTER1.result11.value*2)+Number(document.BC1SEMESTER1.result12.value*1.5);       
         alert("Votre moyenne = "+res/15);
    }

