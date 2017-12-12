$(function(){
    $('#decreaseQuantity').click(function(e){
    e.preventDefault();
    var num = $('#orderQuantity').val();
    if(num > 1){
        num--;
        $('#orderQuantity').val(num);
        $('#orderTotal').text( (num * 9500).toLocaleString() );

    }

    });

    $('#increaseQuantity').click(function(e){
    e.preventDefault();
    var num = $('#orderQuantity').val();

    if(num < 4){
        num++;
        $('#orderQuantity').val(num);
        $('#orderTotal').text( (num * 9500).toLocaleString() );
    }else{
       alert( "최대 4명까지 예매 가능합니다." );
        }
    });
//이메일 입력방식 선택
    $('#userEmail').change(function(){ 
    $("#userEmail option:selected").each(function () { 
         
        if($(this).val()== 'custom'){ //직접입력일 경우 
             $("#userEamil2").val('');                        //값 초기화 
             $("#userEamil2").attr("disabled",false); //활성화 
        }else{ //직접입력이 아닐경우 
             $("#userEamil2").val($(this).text());      //선택값 입력 
             $("#userEamil2").attr("disabled",true); //비활성화 
        } 
   }); 
}); 

});