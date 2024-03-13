function bai4(){
    const health = [
        {
             loai: '1',
             message: 'Khám định kỳ '
         },
         {
             loai: '2',
             message: 'Tập thể dục thường xuyên '
         },
         {
             loai: '3',
             message: 'Hạn chế ăn mỡ động vật '
         }
     ]
     const weight = parseFloat(document.getElementById("weight").value);
     const height = parseFloat(document.getElementById("height").value);
     const bai4Select = document.getElementById("bai4-select");
     const bai4Option =  bai4Select.options[bai4Select.selectedIndex].value;
     const BMI = weight/(height*height)
     for(let i =0 ; i< health.length ; i++){
        const loaiVar = health[i].loai
        if(bai4Option===loaiVar){
            console.log(health[i].message)
          document.getElementById("message").innerHTML = health[i].message
        }
       }
    document.getElementById("bai4-number").innerHTML = BMI
    const categories = document.getElementById("categories")
    if(BMI<18.5){
    categories.innerHTML = "dưới chuẩn"
    }else if(BMI >= 18.5 && BMI <24.9){
        categories.innerHTML = "Bình thường"
    }else if(BMI>25 && BMI<29.9){
        categories.innerHTML = "Thừa cân "
    }else if(BMI>30 && BMI<34.9){
        categories.innerHTML = "Béo phì cấp 1"
    }else if(BMI>35 && BMI<39.9){
        categories.innerHTML = "Béo phì cấp 2"
    }else{
        categories.innerHTML = "Béo phì cấp 3"
    }
}