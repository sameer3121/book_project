var readbooks=[{
    name: "jhh"
},
{
    name:"xyz"
}]

function addtomylist(book,section){
    var liTag = document.createElement("li");
    var data = document.createTextNode(`${book.name}`)

    liTag.appendChild(data)

    if(section==="read"){
        document.querySelector("#readlist").appendChild(liTag)
    }
    else{
        document.querySelector("#wantlist").appendChild(liTag)
    }
}






readbooks.forEach(function(b){
   addtomylist(b,"read")
})

document.querySelector("#submithaveread").addEventListener("click",function(){
    var bname = document.querySelector("#haveread").value;

    var book = {
        name: bname
    }

    readbooks.push(book);

  addtomylist(book,"read")
})

var wanttoread=[{
    name:"asd"
},
{
    name:"ert"
}]

wanttoread.forEach(function(w){
   addtomylist(w,"want")

})



document.querySelector("#submitwanttoread").addEventListener("click",function(){
    var wname = document.querySelector("#wanttoread").value;

    var book={
        name: wname
    }

    wanttoread.push(book);

   addtomylist(book,"want")

})