
function getCampaignCode(qsp) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get(qsp)==null)
    {

    }
    else
    return urlParams.get(qsp)
}

    function fetch_gender() {
        var ele = document.getElementsByName('customer_gender');

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                return ele[i].value;
        }
    
}
function getAuthInfo(qsp) {
    if (getcookie('auth')) {
      return  { "state": "authenticated", "customerID": getcookie("username") } 
    }
    else
  return  { "state": "un-authenticated", "customerID": "" } ;
}

function setDataLayerOnClick(linkName,linkType) {
    
    var getClickInfo_JSON= {"linkName":linkName,"linkType":"Other"}
    if (linkName=="Add to Cart")
    {
        adobeDataLayer.push({
            "event": "click", "interActionType": "addtocart","data": {
                "page": {
                    "pageName": document.title,
                    "pageURL": document.URL,
                    "referrer": document.referrer,
                    "campaign_code": getCampaignCode("cid")
                },
                "clickInfo":getClickInfo_JSON,
                 "customerDetails": getAuthInfo(),
                 "cart":addToCartEvents,
                 "commerce":{
                    "productListAdds":{
                      "value":1
                    }
                  }
            }}
    
    );

    }
   else if (linkName=="Post Inquiry")
        {
            adobeDataLayer.push({
                "event": "click","interActionType": "post_inquiry", "data": {
                    "page": {
                        "pageName": document.title,
                        "pageURL": document.URL,
                        "referrer": document.referrer,
                        "campaign_code": getCampaignCode("cid")
                    },
                    "clickInfo":getClickInfo_JSON,
                     "customerDetails": getAuthInfo(),
                    
                     "form_details":{
                        "first_name":document.getElementById("fname").value,
                        "last_name":document.getElementById("lname").value,
                        "product_service":document.getElementById("product_service").value,
                        "email":document.getElementById("email").value,
                        "mob":document.getElementById("mob").value,
                        "pan":document.getElementById("pan").value,
                        
                        "dob":document.getElementById("dob").value,
                        "city":document.getElementById("city").value,
                        "gender":fetch_gender()


                        }
                      }
                })
            
            }
            else if (linkName=="Login to your account")
                {
                    adobeDataLayer.push({
                        "event": "click","interActionType":"loginToYourAccount", "data": {
                            "page": {
                                "pageName": document.title,
                                "pageURL": document.URL,
                                "referrer": document.referrer,
                                "campaign_code": getCampaignCode("cid")
                            },
                            "clickInfo":getClickInfo_JSON,
                             "customerDetails": getAuthInfo()
                        
                        }}
                
                );
            
                }
                else if (linkName=="Login")
                    {
                        adobeDataLayer.push({
                            "event": "click", "interActionType":"login", "data": {
                                "page": {
                                    "pageName": document.title,
                                    "pageURL": document.URL,
                                    "referrer": document.referrer,
                                    "campaign_code": getCampaignCode("cid")
                                },
                                "clickInfo":getClickInfo_JSON,
                                 "customerDetails": getAuthInfo()
                            
                            }}
                    
                    );
                
                    }
    else if (linkName=="Buy")
        {
            adobeDataLayer.push({
                "event": "click","interActionType":"purchase", "data": {
                    "page": {
                        "pageName": document.title,
                        "pageURL": document.URL,
                        "referrer": document.referrer,
                        "campaign_code": getCampaignCode("cid")
                    },
                    "clickInfo":getClickInfo_JSON,
                     "customerDetails": getAuthInfo(),
                     "cart":addToCartEvents
                }}
        
        );
    
        }

    else{

    
        adobeDataLayer.push({
            "event": "click","interActionType":"click", "data": {
                "page": {
                    "pageName": document.title,
                    "pageURL": document.URL,
                    "referrer": document.referrer,
                    "campaign_code": getCampaignCode("cid")
                },
                "clickInfo":getClickInfo_JSON,
                 "customerDetails": getAuthInfo()
            }}
    
    );
}
        console.log(linkName+ " Click tracked")
}


window.addEventListener("load", function () 
{
    if (this.document.title=="Product")
    {
    adobeDataLayer.push({
        "event": "page_view", "interActionType":"prod_view","data": {
            "page": {
                "pageName": document.title,
                "pageURL": document.URL,
                "referrer": document.referrer,
                "campaign_code": getCampaignCode("cid")
            },
             "customerDetails": getAuthInfo(),
             "commerce":{
                "productViews":{
                  "value":1
                }
              }
        }}

);}

else
    {
    adobeDataLayer.push({
        "event": "page_view","interActionType":"page_view", "data": {
            "page": {
                "pageName": document.title,
                "pageURL": document.URL,
                "referrer": document.referrer,
                "campaign_code": getCampaignCode("cid")
            },
             "customerDetails": getAuthInfo()
        }}

);}
});
