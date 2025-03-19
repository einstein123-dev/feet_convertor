function convertFeet(distance:number) {
    let miles = 0;
    let yards = 0;
    let feet = 0;
    if (distance >= 5280) {
        miles = parseInt((distance / 5280).toString())
        yards = parseInt(((distance - (miles * 5280))/3).toString())
        feet = distance - (miles * 5280 + yards * 3)
    } else if( distance >= 3){
        yards = parseInt((distance /3).toString())
        feet  = distance- (yards*3)
    }else{
        feet = distance
    }

    console.log(miles, yards, feet)
}
