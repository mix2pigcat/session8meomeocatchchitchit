function Rat(name,weigh,speed) {
    this.name = name;
    this.weigh = weigh;
    this.speed = speed;
    this.isDead = function () {
        this.status = false;
    }
    this.cry = function () {
    alert('Chit chit')
    }
}
function Cat(name,weigh,speed) {
    this.name = name;
    this.weigh = weigh;
    this.speed = speed;
    this.cry = function () {
        alert('meo meo')
    };
    this.catchRat = function (Rat) {
        if (this.speed > Rat.speed){
            alert('Cat catch Rat')
        }else{
            alert('Leu leu');
        }
    };
    this.eatRat = function (rat) {
        if (rat.status){
            alert('Cat eat rat');
            this.weigh += rat.weigh;
            rat.isDead();
            alert("khoi luong cua meo la "+this.weigh);
        }else{
            alert("oi thiu k an");
        };
    };
}
let rat1= new Rat('Hieu',10,5);
let cat1= new Cat('Dung',50,80);
// let rat1= new Rat('Hieu',30,20, true);

cat1.catchRat(rat1);
cat1.eatRat(rat1);
cat1.cry();
