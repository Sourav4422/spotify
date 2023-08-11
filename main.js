document.getElementById(`icon`).addEventListener(`click`, ()=>
{
   const text= document.getElementById(`search`).value
   const url=`https://api.spotify.com/v1/search?q=${text}&type=track`
   console.log(url);
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   const accessToken = 'BQBwMrvx3IxAjDO7UAd0VDoaEV5lsddZDnW_4Km9wCOhHkuHCF3l6TBWXPvzUuKNzhxMPgFoj4oLHT2LIJTYwnWhsGfoqm42iqMdVn3a-tmW2dv-IlHf3zwQdUfCQPXYGOKS_VLDdLwZyw_lknco1yPsd6Th3W5L-2acGi6flT22HqSs2URP8c7r4DpzJsBK7BoOy6MT_6K15rRwxyukOs93IP40JC8gVrv2zjcRGFuhnCKxgDpnvozES3fGzF9E1DUFWh62d2_rIQ';
   xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xhr.onreadystatechange = () =>
     {
        if (xhr.readyState==4 &&xhr.status === 200) 
        {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            let output =``
        for (let i = 0; i < response.tracks.items.length; i++) 
        {
         output +=`
         <a style="width:80%; margin:10px" href="https://open.spotify.com/track/${response.tracks.items[i].id}" target="_blank">
         <div  style="border : 2px solid white; border-radius: 5px; width:100% ; display:inline-block;">
           <span> <img style="width: 100px ; height:100px" src=" ${response.tracks.items[i].album.images[0].url}"></span>
           <div style="color:white; margin-right:50px; float:right; diplay:inline-block;">
            <ul style="list-style:none; float :left;">
                <li><h3>${response.tracks.items[i].album.name}</h3></li>
                <li><p>${response.tracks.items[i].album.artists[0].name}</p></li>
            </ul>
            </div>
         </div>
         </a>
         ` 
        }
        document.getElementById(`main`).innerHTML= output
        } 
    };
    xhr.send();
}
)