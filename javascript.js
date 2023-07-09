import { featureproductnav} from "/featureproduct.js"
let input_search = document.getElementById("Search_input")
let form_search = document.getElementById("search_form")
let recentArray=["Mobile","phone"]
let recent_searchE1=document.querySelector(".recent_search")
form_search.addEventListener("submit",(e) =>{
    e.preventDefault()
   
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})


function renderRecent()
{
    let recent_search_html = ''
    recentArray.forEach(e1 =>{
        recent_search_html += `
        <div class="recent_list">
        <svg xmlns="http://www.w3.org/2000/svg" class="recent" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        <p>${e1}</p>
    </div>
    `
    })
    recent_searchE1.innerHTML = recent_search_html;
}
renderRecent()

/*********************Featureproduct code */
let featureproduct_listE1=document.querySelector(".featureproduct_list")
let featureproductListHtml = ''
featureproductnav.forEach(e1 =>{
    
    featureproductListHtml +=`
    <div class="featureproduct_item">
    <a href="${e1.link}">

        <div class="featureproduct_image">
            <img src="${e1.img}" />
        </div>
        <p class="feature_product_name">
        ${e1.name}
        </p>
    </a>
</div>
    `


})
featureproduct_listE1.innerHTML=featureproductListHtml

// console.log(featureproductnav)
