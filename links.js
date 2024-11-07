var addToCartEvents = [];
function redir(link) {
    var lnk_val = link.value;

    
    if (lnk_val == "Login") {
        setDataLayerOnClick(lnk_val, "Other")
        location.href = "Login.html";


    }
    else if (lnk_val == "Apply") {
        setDataLayerOnClick(lnk_val, "Other")
        location.href = "apply.html";


    }
    else if (lnk_val == "Home Page") {
        setDataLayerOnClick(lnk_val, "Other")
        location.href = "index.html"

    }
    else if (lnk_val == "About Us") {
        setDataLayerOnClick(lnk_val, "Other")
        location.href = "about_us.html"

    }
    else if (lnk_val == "Post Inquiry") {
        setDataLayerOnClick(lnk_val, "Other")
        alert("Thanks for applying. Our customer support team will reach out to you")
       location.href = "apply.html";

    }
   else if (lnk_val == "Logout") {
        setDataLayerOnClick(lnk_val, "Other")
        document.cookie = "auth=yes;max-age=0";
        document.cookie = "username=yes;max-age=0";
        document.getElementById('logout').style.visibility = 'hidden';
        if (document.body.contains(document.querySelector('login')))
        document.getElementById('login').style.visibility = 'visible';
        location.href = "Login.html"

    }

    else if (lnk_val == "Product") {
        setDataLayerOnClick(lnk_val, "Other")
        location.href = "product.html"

    }


    else if (lnk_val == "Login to your account") {
        setDataLayerOnClick(lnk_val, "Other")

        if (document.getElementById("password").value == "admin") {
            if (2) {
                var date = new Date();
                date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else {
                var expires = "";
            }


           
            document.cookie = "auth" + "=" + "yes" + expires + "; path=/";
            document.cookie = "username=" + document.getElementById("email").value.toString() + expires + "; path=/";
            location.href = "product.html"
        }
        else {

            alert("Invalid credentials")

        }

    }

    else if (lnk_val == "Add to Cart") {

        setDataLayerOnClick(lnk_val, "Other")


        if (link.id == "Add to Cart 1") {
            clearAddToCart("1001");
            addToCartEvents.push({"sku":"1001" ,prodName: "Airpods Pro", "qty": document.getElementById("addtocart1").value, "price": 21000, "currencyCode": "INR" })
        }
        if (link.id == "Add to Cart 2") {
            clearAddToCart("1002");
            addToCartEvents.push({"sku":"1002", prodName: "Redmi Note 10 Pro", "qty": document.getElementById("addtocart2").value, "price": 10200, "currencyCode": "INR" })
        }
        

    }
    if (lnk_val == "Buy") {

        setDataLayerOnClick(lnk_val, "Other");        

    }

}

function clearAddToCart(sku) {
    if (addToCartEvents.length>0){
    for (var i = 0; i < addToCartEvents.length; i++) {
        if (addToCartEvents[i].sku == sku)
             { var addToCartEvents2=addToCartEvents.splice(i,1)}

    }
}
}

function getcookie(name = '') {
    let cookies = document.cookie;
    let cookiestore = {};

    cookies = cookies.split(";");

    if (cookies[0] == "" && cookies[0][0] == undefined) {
        return undefined;
    }

    cookies.forEach(function (cookie) {
        cookie = cookie.split(/=(.+)/);
        if (cookie[0].substr(0, 1) == ' ') {
            cookie[0] = cookie[0].substr(1);
        }
        cookiestore[cookie[0]] = cookie[1];
    });

    return (name !== '' ? cookiestore[name] : cookiestore);
}
if (getcookie('auth')) {
    document.getElementById('login').style.visibility = 'hidden';
}
else {
    document.getElementById('logout').style.visibility = 'hidden';
    document.getElementById('product').style.visibility = 'hidden';
}