$("add-user").submits(function(event){
    alert("Data inserted Successfully!")
})
$("update_user").submits(function(event){
    event.preventDefault()
    
    var unindexed_array = $(this).serializeArray();
    var data={}
        $.map(unindexed_array,function(){
            data[n['name']] = n['value']
        })
    })
    console.log(data)
    var request = {
        "url" : `http://localhost:3000/update-user/api/users/${data.id}`,
        "method":"PUT",
        "data":data,
        "Content-Type":"application/json"
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })