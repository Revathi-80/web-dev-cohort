fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then((response) => response.json())
    .then((data) => {
       renderToScreen(data)
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    })
    .finally(() => {
        console.log('Fetching data completed');
    })

    function renderToScreen(data) {
        const products = data.data.data
        console.log(products)
        products.forEach((product)=> {
            const li = document.createElement('li');
            li.innerText = product.title;
            document.getElementById('data').appendChild(li);
        })
    }

    // q
    // bluebird
    // are there 