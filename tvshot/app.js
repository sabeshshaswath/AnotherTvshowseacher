const form=document.querySelector("#f1")
    form.addEventListener('submit',async(e)=>{
        e.preventDefault();
        try{
        const input=document.querySelector('#i1').value;
            const obj=await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
            console.log(obj);
            
            // img.src=obj.data[0].show.image.medium
            // document.querySelector('.img').append(img);
            // const rating=obj.data[0].show.rating.average
            // document.querySelector('.name').innerHTML=`Name:${obj.data[0].show.name}`
            // document.querySelector('.language').innerHTML=`Language:${obj.data[0].show.language}`
            // document.querySelector('.rating').innerHTML=`Rating:${rating}`
            createwholelem(obj.data[0].show.image.medium,obj.data[0].show.rating.average,obj.data[0].show.name,obj.data[0].show.language)
        }
        catch(e){
            console.log("error bro sorry",e)
        }
    })

    const createwholelem =(srcc,rating,namee,lan)=>{
        try{
        const mc=document.createElement("div")
        const sc=document.createElement("div")
        const sc1=document.createElement("div")
        const sc2=document.createElement("div")
        const sc3=document.createElement("div")
        mc.classList.add("img")
        sc.classList.add("info")
        sc1.classList.add("name")
        sc2.classList.add("rating")
        sc3.classList.add("language")
        mc.append(sc)
        sc.append(sc1)
        sc.append(sc2)
        sc.append(sc3)
        console.log(mc);
        const img=document.createElement("img");
        img.src=srcc
        mc.append(img)
        sc1.innerHTML=namee
        sc2.innerHTML=rating
        sc3.innerHTML=lan
        document.querySelector(".bigboi").append(mc)}
        catch(e){
            console.log("opse Error!!",e)
        }
    }


